function sortMoney() {
  var moneyRange = SpreadsheetApp.getActiveSpreadsheet()
                                 .getActiveSheet()
                                 .getRange(get('moneyRange'));
  
  var copperCell = moneyRange.getCell(1, 4);
  var silverCell = moneyRange.getCell(1, 3); 
  var goldCell = moneyRange.getCell(1, 2);
  var platinumCell = moneyRange.getCell(1, 1);
  
  silverCell.setValue(silverCell.getValue() + Math.floor(copperCell.getValue() / 10));
  copperCell.setValue(copperCell.getValue() % 10);
  
  goldCell.setValue(goldCell.getValue() + Math.floor(silverCell.getValue() / 10));
  silverCell.setValue(silverCell.getValue() % 10);
  
  platinumCell.setValue(platinumCell.getValue() + Math.floor(goldCell.getValue() / 10));
  goldCell.setValue(goldCell.getValue() % 10); 
}