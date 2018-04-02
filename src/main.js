function get(constantName) {
  const constants = {
    bonusRange: 'A2:B',
    abilityScoreRange: 'B7:C',
    spellSlotsRange: 'N4:N',
    levelChartHeaders: 'A2:I2',
    levelChartData: 'A3:I',
    moneyRange: 'B1:F1',
    levelCell: 'E7',
  };
  return constants[constantName];
}

function display(message, header = 'Test', duration = 5) {
  alertUser(message);
}

function alertUser(message) {
  SpreadsheetApp.getUi().alert(message);
}