const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

let isOpen = false;

menuIcon.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
        menu.style.left = '0';
        menuIcon.classList.add('wrong-dash');
    } else {
        menu.style.left = '-250px';
        menuIcon.classList.remove('wrong-dash');
    }
});
