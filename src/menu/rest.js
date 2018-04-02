function shortRest() {
  warlockRest();
}

function longRest() {
  warlockRest();
}

function warlockRest() {
  let spellSlotsRange = globals.sheet.spellbook.getRange(globals.spellSlotsRange);
  let i;
  for (i = 1; i <= spellSlotsRange.getHeight(); i += 1) {
    spellSlotsRange.getCell(i, 1).setValue('');
  }
}
