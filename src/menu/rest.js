function shortRest() {
  warlockRest();
}

function longRest() {
  warlockRest();
}

function warlockRest() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Spellbook");
  let spellSlotsRange = sheet.getRange(get('spellSlotsRange'));
  let i;
  for (i = 1; i <= spellSlotsRange.getHeight(); i += 1) {
    spellSlotsRange.getCell(i, 1).setValue('');
  }
}