function playerLevel(){
  return SpreadsheetApp.getActiveSpreadsheet()
                       .getSheetByName("Character")
                       .getRange(get('levelCell'))
                       .getValue();
}

function bonus(bonusName) {
  return lookupByKeyword("Bonuses", get('bonusRange'), bonusName, 0, 1);
}

function abilityScore(abilityScoreName) {
  return lookupByKeyword("Character", get('abilityScoreRange'), abilityScoreName, 1, 0);
}

function abilityScoreMod(abilityScoreName) {
  return Math.floor((abilityScore(abilityScoreName) - 10) / 2);
}

function levelChart(attributeName, level) {
  if (!level) {
    level = playerLevel();
  }
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Metadata");
  var headers = sheet.getRange(get('levelChartHeaders')).getValues();
  var data = sheet.getRange(get('levelChartData')).getValues();
  var colIndex = headers[0].indexOf(attributeName);
  return data[level - 1][colIndex];
}

function lookupByKeyword(sheetName, dataRange, keyword, rowOffset, colOffset) {
  var data = SpreadsheetApp.getActiveSpreadsheet()
                           .getSheetByName(sheetName)
                           .getRange(dataRange)
                           .getValues();
  for (var i = 0; i < data.length; i += 1) {
    if (data[i][0] == keyword) {
      return data[i + rowOffset][colOffset];
    }
  }
  return 0;
}
