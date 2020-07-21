const button = document.querySelector('.menu-button');
const body = document.body;
button.addEventListener('click', toggleMenu);


function toggleMenu() {
	body.classList.toggle('menu-is-open');
}