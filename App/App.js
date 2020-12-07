import data from '../assets/cards.js';
import CategoryList from './Components/Category/Category.js';
import switchInit from './Components/Switch/switch.js';
import cards from './Components/Card/Card.js'

// const main = document.createElement('main');
// main.className = "main";

const containerCategory = document.createElement('div');
containerCategory.className = "container-category";
document.body.append(containerCategory);
const containerCards = document.createElement('div');
containerCards.className = "container-category";

let list = new CategoryList(data).createCategoryList();

list.forEach((element, index) => {
    element.addEventListener('click', () => {
        containerCategory.remove();
        document.body.append(containerCards);
        let cardLst = cards(data[index+1]);
        cardLst.forEach(element => containerCards.append(element))
    })
    containerCategory.append(element);
});

// const cardItem = new Card('cry', 'плакать', 'img/cry.jpg', 'audio/cry.mp3');
// cardItem.render();

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-menu');
burger.addEventListener('click', ()=>{
    menu.classList.toggle('nav-menu_active');
    burger.classList.toggle('burger_open')
})

switchInit();



export {list, menu};