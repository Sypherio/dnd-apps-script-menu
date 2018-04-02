function rollD(max, modifier = 0) {
  return (Math.floor(Math.random() * Math.floor(max))) + modifier;
}

function rollInitiative() {
  const modifier = 1;
  const roll = rollD(20, modifier);
  display('Rolled ' + roll + ' (' + (roll - modifier) + ' + ' + modifier +') for initiative!');
}

function rollSpellHit() {
  return;
}

function rollD4() {
  return rollD(4);
}

function rollD6() {
  return rollD(6);
}

function rollD8() {
  return rollD(8);
}

function rollD10() {
  return rollD(10);
}

function rollD12() {
  return rollD(12);
}

function rollD20() {
  return rollD(20);
}

function rollD100() {
  return rollD(100);
}

function rollDX() {
  // TODO: create input dialogue asking for die sides
  return rollD(0);
}