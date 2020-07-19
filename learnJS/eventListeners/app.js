const button = document.querySelector('.problems');

button.addEventListener('click', function() {
	const body = document.body;
	body.classList.toggle('button-is-clicked');
	button.classList.toggle('is-clicked');
});