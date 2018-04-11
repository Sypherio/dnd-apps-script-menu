function onOpen() {
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
