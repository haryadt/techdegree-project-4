/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay () {
        const phraseList = document.querySelector("#phrase ul");
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

    checkLetter(letter) {
        return this.phrase.includes(letter) ? letter: "";
    };

    showMatchedLetter(letter) {
        letter.addEventListener("click", (event) => {
            const keyValue = event.target.textContent;
            const matchedLetter = this.checkLetter(keyValue);
            if(matchedLetter) {
                const letterDisplay = document.querySelectorAll(`.${matchedLetter}`);
                for(const letterElement of letterDisplay) {
                    letterElement.classList.remove("hide");
                    letterElement.classList.add("show");
                }
            } else {
                this.hitPoints -= 1;
            }
        });
    }
}