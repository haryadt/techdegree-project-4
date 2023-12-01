/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // Display phrases
    addPhraseToDisplay () {
        const phraseList = document.querySelector("#phrase ul");
        phraseList.innerHTML = "";

        // Create a list with each ketter of the phrase and append it to the ul element
        for(const letter of this.phrase) {
            const letterElement = document.createElement("li");
            if(letter === " ") {
                letterElement.innerText = " ";
                letterElement.classList.add("space");
            } else {
                letterElement.innerText = letter
                letterElement.classList.add("hide");
                letterElement.classList.add("letter");
                letterElement.classList.add(letter);
            }
            phraseList.appendChild(letterElement);
        }
    } 

    // Check if letter matches with the phrase
    checkLetter(letter) {
        return this.phrase.indexOf(letter) > -1;
    };

    // Display matched letters
    showMatchedLetter(key) {
        const matchedLetter = this.checkLetter(key);
        if(matchedLetter) {
            const letterDisplay = document.querySelectorAll(`.${key}`);
            for(const letterElement of letterDisplay) {
                letterElement.classList.remove("hide");
                letterElement.classList.add("show");
            }
        }
    }
}