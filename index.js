const rollDice = (sides) => {
    return Math.floor(Math.random() * sides) + 1;
  }
  
  console.log(`You rolled a ${rollDice(6)}`);
  