// DICE ROLLER PROGRAM

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const Images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        Images.push(`<img src="Dice_images/${value}.png" alt="dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    DiceImages.innerHTML = Images.join('');
}