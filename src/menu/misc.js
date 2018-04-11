function sortMoney() {
  const copperCell = getCell(globals.sheet.inventory, 'Copper', 0, -1);
  const silverCell = getCell(globals.sheet.inventory, 'Silver', 0, -1);
  const goldCell = getCell(globals.sheet.inventory, 'Gold', 0, -1);
  const platinumCell = getCell(globals.sheet.inventory, 'Platinum', 0, -1);
  
  silverCell.setValue(silverCell.getValue() + Math.floor(copperCell.getValue() / 10));
  copperCell.setValue(copperCell.getValue() % 10);
  
  goldCell.setValue(goldCell.getValue() + Math.floor(silverCell.getValue() / 10));
  silverCell.setValue(silverCell.getValue() % 10);
  
  platinumCell.setValue(platinumCell.getValue() + Math.floor(goldCell.getValue() / 10));
  goldCell.setValue(goldCell.getValue() % 10);
}
