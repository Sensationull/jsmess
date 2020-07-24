// Start writing JavaScript here!
const openModalButton = document.querySelector('.jsModalButton');
const body = document.body;
const closeModalButton = document.querySelector('.modal__close-button');

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

function openModal () {
	body.classList.add('modal-is-open');
}

function closeModal() {
	body.classList.remove('modal-is-open');
}
