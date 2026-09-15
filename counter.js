// counter.js — MoveCounter

const MoveCounter = {
  update(count) {
    document.getElementById('move-count').textContent = count;
  },
  reset() {
    this.update(0);
  },
};
