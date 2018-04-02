function rollD(dieSides, modifier = 0, amount = 1) {
  let total = 0;
  let i;
  for (i = 0; i < amount; i += 1) {
    total += (Math.floor(Math.random() * Math.floor(dieSides))) + modifier;
  }
  return total;
}

function rollInitiative() {
  const modifier = 1;
  const roll = rollD(20, modifier);
  display(globals.sheet);
  display('Rolled ' + roll + ' (' + (roll - modifier) + ' + ' + modifier +') for initiative!');
}

function rollSpellHit() {
  return;
}

function rollDX() {
  // TODO: create input dialogue asking for die sides
  return rollD(0);
}