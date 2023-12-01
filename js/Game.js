/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    // Constructor
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("My cow is on fire"),
            new Phrase("This is fine"),
            new Phrase("Monkey see monkey do"),
            new Phrase("I see dead people"),
            new Phrase("Some men just want to watch the world burn")
        ];
        this.activePhrase = null;
    }

    // Start the game
    startGame() {
        this.resetGame()
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        this.activePhrase = null;
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }

    // Reset the game
    resetGame() {
        this.missed = 0;
        this.activePhrase = null;
        // Clear up the phrase letter slots
        const phraseSlots = document.getElementById("phrase");
        phraseSlots.firstElementChild.innerHTML = "";

        // Clone chosen key button and replace it with itself to clear all event listener attached to this element
        const chosenElements = document.getElementsByClassName("key");
        for(const key of chosenElements) {
            key.replaceWith(key.cloneNode(true));
        }

        // Reset the classes for the chosen key buttons
        for(const element of chosenElements) {
            element.classList.add("key");
            element.classList.remove("chosen");
            element.classList.remove("wrong");
        }

        // Reset the hearts
        const heartElements = document.getElementsByClassName("tries"); 
        for(const heart of heartElements) {
            heart.children[0].src = "images/liveHeart.png"
        }
    }

    // Get random phrases
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * ((this.phrases.length -1)- 0) + 0);
        return this.phrases[randomNumber];
    };


    // Handle interaction
    handleInteraction(button) {
        for(const key of button) {
            key.addEventListener("click", (event) => { 
                if(key.textContent == event.target.textContent) {

                    const selectedLetter = event.target.textContent;
                    // Mark the key slots to chosen if the player is correct and wrong if the player got it wrong
                    if(this.activePhrase.checkLetter(selectedLetter)) {
                        event.target.classList.remove("wrong");
                        event.target.classList.add("chosen");
                        this.activePhrase.showMatchedLetter(selectedLetter);
                    } else {
                        event.target.classList.remove("chosen");
                        event.target.classList.add("wrong");
                        this.removeLife();
                    }

                    // Check if player wins
                    if(this.checkForWin()) {
                        this.gameOver(true);
                    }
                }
            });

        }
    }


    // Check if player wins
    checkForWin() {
        const matchedLetters = document.querySelectorAll(".letter.show");
        const phraseLetters = document.querySelectorAll(".letter");
        return matchedLetters.length === phraseLetters.length
    }
    

    // Remove a heart from the list of hearts
    removeLife() {
        const heartElements = document.getElementsByClassName("tries"); 

        if(this.missed >= 4) {
            this.gameOver(false);
        } else {
            heartElements[this.missed].children[0].src = "images/lostHeart.png";
            this.missed++;
        }
    }

    // Game over - show win or lose screen
    gameOver(gameWon) {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "block";
        overlay.classList.remove("start");
        if(gameWon) {
            overlay.firstElementChild.textContent = "You win!";
            overlay.classList.add("win");
            overlay.classList.remove("lose");
        } else {
            overlay.firstElementChild.textContent = "Gameover!";
            overlay.classList.add("lose");
            overlay.classList.remove("add");
        }
        this.missed = 0;
    }
}