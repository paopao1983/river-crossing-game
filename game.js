// game.js — GameEngine

const CHARACTERS = ['farmer', 'fox', 'chicken', 'grain'];

const DANGEROUS_PAIRS = [
  ['fox', 'chicken'],
  ['chicken', 'grain'],
];

class GameState {
  constructor() {
    this.reset();
  }

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
    if (id === 'farmer') return false; // farmer is always the operator
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

    this.locations = next;
    this.boatSide = destination;
    this.boatPassenger = null;
    this.moveCount++;

    const reason = this._unsafeReason(this.locations);
    if (reason) { this.status = 'lost'; this.lossReason = reason; return { ok: true, reason }; }
    if (this._checkWin()) this.status = 'won';
    return { ok: true, reason: null };
  }

  _unsafeReason(locations) {
    const farmerSide = locations.farmer;
    const messages = {
      'fox-chicken':   '¡El Zorro se comió al Pollo! 🦊🐔',
      'chicken-grain': '¡El Pollo se comió el Grano! 🐔🌾',
    };
    for (const [a, b] of DANGEROUS_PAIRS) {
      if (locations[a] === locations[b] && locations[a] !== farmerSide) {
        return messages[`${a}-${b}`];
      }
    }
    return null;
  }

  _checkWin() {
    return CHARACTERS.every(c => this.locations[c] === 'right');
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

const gameEngine = new GameState();
