function level() {
  return parseInt(getCellValue(globals.sheet.character, 'Player Level', 0, -1));
}

function race() {
  return getCellValue(globals.sheet.character, 'Race', 0, -1);
}

function raceData() {
  const playerRace = race();
  for (const raceKey in chart.race) {
    const race = chart.race[raceKey];
    if (race.name === playerRace) {
      return race;
    }
  }
}

function playerClass() {
  return getCellValue(globals.sheet.character, 'Class', 0, -1);
}

function alignment() {
  return getCellValue(globals.sheet.character, 'Alignment', 0, -1);
}

function background() {
  return getCellValue(globals.sheet.character, 'Background', 0, -1);
}

function speed() {
  return raceData().speed;
}

function size() {
  return raceData().size;
}

function characterSummary() {
  return `Level ${level()} ${race()} ${playerClass()}`;
}

function maxHitPoints() {
  return getCellValue(globals.sheet.character, 'Max Hit Points', 0, -1);
}

function currHitPoints() {
  return getCellValue(globals.sheet.character, 'Current Hit Points', 0, -1);
}

function armorClass() {
  return getCellValue(globals.sheet.character, 'Armor Class', 0, -1);
}

function inspiration() {
  return getCellValue(globals.sheet.character, 'Inspiration', 0, -1);
}

function proficiency() {
  return chart.levels.proficiency[level()];
}

function nextLevelPerks() {
  return `Next Level:\n${chart.levels.features[level() + 1]}`;
}

function spellAttackBonus() {
  return proficiency() + charismaScoreModifier();
}

function spellSaveDc() {
  return spellAttackBonus() + 8;
}

function initiativeBonus() {
  return dexterityScoreModifier();
}

function name() {
  return getCellValue(globals.sheet.character, 'Character Name', 0, -4);
}

function abilityScore(ability) {
  return parseInt(getCellValue(globals.sheet.character, ability, 0, 1));
}

function strengthScore() {
  return abilityScore(globals.ability.strength);
}

function dexterityScore() {
  return abilityScore(globals.ability.dexterity);
}

function consitutionScore() {
  return abilityScore(globals.ability.constitution);
}

function intelligenceScore() {
  return abilityScore(globals.ability.intelligence);
}

function wisdomScore() {
  return abilityScore(globals.ability.wisdom);
}

function charismScore() {
  return abilityScore(globals.ability.charisma);
}

function abilityScoreModifier(ability) {
  return Math.floor((abilityScore(ability) - 10) / 2);
}

function strengthScoreModifier() {
  return abilityScoreModifier(globals.ability.strength);
}

function dexterityScoreModifier() {
  return abilityScoreModifier(globals.ability.dexterity);
}

function constitutionScoreModifier() {
  return abilityScoreModifier(globals.ability.constitution);
}

function intelligenceScoreModifier() {
  return abilityScoreModifier(globals.ability.intelligence);
}

function wisdomScoreModifier() {
  return abilityScoreModifier(globals.ability.wisdom);
}

function charismaScoreModifier() {
  return abilityScoreModifier(globals.ability.charisma);
}

function cantripsKnown() {
  return chart.levels.cantripsKnown[level()];
}

function cantripsHeader() {
  return `Cantrips (x${cantripsKnown()})`;
}

function invocationsKnown() {
  return chart.levels.invocationsKnown[level()];
}

function invocationsHeader() {
  return `Eldritch Invocations (x${invocationsKnown()})`;
}

function spellsKnown() {
  return chart.levels.spellsKnown[level()];
}

function spellsHeader() {
  return `Spells (x${spellsKnown()}, Level ${slotLevel()})`;
}

function spellSlots() {
  return chart.levels.spellSlots[level()];
}

function spellSlotsHeader() {
  return `Spell Slots (x${spellSlots()})`;
}

function slotLevel() {
  return chart.levels.slotLevel[level()];
}

function display(message, header = 'Test', duration = 5) {
  alertUser(message);
}

function alertUser(message) {
  SpreadsheetApp.getUi().alert(message);
}

function randInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getClasses() {
  return Object.keys(chart.class).map(playerClass => chart.class[playerClass].name);
}

function getRaces() {
  return Object.keys(chart.race).map(race => chart.race[race].name);
}

function getBackgrounds() {
  return Object.keys(chart.background).map(background => chart.background[background].name);
}

function getAlignments() {
  return chart.alignment;
}
