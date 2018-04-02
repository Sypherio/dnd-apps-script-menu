var globals = (() => {
	const globals = {
		bonusRange: 'A2:B',
	    abilityScoreRange: 'B7:C',
	    spellSlotsRange: 'N4:N',
	    levelChartHeaders: 'A2:I2',
	    levelChartData: 'A3:I',
	    moneyRange: 'B1:F1',
	    levelCell: 'E7',
	};

	const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
	globals.sheet = {
		character: spreadsheet.getSheetByName("Character"),
		spellbook: spreadsheet.getSheetByName('Spellbook'),
		inventory: spreadsheet.getSheetByName('Equipment + Inventory'),
		stronghold: spreadsheet.getSheetByName('Stronghold'),
		bonuses: spreadsheet.getSheetByName('Bonuses'),
	};

	return globals;
})();
