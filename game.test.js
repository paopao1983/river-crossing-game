// game.test.js — GameEngine unit tests
// Run with: node --test game.test.js  (Node 18+)

const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');

// ---- inline GameEngine (same logic as game.js, CommonJS-compatible) ----

const DANGEROUS_PAIRS = [['fox', 'chicken'], ['chicken', 'grain']];

class GameState {
  constructor() { this.reset(); }

  reset() {
    this.locations = { farmer: 'left', fox: 'left', chicken: 'left', grain: 'left' };
    this.boatSide = 'left';
    this.boatPassenger = null;
    this.selectedCharacter = null;
    this.moveCount = 0;
    this.status = 'playing';
  }

  _isSafe(locations) {
    const farmerSide = locations.farmer;
    for (const [a, b] of DANGEROUS_PAIRS) {
      if (locations[a] === locations[b] && locations[a] !== farmerSide) return false;
    }
    return true;
  }

  selectCharacter(id) {
    if (this.status !== 'playing') return false;
    if (this.locations[id] !== this.boatSide) return false;
    if (id === 'farmer') return false;
    this.selectedCharacter = this.selectedCharacter === id ? null : id;
    return true;
  }

  loadToBoat() {
    if (this.status !== 'playing') return false;
    if (!this.selectedCharacter) return false;
    if (this.boatPassenger) return false;
    this.boatPassenger = this.selectedCharacter;
    this.locations[this.selectedCharacter] = 'boat';
    this.selectedCharacter = null;
    return true;
  }

  unloadFromBoat() {
    if (!this.boatPassenger) return false;
    this.locations[this.boatPassenger] = this.boatSide;
    this.boatPassenger = null;
    return true;
  }

  cross() {
    if (this.status !== 'playing') return { ok: false, reason: null };
    if (this.locations.farmer !== this.boatSide) return { ok: false, reason: null };
    const destination = this.boatSide === 'left' ? 'right' : 'left';
    const next = { ...this.locations };
    next.farmer = destination;
    if (this.boatPassenger) next[this.boatPassenger] = destination;
    const reason = this._unsafeReason(next);
    if (reason) return { ok: false, reason };
    this.locations = next;
    this.boatSide = destination;
    this.boatPassenger = null;
    this.moveCount++;
    if (['farmer','fox','chicken','grain'].every(c => this.locations[c] === 'right')) this.status = 'won';
    return { ok: true, reason: null };
  }

  _unsafeReason(locations) {
    const farmerSide = locations.farmer;
    const names = { farmer: 'Farmer', fox: 'Fox', chicken: 'Chicken', grain: 'Grain' };
    for (const [a, b] of DANGEROUS_PAIRS) {
      if (locations[a] === locations[b] && locations[a] !== farmerSide)
        return `${names[a]} would eat the ${names[b]}!`;
    }
    return null;
  }

  getState() {
    return {
      locations: { ...this.locations },
      boatSide: this.boatSide,
      boatPassenger: this.boatPassenger,
      selectedCharacter: this.selectedCharacter,
      moveCount: this.moveCount,
      status: this.status,
    };
  }
}

// ---- Tests ----

describe('GameState — initial state', () => {
  it('all characters start on left bank', () => {
    const g = new GameState();
    const { locations } = g.getState();
    assert.equal(locations.farmer, 'left');
    assert.equal(locations.fox, 'left');
    assert.equal(locations.chicken, 'left');
    assert.equal(locations.grain, 'left');
  });

  it('boat starts on left, moveCount 0, status playing', () => {
    const g = new GameState();
    const s = g.getState();
    assert.equal(s.boatSide, 'left');
    assert.equal(s.moveCount, 0);
    assert.equal(s.status, 'playing');
  });
});

describe('GameState — selectCharacter (BR3.1)', () => {
  it('selects a character on the same bank as the boat', () => {
    const g = new GameState();
    assert.equal(g.selectCharacter('fox'), true);
    assert.equal(g.getState().selectedCharacter, 'fox');
  });

  it('deselects when same character clicked twice', () => {
    const g = new GameState();
    g.selectCharacter('fox');
    g.selectCharacter('fox');
    assert.equal(g.getState().selectedCharacter, null);
  });

  it('cannot select farmer', () => {
    const g = new GameState();
    assert.equal(g.selectCharacter('farmer'), false);
  });

  it('cannot select character on opposite bank', () => {
    const g = new GameState();
    // Move chicken to right bank first via a valid crossing
    g.selectCharacter('chicken');
    g.loadToBoat();
    g.cross(); // farmer + chicken → right
    g.cross(); // farmer alone → left
    // Now chicken is on right, boat is on left
    assert.equal(g.selectCharacter('chicken'), false);
  });
});

describe('GameState — loadToBoat (BR1.2)', () => {
  it('loads selected character onto boat', () => {
    const g = new GameState();
    g.selectCharacter('chicken');
    assert.equal(g.loadToBoat(), true);
    assert.equal(g.getState().boatPassenger, 'chicken');
    assert.equal(g.getState().locations.chicken, 'boat');
  });

  it('blocks loading when boat already has a passenger', () => {
    const g = new GameState();
    g.selectCharacter('chicken');
    g.loadToBoat();
    g.selectCharacter('fox');
    assert.equal(g.loadToBoat(), false);
  });
});

describe('GameState — cross (BR1.1, BR2.1, BR2.2, BR4.1)', () => {
  it('crosses with chicken — valid', () => {
    const g = new GameState();
    g.selectCharacter('chicken');
    g.loadToBoat();
    const result = g.cross();
    assert.equal(result.ok, true);
    assert.equal(g.getState().boatSide, 'right');
    assert.equal(g.getState().moveCount, 1);
  });

  it('blocks crossing that leaves fox and chicken unsupervised (BR2.1)', () => {
    const g = new GameState();
    const result = g.cross();
    assert.equal(result.ok, false);
    assert.ok(result.reason.includes('Fox'));
  });

  it('blocks crossing that leaves chicken and grain unsupervised (BR2.2)', () => {
    const g = new GameState();
    g.selectCharacter('fox');
    g.loadToBoat();
    const result = g.cross();
    assert.equal(result.ok, false);
    assert.ok(result.reason.includes('Chicken'));
  });

  it('increments move counter on each successful crossing (BR4.1)', () => {
    const g = new GameState();
    g.selectCharacter('chicken');
    g.loadToBoat();
    g.cross();
    assert.equal(g.getState().moveCount, 1);
    g.cross();
    assert.equal(g.getState().moveCount, 2);
  });
});

describe('GameState — win detection (BR5.1)', () => {
  it('detects win when all characters reach right bank', () => {
    const g = new GameState();
    // Known solution sequence
    g.selectCharacter('chicken'); g.loadToBoat(); g.cross(); // chicken → right
    g.cross();                                                // farmer ← left
    g.selectCharacter('fox');    g.loadToBoat(); g.cross();  // fox → right
    g.selectCharacter('chicken'); g.loadToBoat(); g.cross(); // chicken ← left
    g.selectCharacter('grain');  g.loadToBoat(); g.cross();  // grain → right
    g.cross();                                                // farmer ← left
    g.selectCharacter('chicken'); g.loadToBoat(); g.cross(); // chicken → right
    assert.equal(g.getState().status, 'won');
  });
});

describe('GameState — unloadFromBoat', () => {
  it('devuelve al pasajero al banco actual', () => {
    const g = new GameState();
    g.selectCharacter('chicken');
    g.loadToBoat();
    assert.equal(g.unloadFromBoat(), true);
    const s = g.getState();
    assert.equal(s.boatPassenger, null);
    assert.equal(s.locations.chicken, 'left');
  });

  it('retorna false si el bote está vacío', () => {
    const g = new GameState();
    assert.equal(g.unloadFromBoat(), false);
  });

  it('reemplaza pasajero con unload+load en un solo paso', () => {
    const g = new GameState();
    g.selectCharacter('chicken');
    g.loadToBoat();
    g.selectCharacter('fox');
    g.unloadFromBoat();
    g.loadToBoat();
    const s = g.getState();
    assert.equal(s.boatPassenger, 'fox');
    assert.equal(s.locations.chicken, 'left');
    assert.equal(s.locations.fox, 'boat');
  });
});

describe('GameState — reset', () => {
  it('resets all state to initial values', () => {
    const g = new GameState();
    g.selectCharacter('chicken'); g.loadToBoat(); g.cross();
    g.reset();
    const s = g.getState();
    assert.equal(s.moveCount, 0);
    assert.equal(s.status, 'playing');
    assert.equal(s.boatSide, 'left');
    assert.equal(s.locations.chicken, 'left');
  });
});
