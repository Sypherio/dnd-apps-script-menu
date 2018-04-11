function agonizingBlast() {
  const numberOfBeams = 1;
  let damageDone = 0;
  let i;
  for (i = 0; i < numberOfBeams; i += 1) {
    const spellHitRoll = rollSpellHit();
    const spellDidHit = Browser.inputBox('Did You Hit?', 'You rolled ' + spellHitRoll + ' for hit. Did you hit?', Browser.Buttons.YES_NO);
    display(spellDidHit);
  }
  display('agonizing blast! ' + numberOfBeams);
}

function hellishRebuke() {
  
}
