export default function button() {
    const btns = document.createElement('div');
    btns.className = 'btns';
    const btn = document.createElement('div');
    btn.className = 'btn none';
    btn.textContent = 'Start game';
    btn.addEventListener('click', () => btn.classList.add('repeat'));
    btns.append(btn);
    return btns
}