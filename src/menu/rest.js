function shortRest() {
  warlockRest();
}

function longRest() {
  warlockRest();
}

function warlockRest() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Spellbook");
  var spellSlotsRange = sheet.getRange(get('spellSlotsRange'));
  for (var i = 1; i <= spellSlotsRange.getHeight(); i += 1) {
    spellSlotsRange.getCell(i, 1).setValue('');
  }
}