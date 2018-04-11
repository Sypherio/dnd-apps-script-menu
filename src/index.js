function onOpen() {
  buildMenu();
  setCellValidationRules();
}

function buildMenu() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('D&D')
    .addSubMenu(ui.createMenu('Roll')
      .addItem('Initiative', 'rollInitiative')
      .addItem('Roll X', 'rollX'))
    .addSubMenu(ui.createMenu('Cast')
      .addItem('Agonizing Blast', 'agonizingBlast')
      .addItem('Hellish Rebuke', 'hellishRebuke'))
    .addSeparator()
    .addSubMenu(ui.createMenu('Rest')
      .addItem('Short Rest', 'shortRest')
       .addItem('Long Rest', 'longRest'))
    .addSubMenu(ui.createMenu('Misc')
      .addItem('Sort Money', 'sortMoney'))
    .addToUi();
}

function setCellValidationRules() {
  setCellValidationRule(getCell(globals.sheet.character, 'Class', 0, -1), getClasses());
  setCellValidationRule(getCell(globals.sheet.character, 'Race', 0, -1), getRaces());
  setCellValidationRule(getCell(globals.sheet.character, 'Alignment', 0, -1), getAlignments());
  setCellValidationRule(getCell(globals.sheet.character, 'Background', 0, -1), getBackgrounds());
}

function setCellValidationRule(cell, validValues) {
  const dataValidationRule = SpreadsheetApp.newDataValidation()
                                           .requireValueInList(validValues)
                                           .setAllowInvalid(false)
                                           .build();
  cell.setDataValidation(dataValidationRule); 
}
