class Card {
    constructor({word, translation, image, audioSrc}) {
        this.word = word;
        this.translation = translation;
        this.image = `./assets/${image}`;
        this.audioSrc = `./assets/${audioSrc}`;
    }
    createCard() {
        const cardElement = document.createElement('div');
        cardElement.className = "card-container";
        const card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = `url(${this.image})`;
        cardElement.append(card);
        cardElement.insertAdjacentHTML('beforeend', 
        `<div class = "card-header">${this.word}</div><div>${this.translation}</div>`)
        return cardElement;
    }
}

export default function cards(data) {
    let cardsList = [];
    data.forEach((element) => {
        console.log(element);
        const cardItem = new Card(element).createCard();
        cardsList.push(cardItem)
    })
    return cardsList
} 