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
        const front = document.createElement('div');
        const back = document.createElement('div');
        const rotate = document.createElement('div');
        const audio = new Audio(`${this.audioSrc}`);
        front.className = "front";
        back.className = "back";
        rotate.className = "rotate";
        rotate.addEventListener('click', ()=> {card.classList.add('translate')});
        front.style.backgroundImage = back.style.backgroundImage = `url(${this.image})`;
        front.insertAdjacentHTML('afterbegin', `<div class = "card-header">${this.word}</div>`);
        back.insertAdjacentHTML('afterbegin', `<div class = "card-header">${this.translation}</div>`);
        card.append(front, back, rotate, audio);
        front.addEventListener('click', (evt) => {if (evt.target = rotate) return; })
        front.addEventListener('mouseout', ()=> {card.classList.remove('translate')});
        front.addEventListener('click', ()=> {audio.play()});
        back.addEventListener('mouseout', ()=> {card.classList.remove('translate')});
        cardElement.append(card);
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