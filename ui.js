// ui.js — UIRenderer

const EMOJI = { farmer: '🧑🌾', fox: '🦊', chicken: '🐔', grain: '🌾' };
const LABEL = { farmer: 'Farmer', fox: 'Fox', chicken: 'Chicken', grain: 'Grain' };

function createCharacterButton(id, isSelected, isClickable) {
  const btn = document.createElement('button');
  btn.className = 'character' + (isSelected ? ' selected' : '');
  btn.dataset.id = id;
  btn.setAttribute('aria-label', LABEL[id] + (isSelected ? ' (selected)' : ''));
  btn.disabled = !isClickable;
  btn.innerHTML = `${EMOJI[id]}<span>${LABEL[id]}</span>`;
  if (isClickable) {
    btn.addEventListener('click', () => {
      gameEngine.selectCharacter(id);
      render();
    });
  }
  return btn;
}

function render() {
  const { locations, boatSide, boatPassenger, selectedCharacter, moveCount, status } = gameEngine.getState();

  // Render each bank
  ['left', 'right'].forEach(side => {
    const container = document.querySelector('#' + side + '-bank .characters');
    container.innerHTML = '';

    // Characters on this bank (excluding farmer — rendered separately first)
    const onThisSide = ['farmer', 'fox', 'chicken', 'grain']
      .filter(id => locations[id] === side);

    onThisSide.forEach(id => {
      // Farmer is never selectable (always the operator)
      const isClickable = side === boatSide && id !== 'farmer';
      const isSelected = selectedCharacter === id;
      container.appendChild(createCharacterButton(id, isSelected, isClickable));
    });
  });

  // Boat position
  document.getElementById('boat-container').className = 'boat-' + boatSide;

  // Boat passengers display
  const passengersEl = document.getElementById('boat-passengers');
  passengersEl.innerHTML = boatPassenger ? `${EMOJI[boatPassenger]}` : '';

  // Move counter
  MoveCounter.update(moveCount);

  // Win overlay
  const overlay = document.getElementById('win-overlay');
  if (status === 'won') {
    document.getElementById('final-move-count').textContent = moveCount;
    overlay.classList.remove('hidden');
  } else {
    overlay.classList.add('hidden');
  }
}

function init() {
  const feedback = document.getElementById('feedback');
  let feedbackTimer = null;

  function showFeedback(msg) {
    feedback.textContent = msg;
    feedback.classList.remove('hidden');
    clearTimeout(feedbackTimer);
    feedbackTimer = setTimeout(() => feedback.classList.add('hidden'), 2500);
  }

  document.getElementById('boat').addEventListener('click', () => {
    const { selectedCharacter, boatPassenger } = gameEngine.getState();
    if (boatPassenger && selectedCharacter) {
      gameEngine.unloadFromBoat();
    } else if (!boatPassenger && selectedCharacter) {
      gameEngine.loadToBoat();
    } else {
      const result = gameEngine.cross();
      if (!result.ok && result.reason) showFeedback('⚠️ ' + result.reason);
    }
    render();
  });

  document.getElementById('play-again').addEventListener('click', () => {
    gameEngine.reset();
    feedback.classList.add('hidden');
    render();
  });

  render();
}

document.addEventListener('DOMContentLoaded', init);
