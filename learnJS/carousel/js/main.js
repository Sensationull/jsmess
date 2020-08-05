const carousel = document.querySelector('.carousel');
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
const contents = document.querySelector('.carousel__contents');


nextButton.addEventListener('click', event => {
	const currentSlide = contents.querySelector('.is-selected');
	const nextSlide = currentSlide.nextElementSibling;
	if (nextSlide) {
		const destination = getComputedStyle(nextSlide).left;
		contents.style.left = `-${destination}`;
		currentSlide.classList.toggle('is-selected');
		nextSlide.classList.toggle('is-selected');
		nextSlide.nextElementSibling ? null : nextButton.setAttribute('hidden', true);
	} 
	previousButton.removeAttribute('hidden');
});

previousButton.addEventListener('click', event => {
	const currentSlide = contents.querySelector('.is-selected');
	const previousSlide = currentSlide.previousElementSibling;
	if (previousSlide) {
		const destination = getComputedStyle(previousSlide).left;
		contents.style.left = `-${destination}`;
		currentSlide.classList.toggle('is-selected');
		previousSlide.classList.toggle('is-selected');
		previousSlide.previousElementSibling ? null : previousButton.setAttribute('hidden', true);
	}
	nextButton.removeAttribute('hidden');
});