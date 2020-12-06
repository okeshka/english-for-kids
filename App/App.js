import data from '../assets/cards.js';
import CategoryList from './Components/Category/Category.js';

const container = document.body.querySelector('main');

// const cardsList = document.createElement('ul');
// cardsList.className = "cards";
// container.append(cardsList);

let list = new CategoryList(data).createCategoryList();
list.forEach(element => container.append(element))

// const cardItem = new Card('cry', 'плакать', 'img/cry.jpg', 'audio/cry.mp3');
// cardItem.render();



