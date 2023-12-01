/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game = null;
const startGame = document.getElementById("btn__reset");
const keyButton = document.getElementsByClassName("key");

startGame.addEventListener("click", () => {
    game = new Game();
    game.startGame();
    game.handleInteraction(keyButton);
});