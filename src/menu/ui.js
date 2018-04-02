function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('D&D')
    .addSubMenu(ui.createMenu('Roll')
      .addItem('Initiative', 'rollInitiative')
      .addItem('D4', 'rollD4')
      .addItem('D6', 'rollD6')
      .addItem('D8', 'rollD8')
      .addItem('D10', 'rollD10')
      .addItem('D12', 'rollD12')
      .addItem('D20', 'rollD20')
      .addItem('D100', 'rollD100')
      .addItem('DX', 'rollDX'))
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
