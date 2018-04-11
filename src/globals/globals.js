var globals = (() => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return {
    sheet: {
      character: spreadsheet.getSheetByName('Character'),
      spellbook: spreadsheet.getSheetByName('Spellbook'),
      inventory: spreadsheet.getSheetByName('Equipment + Inventory'),
      stronghold: spreadsheet.getSheetByName('Stronghold'),
    },
    ability: {
      strength: 'Strength',
      dexterity: 'Dexterity',
      constitution: 'Constitution',
      intelligence: 'Intelligence',
      wisdom: 'Wisdom',
      charisma: 'Charisma',
    },
    spellSlotsRange: 'N4:N',
    moneyRange: 'B1:F1',
  };
})();

function getCell(sheet, keyword, xOffset = 0, yOffset = 0) {
  const sheetData = sheet.getDataRange().getValues();
  let y;
  for (y = 0; y < sheetData.length; y += 1) {
    const x = sheetData[y].indexOf(keyword);
    if (x >= 0) {
      return sheet.getRange(1 + y + yOffset, 1 + x + xOffset);
    }
  }
}

function getCellValue(sheet, keyword, xOffset = 0, yOffset = 0) {
  return getCell(sheet, keyword, xOffset, yOffset).getValue();
}
