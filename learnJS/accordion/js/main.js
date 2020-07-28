// Start writing JavaScript here!
const openButton = document.querySelector('.accordion__header');

const openAccordion = () => {
	const accordion = document.querySelector('.accordion');
	accordion.classList.toggle('is-open');
};

openButton.addEventListener('click', openAccordion);