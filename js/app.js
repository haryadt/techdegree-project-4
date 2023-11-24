/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;
const startGame= document.getElementById("btn__reset");
startGame.addEventListener("click", () => {
    game = new Game();
    game.startGame();
    game.handleInteraction();
});

