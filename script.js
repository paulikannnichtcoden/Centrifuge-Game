const HOLE_COUNT = 20;
const COLORS = ["red", "green", "blue", "yellow"];
const WEIGHTS = {
  red: 1,
  green: 2,
  blue: 3,
  yellow: 4
};

const COLOR_LABELS = {
  red: "Red",
  green: "Green",
  blue: "Blue",
  yellow: "Yellow"
};

const LEVELS = [
  {
    solution: [
      { hole: 0, color: "red" },
      { hole: 10, color: "red" }
    ],
    lockedHoles: [0],
    tolerance: 0.25
  },
  {
    solution: [
      { hole: 2, color: "red" },
      { hole: 12, color: "red" },
      { hole: 7, color: "red" },
      { hole: 17, color: "red" }
    ],
    lockedHoles: [2, 7],
    tolerance: 0.25
  },
  {
    solution: [
      { hole: 0, color: "red" },
      { hole: 10, color: "red" },
      { hole: 5, color: "green" },
      { hole: 15, color: "green" }
    ],
    lockedHoles: [0, 5],
    tolerance: 0.25
  },
  {
    solution: [
      { hole: 1, color: "green" },
      { hole: 11, color: "green" },
      { hole: 4, color: "red" },
      { hole: 14, color: "red" },
      { hole: 8, color: "red" },
      { hole: 18, color: "red" }
    ],
    lockedHoles: [1, 4, 18],
    tolerance: 0.15
  },
  {
    solution: [
      { hole: 0, color: "green" },
      { hole: 9, color: "red" },
      { hole: 11, color: "red" }
    ],
    lockedHoles: [0],
    tolerance: 0.15
  },
  {
    solution: [
      { hole: 0, color: "blue" },
      { hole: 9, color: "red" },
      { hole: 10, color: "red" },
      { hole: 11, color: "red" },
      { hole: 5, color: "green" },
      { hole: 15, color: "green" }
    ],
    lockedHoles: [0, 10, 5],
    tolerance: 0.15
  },
  {
    solution: [
      { hole: 1, color: "blue" },
      { hole: 11, color: "blue" },
      { hole: 4, color: "green" },
      { hole: 14, color: "green" },
      { hole: 7, color: "red" },
      { hole: 17, color: "red" }
    ],
    lockedHoles: [1, 4, 7],
    tolerance: 0.15
  },
  {
    solution: [
      { hole: 0, color: "blue" },
      { hole: 5, color: "blue" },
      { hole: 10, color: "blue" },
      { hole: 15, color: "blue" },
      { hole: 2, color: "green" },
      { hole: 12, color: "green" },
      { hole: 8, color: "red" },
      { hole: 18, color: "red" }
    ],
    lockedHoles: [0, 10, 2, 8],
    tolerance: 0.15
  },
  {
    solution: [
      { hole: 0, color: "red" },
      { hole: 4, color: "red" },
      { hole: 8, color: "red" },
      { hole: 12, color: "red" },
      { hole: 16, color: "red" },
      { hole: 1, color: "blue" },
      { hole: 11, color: "blue" },
      { hole: 3, color: "green" },
      { hole: 13, color: "green" }
    ],
    lockedHoles: [0, 4, 1, 13],
    tolerance: 0.08
  },
  {
    solution: [
      { hole: 0, color: "yellow" },
      { hole: 10, color: "yellow" },
      { hole: 2, color: "blue" },
      { hole: 12, color: "blue" },
      { hole: 5, color: "green" },
      { hole: 15, color: "green" },
      { hole: 8, color: "red" },
      { hole: 18, color: "red" }
    ],
    lockedHoles: [0, 2, 5, 8],
    tolerance: 0.08
  },
  {
    solution: [
      { hole: 0, color: "yellow" },
      { hole: 5, color: "yellow" },
      { hole: 10, color: "yellow" },
      { hole: 15, color: "yellow" },
      { hole: 2, color: "blue" },
      { hole: 7, color: "blue" },
      { hole: 12, color: "blue" },
      { hole: 17, color: "blue" },
      { hole: 4, color: "green" },
      { hole: 14, color: "green" },
      { hole: 9, color: "red" },
      { hole: 19, color: "red" }
    ],
    lockedHoles: [0, 10, 2, 12, 4, 9],
    tolerance: 0.08
  },
  {
    solution: [
      { hole: 1, color: "green" },
      { hole: 6, color: "green" },
      { hole: 11, color: "green" },
      { hole: 16, color: "green" },
      { hole: 3, color: "yellow" },
      { hole: 8, color: "yellow" },
      { hole: 13, color: "yellow" },
      { hole: 18, color: "yellow" },
      { hole: 0, color: "blue" },
      { hole: 10, color: "blue" },
      { hole: 5, color: "red" },
      { hole: 15, color: "red" }
    ],
    lockedHoles: [1, 11, 3, 13, 0, 5],
    tolerance: 0.08
  },
  {
    solution: [
      { hole: 0, color: "red" },
      { hole: 4, color: "red" },
      { hole: 8, color: "red" },
      { hole: 12, color: "red" },
      { hole: 16, color: "red" },
      { hole: 1, color: "green" },
      { hole: 5, color: "green" },
      { hole: 9, color: "green" },
      { hole: 13, color: "green" },
      { hole: 17, color: "green" },
      { hole: 2, color: "blue" },
      { hole: 6, color: "blue" },
      { hole: 10, color: "blue" },
      { hole: 14, color: "blue" },
      { hole: 18, color: "blue" },
      { hole: 3, color: "yellow" },
      { hole: 7, color: "yellow" },
      { hole: 11, color: "yellow" },
      { hole: 15, color: "yellow" },
      { hole: 19, color: "yellow" }
    ],
    lockedHoles: [0, 8, 16, 1, 9, 17, 2, 10, 18, 3, 11, 19],
    tolerance: 0.08
  },
  {
    solution: [
      { hole: 4, color: "red" },
      { hole: 9, color: "red" },
      { hole: 14, color: "red" },
      { hole: 19, color: "red" },
      { hole: 0, color: "green" },
      { hole: 5, color: "green" },
      { hole: 10, color: "green" },
      { hole: 15, color: "green" },
      { hole: 1, color: "blue" },
      { hole: 6, color: "blue" },
      { hole: 11, color: "blue" },
      { hole: 16, color: "blue" },
      { hole: 2, color: "yellow" },
      { hole: 7, color: "yellow" },
      { hole: 12, color: "yellow" },
      { hole: 17, color: "yellow" }
    ],
    lockedHoles: [0, 10, 1, 11, 2, 12, 4, 14],
    tolerance: 0.08
  },
  {
    solution: [
      { hole: 0, color: "red" },
      { hole: 5, color: "red" },
      { hole: 10, color: "red" },
      { hole: 15, color: "red" },
      { hole: 4, color: "red" },
      { hole: 9, color: "red" },
      { hole: 14, color: "red" },
      { hole: 19, color: "red" },
      { hole: 1, color: "green" },
      { hole: 6, color: "green" },
      { hole: 11, color: "green" },
      { hole: 16, color: "green" },
      { hole: 2, color: "blue" },
      { hole: 7, color: "blue" },
      { hole: 12, color: "blue" },
      { hole: 17, color: "blue" },
      { hole: 3, color: "yellow" },
      { hole: 8, color: "yellow" },
      { hole: 13, color: "yellow" },
      { hole: 18, color: "yellow" }
    ],
    lockedHoles: [0, 10, 4, 14, 1, 11, 2, 12, 3, 13],
    tolerance: 0.03
  },
  {
    solution: [
      { hole: 0, color: "yellow" },
      { hole: 4, color: "yellow" },
      { hole: 8, color: "yellow" },
      { hole: 12, color: "yellow" },
      { hole: 16, color: "yellow" },
      { hole: 1, color: "blue" },
      { hole: 5, color: "blue" },
      { hole: 9, color: "blue" },
      { hole: 13, color: "blue" },
      { hole: 17, color: "blue" },
      { hole: 2, color: "green" },
      { hole: 6, color: "green" },
      { hole: 10, color: "green" },
      { hole: 14, color: "green" },
      { hole: 18, color: "green" },
      { hole: 3, color: "red" },
      { hole: 7, color: "red" },
      { hole: 11, color: "red" },
      { hole: 15, color: "red" },
      { hole: 19, color: "red" }
    ],
    lockedHoles: [0, 8, 16, 1, 9, 17, 2, 10, 18, 3, 11],
    tolerance: 0.03
  },
  {
    solution: [
      { hole: 0, color: "yellow" },
      { hole: 5, color: "yellow" },
      { hole: 10, color: "yellow" },
      { hole: 15, color: "yellow" },
      { hole: 2, color: "yellow" },
      { hole: 7, color: "yellow" },
      { hole: 12, color: "yellow" },
      { hole: 17, color: "yellow" },
      { hole: 1, color: "blue" },
      { hole: 6, color: "blue" },
      { hole: 11, color: "blue" },
      { hole: 16, color: "blue" },
      { hole: 3, color: "green" },
      { hole: 8, color: "green" },
      { hole: 13, color: "green" },
      { hole: 18, color: "green" },
      { hole: 4, color: "red" },
      { hole: 9, color: "red" },
      { hole: 14, color: "red" },
      { hole: 19, color: "red" }
    ],
    lockedHoles: [0, 10, 2, 12, 1, 11, 3, 13, 4, 14],
    tolerance: 0.03
  },
  {
    solution: [
      { hole: 0, color: "red" },
      { hole: 4, color: "red" },
      { hole: 8, color: "red" },
      { hole: 12, color: "red" },
      { hole: 16, color: "red" },
      { hole: 1, color: "yellow" },
      { hole: 5, color: "yellow" },
      { hole: 9, color: "yellow" },
      { hole: 13, color: "yellow" },
      { hole: 17, color: "yellow" },
      { hole: 2, color: "green" },
      { hole: 6, color: "green" },
      { hole: 10, color: "green" },
      { hole: 14, color: "green" },
      { hole: 18, color: "green" },
      { hole: 3, color: "blue" },
      { hole: 7, color: "blue" },
      { hole: 11, color: "blue" },
      { hole: 15, color: "blue" },
      { hole: 19, color: "blue" }
    ],
    lockedHoles: [0, 4, 16, 1, 5, 17, 2, 10, 18, 3, 11, 19],
    tolerance: 0.03
  },
  {
    solution: [
      { hole: 0, color: "blue" },
      { hole: 5, color: "blue" },
      { hole: 10, color: "blue" },
      { hole: 15, color: "blue" },
      { hole: 4, color: "blue" },
      { hole: 9, color: "blue" },
      { hole: 14, color: "blue" },
      { hole: 19, color: "blue" },
      { hole: 1, color: "red" },
      { hole: 6, color: "red" },
      { hole: 11, color: "red" },
      { hole: 16, color: "red" },
      { hole: 2, color: "green" },
      { hole: 7, color: "green" },
      { hole: 12, color: "green" },
      { hole: 17, color: "green" },
      { hole: 3, color: "yellow" },
      { hole: 8, color: "yellow" },
      { hole: 13, color: "yellow" },
      { hole: 18, color: "yellow" }
    ],
    lockedHoles: [0, 10, 4, 14, 1, 6, 2, 12, 3, 13],
    tolerance: 0.03
  },
  {
    solution: [
      { hole: 0, color: "yellow" },
      { hole: 4, color: "yellow" },
      { hole: 8, color: "yellow" },
      { hole: 12, color: "yellow" },
      { hole: 16, color: "yellow" },
      { hole: 1, color: "red" },
      { hole: 5, color: "red" },
      { hole: 9, color: "red" },
      { hole: 13, color: "red" },
      { hole: 17, color: "red" },
      { hole: 2, color: "blue" },
      { hole: 6, color: "blue" },
      { hole: 10, color: "blue" },
      { hole: 14, color: "blue" },
      { hole: 18, color: "blue" },
      { hole: 3, color: "green" },
      { hole: 7, color: "green" },
      { hole: 11, color: "green" },
      { hole: 15, color: "green" },
      { hole: 19, color: "green" }
    ],
    lockedHoles: [0, 8, 1, 9, 2, 10, 3, 11],
    tolerance: 0.03
  }
];

const state = {
  currentLevel: 0,
  placements: Array(HOLE_COUNT).fill(null),
  inventory: createEmptyInventory(),
  dragging: null,
  isSpinning: false,
  gameActive: false,
  timerId: null,
  timerStart: 0,
  warningId: null,
  highlightedHole: null
};

const elements = {
  levelText: document.getElementById("levelText"),
  timerText: document.getElementById("timerText"),
  toleranceText: document.getElementById("toleranceText"),
  inventoryList: document.getElementById("inventoryList"),
  rotorStage: document.getElementById("rotorStage"),
  rotorPlate: document.getElementById("rotorPlate"),
  spinButton: document.getElementById("spinButton"),
  warning: document.getElementById("warning"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  modalTitle: document.getElementById("modalTitle"),
  modalText: document.getElementById("modalText"),
  modalMeta: document.getElementById("modalMeta"),
  modalActions: document.getElementById("modalActions")
};

elements.spinButton.addEventListener("click", handleStartSpin);

loadLevel(0);
resetTimer();
setGameActive(false);
showStartPopup();

function createEmptyInventory() {
  return COLORS.reduce((inventory, color) => {
    inventory[color] = 0;
    return inventory;
  }, {});
}

function loadLevel(levelIndex) {
  state.currentLevel = levelIndex;
  state.placements = Array(HOLE_COUNT).fill(null);
  state.inventory = createEmptyInventory();
  state.dragging = null;
  state.isSpinning = false;

  const level = LEVELS[levelIndex];
  const lockedSet = new Set(level.lockedHoles);

  level.solution.forEach((tube) => {
    if (lockedSet.has(tube.hole)) {
      state.placements[tube.hole] = { color: tube.color, locked: true };
    } else {
      state.inventory[tube.color] += 1;
    }
  });

  elements.levelText.textContent = `Level ${levelIndex + 1} / ${LEVELS.length}`;
  elements.toleranceText.textContent = `Tolerance ${level.tolerance.toFixed(2)}`;
  elements.rotorStage.classList.remove("danger-shake");
  elements.rotorPlate.classList.remove("spinning", "broken");
  clearWarning();
  clearDropHighlight();
  renderRotor();
  renderInventory();
  updateSpinButton();
}

function renderRotor() {
  elements.rotorPlate.innerHTML = "";

  for (let index = 0; index < HOLE_COUNT; index += 1) {
    const visualAngle = (Math.PI * 2 * index) / HOLE_COUNT - Math.PI / 2;
    const hole = document.createElement("button");
    hole.type = "button";
    hole.className = "hole";
    hole.dataset.hole = String(index);
    hole.style.setProperty("--hole-x", `${50 + Math.cos(visualAngle) * 37}%`);
    hole.style.setProperty("--hole-y", `${50 + Math.sin(visualAngle) * 37}%`);
    hole.setAttribute("aria-label", `Hole ${index + 1}`);

    const placement = state.placements[index];
    if (placement) {
      hole.classList.add("has-tube");
      const tube = createTubeElement(placement.color, { locked: placement.locked });
      tube.style.setProperty("--tube-rotation", `${visualAngle * 180 / Math.PI + 90}deg`);
      hole.appendChild(tube);

      if (!placement.locked) {
        hole.addEventListener("pointerdown", (event) => startDragFromHole(event, index));
      }
    }

    const number = document.createElement("span");
    number.className = "hole-number";
    number.textContent = String(index + 1);
    hole.appendChild(number);
    elements.rotorPlate.appendChild(hole);
  }
}

function renderInventory() {
  elements.inventoryList.innerHTML = "";
  const visibleColors = COLORS.filter((color) => state.inventory[color] > 0);

  if (visibleColors.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-inventory";
    empty.textContent = "All tubes placed.";
    elements.inventoryList.appendChild(empty);
    return;
  }

  visibleColors.forEach((color) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "inventory-item";
    item.dataset.color = color;
    item.setAttribute("aria-label", `${COLOR_LABELS[color]} tube, ${state.inventory[color]} available`);
    item.addEventListener("pointerdown", (event) => startDragFromInventory(event, color));

    item.appendChild(createTubeElement(color));

    const name = document.createElement("span");
    name.className = "inventory-name";
    name.textContent = COLOR_LABELS[color];
    item.appendChild(name);

    const count = document.createElement("span");
    count.className = "inventory-count";
    count.textContent = `x ${state.inventory[color]}`;
    item.appendChild(count);

    elements.inventoryList.appendChild(item);
  });
}

function createTubeElement(color, options = {}) {
  const tube = document.createElement("span");
  tube.className = `tube tube-${color}`;
  tube.setAttribute("aria-label", `${COLOR_LABELS[color]} tube`);

  const cap = document.createElement("span");
  cap.className = "tube-cap";
  tube.appendChild(cap);

  const body = document.createElement("span");
  body.className = "tube-body";
  tube.appendChild(body);

  if (options.locked) {
    tube.classList.add("locked");
    const badge = document.createElement("span");
    badge.className = "lock-badge";
    badge.textContent = "LOCK";
    tube.appendChild(badge);
  }

  return tube;
}

function startDragFromInventory(event, color) {
  if (!canInteract() || state.inventory[color] <= 0) {
    return;
  }

  event.preventDefault();
  beginDrag({
    color,
    origin: "inventory",
    fromHole: null
  }, event);
}

function startDragFromHole(event, holeIndex) {
  if (!canInteract()) {
    return;
  }

  const placement = state.placements[holeIndex];
  if (!placement || placement.locked) {
    return;
  }

  event.preventDefault();
  state.placements[holeIndex] = null;
  beginDrag({
    color: placement.color,
    origin: "hole",
    fromHole: holeIndex
  }, event);
  renderRotor();
}

function beginDrag(dragData, event) {
  const ghost = createTubeElement(dragData.color);
  ghost.classList.add("drag-ghost");
  document.body.appendChild(ghost);

  state.dragging = {
    ...dragData,
    ghost
  };

  document.body.classList.add("is-dragging");
  moveGhost(event);
  document.addEventListener("pointermove", handlePointerMove);
  document.addEventListener("pointerup", handlePointerUp);
  document.addEventListener("pointercancel", handlePointerCancel);
}

function handlePointerMove(event) {
  if (!state.dragging) {
    return;
  }

  event.preventDefault();
  moveGhost(event);
  const hole = getHoleUnderPointer(event);
  setDropHighlight(hole);
}

function handlePointerUp(event) {
  if (!state.dragging) {
    return;
  }

  event.preventDefault();
  const hole = getHoleUnderPointer(event);
  const dropIndex = hole ? Number(hole.dataset.hole) : null;
  const dropped = Number.isInteger(dropIndex) && !state.placements[dropIndex];

  if (dropped) {
    state.placements[dropIndex] = { color: state.dragging.color, locked: false };
    if (state.dragging.origin === "inventory") {
      state.inventory[state.dragging.color] -= 1;
    }
  } else if (state.dragging.origin === "hole") {
    state.inventory[state.dragging.color] += 1;
  }

  endDrag();
  renderRotor();
  renderInventory();
}

function handlePointerCancel() {
  if (!state.dragging) {
    return;
  }

  if (state.dragging.origin === "hole") {
    state.inventory[state.dragging.color] += 1;
  }

  endDrag();
  renderRotor();
  renderInventory();
}

function moveGhost(event) {
  state.dragging.ghost.style.left = `${event.clientX}px`;
  state.dragging.ghost.style.top = `${event.clientY}px`;
}

function getHoleUnderPointer(event) {
  const element = document.elementFromPoint(event.clientX, event.clientY);
  return element ? element.closest(".hole") : null;
}

function setDropHighlight(hole) {
  clearDropHighlight();

  if (!hole) {
    return;
  }

  const holeIndex = Number(hole.dataset.hole);
  const isFree = !state.placements[holeIndex];
  hole.classList.add(isFree ? "drop-valid" : "drop-invalid");
  state.highlightedHole = hole;
}

function clearDropHighlight() {
  if (state.highlightedHole) {
    state.highlightedHole.classList.remove("drop-valid", "drop-invalid");
    state.highlightedHole = null;
  }
}

function endDrag() {
  if (state.dragging && state.dragging.ghost) {
    state.dragging.ghost.remove();
  }

  document.body.classList.remove("is-dragging");
  clearDropHighlight();
  document.removeEventListener("pointermove", handlePointerMove);
  document.removeEventListener("pointerup", handlePointerUp);
  document.removeEventListener("pointercancel", handlePointerCancel);
  state.dragging = null;
}

function canInteract() {
  return state.gameActive && !state.isSpinning;
}

async function handleStartSpin() {
  if (!state.gameActive || state.isSpinning) {
    return;
  }

  if (remainingInventoryCount() > 0) {
    showWarning("Place all tubes first!");
    return;
  }

  clearWarning();
  state.isSpinning = true;
  updateSpinButton();
  await spinRotor();

  const imbalance = calculateImbalance();
  const level = LEVELS[state.currentLevel];

  if (imbalance <= level.tolerance) {
    state.isSpinning = false;
    updateSpinButton();
    completeLevel();
  } else {
    await breakRotor();
    state.isSpinning = false;
    setGameActive(false);
    stopTimer();
    showGameOver(imbalance);
  }
}

function spinRotor() {
  elements.rotorPlate.classList.remove("spinning", "broken");
  void elements.rotorPlate.offsetWidth;
  elements.rotorPlate.classList.add("spinning");

  // Placeholder for a spin sound effect, if local audio is added later.
  return new Promise((resolve) => {
    window.setTimeout(() => {
      elements.rotorPlate.classList.remove("spinning");
      resolve();
    }, 5000);
  });
}

function breakRotor() {
  elements.rotorStage.classList.remove("danger-shake");
  void elements.rotorStage.offsetWidth;
  elements.rotorStage.classList.add("danger-shake");
  elements.rotorPlate.classList.add("broken");

  // Placeholder for a breaking sound effect, if local audio is added later.
  return new Promise((resolve) => {
    window.setTimeout(resolve, 760);
  });
}

function completeLevel() {
  if (state.currentLevel === LEVELS.length - 1) {
    stopTimer();
    showModal({
      title: "Game Complete!",
      text: "You balanced all centrifuges.",
      meta: `Final Time: ${formatTime(Date.now() - state.timerStart)}`,
      buttons: [
        {
          label: "Play Again",
          action: startNewGame
        }
      ]
    });
    return;
  }

  showModal({
    title: "Level Complete!",
    text: "The centrifuge is balanced.",
    buttons: [
      {
        label: "Next Level",
        action: () => {
          loadLevel(state.currentLevel + 1);
        }
      }
    ]
  });
}

function showGameOver(imbalance) {
  showModal({
    title: "Game Over",
    text: "The centrifuge was unbalanced and broke.",
    meta: `Imbalance: ${imbalance.toFixed(2)}`,
    buttons: [
      {
        label: "Restart Game",
        action: startNewGame
      }
    ]
  });
}

function showStartPopup() {
  showModal({
    title: "Centrifuge Balance",
    text: "Balance the centrifuge by placing the tubes into the correct holes. The colors have different weights. Press START when you think the rotor is balanced.",
    buttons: [
      {
        label: "Play",
        action: startNewGame
      }
    ]
  });
}

function showModal({ title, text, meta = "", buttons }) {
  elements.modalTitle.textContent = title;
  elements.modalText.textContent = text;
  elements.modalMeta.textContent = meta;
  elements.modalActions.innerHTML = "";

  buttons.forEach((buttonConfig) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = buttonConfig.label;
    button.addEventListener("click", () => {
      hideModal();
      buttonConfig.action();
    });
    elements.modalActions.appendChild(button);
  });

  elements.modalBackdrop.classList.remove("hidden");
}

function hideModal() {
  elements.modalBackdrop.classList.add("hidden");
}

function startNewGame() {
  resetTimer();
  setGameActive(true);
  loadLevel(0);
  startTimer();
}

function setGameActive(active) {
  state.gameActive = active;
  updateSpinButton();
}

function updateSpinButton() {
  elements.spinButton.disabled = !state.gameActive || state.isSpinning;
}

function remainingInventoryCount() {
  return COLORS.reduce((sum, color) => sum + state.inventory[color], 0);
}

function calculateImbalance() {
  let x = 0;
  let y = 0;

  state.placements.forEach((tube, index) => {
    if (!tube) {
      return;
    }

    const angle = (Math.PI * 2 * index) / HOLE_COUNT;
    const weight = WEIGHTS[tube.color];
    x += weight * Math.cos(angle);
    y += weight * Math.sin(angle);
  });

  return Math.sqrt(x * x + y * y);
}

function startTimer() {
  stopTimer();
  state.timerStart = Date.now();
  updateTimer();
  state.timerId = window.setInterval(updateTimer, 250);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function resetTimer() {
  stopTimer();
  state.timerStart = Date.now();
  elements.timerText.textContent = "00:00";
}

function updateTimer() {
  elements.timerText.textContent = formatTime(Date.now() - state.timerStart);
}

function formatTime(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function showWarning(message) {
  window.clearTimeout(state.warningId);
  elements.warning.textContent = message;
  elements.warning.classList.add("show");
  state.warningId = window.setTimeout(clearWarning, 1800);
}

function clearWarning() {
  window.clearTimeout(state.warningId);
  state.warningId = null;
  elements.warning.textContent = "";
  elements.warning.classList.remove("show");
}
