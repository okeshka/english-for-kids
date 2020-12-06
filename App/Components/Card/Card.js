class Card {
    constructor(word, translation, imageSrc, audioSrc) {
        this.word = word;
        this.translation = translation;
        this.image = `./assets/${imageSrc}`;
        this.audioSrc = `./assets/${audioSrc}`;
    }
    render() {
        this.cardElement = document.createElement('li');
        this.cardElement.className = "cards-item";
        this.cardElement.innerHTML = 
            `<div style = "background-image: url(${this.image})">
             <p>${this.word}</p>
             <p>${this.translation}</p>
            </div>`
        cardsList.append(this.cardElement);
    }
}