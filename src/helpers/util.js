function playerLevel(){
  return SpreadsheetApp.getActiveSpreadsheet()
                       .getSheetByName("Character")
                       .getRange(globals.levelCell)
                       .getValue();
}

function bonus(bonusName) {
  return lookupByKeyword("Bonuses", globals.bonusRange, bonusName, 0, 1);
}

function abilityScore(abilityScoreName) {
  return lookupByKeyword("Character", globals.abilityScoreRange, abilityScoreName, 1, 0);
}

function abilityScoreMod(abilityScoreName) {
  return Math.floor((abilityScore(abilityScoreName) - 10) / 2);
}

function levelChart(attributeName, level) {
  if (!level) {
    level = playerLevel();
  }
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Metadata");
  let headers = sheet.getRange(globals.levelChartHeaders).getValues();
  let data = sheet.getRange(globals.levelChartData).getValues();
  let colIndex = headers[0].indexOf(attributeName);
  return data[level - 1][colIndex];
}

function lookupByKeyword(sheetName, dataRange, keyword, rowOffset, colOffset) {
  let data = SpreadsheetApp.getActiveSpreadsheet()
                           .getSheetByName(sheetName)
                           .getRange(dataRange)
                           .getValues();
  let i;
  for (i = 0; i < data.length; i += 1) {
    if (data[i][0] == keyword) {
      return data[i + rowOffset][colOffset];
    }
  }
  return 0;
}

function display(message, header = 'Test', duration = 5) {
  alertUser(message);
}

function alertUser(message) {
  SpreadsheetApp.getUi().alert(message);
}
