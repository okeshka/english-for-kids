import {list, menu} from '../../App.js';
;
export default function switchInit() {
const switchContainer = document.querySelector('.switch-container');
const switcher = document.querySelector('.switch');
const labelTrain = document.querySelector('.label-train');
const labelPlay = document.querySelector('.label-play');



 switchContainer.addEventListener('click', () => {
  
     labelTrain.classList.toggle('hidden');
     labelPlay .classList.toggle('hidden');
     switcher.classList.toggle('switch-play');
     switchContainer.classList.toggle('switch-container_play');

     const cardCover = document.querySelectorAll('.card');
     cardCover.forEach(card =>card.classList.toggle('card-cover'));
     const rotates = document.querySelectorAll('.rotate');
     rotates.forEach(rotate =>rotate.classList.toggle('none'));
     const cardHeader = document.querySelectorAll('.card-header');
     cardHeader.forEach(header =>header.classList.toggle('none'));
     
    const btn = document.querySelector('.btn');
    btn.classList.toggle('none');
      
     list.forEach(element => element.classList.toggle('category-item_play'));
     menu.classList.toggle('nav-menu_play')
   })
}