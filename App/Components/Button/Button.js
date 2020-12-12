export default function button() {
    const btns = document.createElement('div');
    btns.className = 'btns';
    btns.innerHTML = '<div class = "btn none">Start game</div>';
    return btns
}