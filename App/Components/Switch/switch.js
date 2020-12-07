//import state from '../../../state.js';
import {list, menu} from '../../App.js';

export default function switchInit() {
const switchContainer = document.querySelector('.switch-container');
const switcher = document.querySelector('.switch');
const labelTrain = document.querySelector('.label-train');
const labelPlay = document.querySelector('.label-play');

    
 switchContainer.addEventListener('click', () => {
     labelTrain.classList.toggle('hidden');
     labelPlay .classList.toggle('hidden');
     switcher.classList.toggle('switch-play');
     //state.isPlay = !state.isPlay;
     switchContainer.classList.toggle('switch-container_play');
     list.forEach(element => element.classList.toggle('category-item_play'));
     menu.classList.toggle('nav-menu_play')
   })
}