/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = `0`;
        this.phrases = [
            new Phrase("My cow is on fire"),
            new Phrase("This is fine"),
            new Phrase("Monkey see monkey do"),
            new Phrase("I see dead people"),
            new Phrase("Some men just want to watch the world burn")
        ];
        this.activePhrase = null;
        this.hitPoints = 5;
    }

    startGame() {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * ((this.phrases.length -1)- 0) + 0);
        return this.phrases[randomNumber];
    };

    handleInteraction() {
        const KeyElements = document.getElementsByClassName("key");
        for(const key of KeyElements) {
            this.activePhrase.showMatchedLetter(key);
        }
    }
}