function rollD(dieSides, modifier = 0, amount = 1) {
  let total = 0;
  let i;
  for (i = 0; i < amount; i += 1) {
    total += randInt(dieSides) + modifier;
  }
  return total;
}

function rollInitiative() {
  // TODO: get modifier from proficiency (or is it dexterity? or is proficiency calculated using dexterity?)
  const modifier = 1;
  const roll = rollD(20, modifier);
  display('Rolled ' + roll + ' (' + (roll - modifier) + ' + ' + modifier +') for initiative!');
}

function rollSpellHit() {
  return;
}

function rollX() {
  // TODO: create input dialogue asking for die sides, modifier, and number of dice
  return rollD(0);
}
