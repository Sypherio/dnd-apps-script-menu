function sortMoney() {
  let moneyRange = globals.sheet.inventory.getRange(globals.moneyRange);
  
  let copperCell = moneyRange.getCell(1, 4);
  let silverCell = moneyRange.getCell(1, 3); 
  let goldCell = moneyRange.getCell(1, 2);
  let platinumCell = moneyRange.getCell(1, 1);
  
  silverCell.setValue(silverCell.getValue() + Math.floor(copperCell.getValue() / 10));
  copperCell.setValue(copperCell.getValue() % 10);
  
  goldCell.setValue(goldCell.getValue() + Math.floor(silverCell.getValue() / 10));
  silverCell.setValue(silverCell.getValue() % 10);
  
  platinumCell.setValue(platinumCell.getValue() + Math.floor(goldCell.getValue() / 10));
  goldCell.setValue(goldCell.getValue() % 10); 
}