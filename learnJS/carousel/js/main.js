const carousel = document.querySelector('.carousel');
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
const contents = document.querySelector('.carousel__contents');
const dots = [...document.querySelectorAll('.carousel__dot')];
const slides = [...document.querySelectorAll('.carousel__slide')];
const dotsContainer = carousel.querySelector('.carousel__dots');

nextButton.addEventListener('click', event => {
	const currentSlide = contents.querySelector('.is-selected');
	const nextSlide = currentSlide.nextElementSibling;
	if (nextSlide) {
		const destination = getComputedStyle(nextSlide).left;
		contents.style.left = `-${destination}`;
		currentSlide.classList.toggle('is-selected');
		nextSlide.classList.toggle('is-selected');
		nextSlide.nextElementSibling ? null : nextButton.setAttribute('hidden', true);
		const currentDot = dotsContainer.querySelector('.is-selected');
		const nextDot = currentDot.nextElementSibling;
		currentDot.classList.remove('is-selected');
		nextDot.classList.add('is-selected');
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
		const currentDot = dotsContainer.querySelector('.is-selected');
		const prevDot = currentDot.previousElementSibling;
		currentDot.classList.remove('is-selected');
		prevDot.classList.add('is-selected');
	}
	nextButton.removeAttribute('hidden');
});

dots.forEach(dot => dot.addEventListener('click', event => {
	let clickedIndex;
  
	for (let i = 0; i < dots.length; i++) {
		if (dots[i] === dot) {
			clickedIndex = i;
		}
	}
	const slideToShow = slides[clickedIndex];
	const destination = getComputedStyle(slideToShow).left;
	contents.style.left = `-${destination}`;
	let currentSlide = contents.querySelector('.is-selected');
	currentSlide.classList.remove('is-selected');
	slideToShow.classList.add('is-selected');
  
	dots.forEach(d => { d.classList.remove('is-selected');});
	dot.classList.add('is-selected');
  
	if (clickedIndex === 0) {
		previousButton.setAttribute('hidden', true);
		nextButton.removeAttribute('hidden');
	} else if (clickedIndex === dots.length -1) {
		nextButton.setAttribute('hidden', true);
		previousButton.removeAttribute('hidden');
	} else {
		nextButton.removeAttribute('hidden');
		previousButton.removeAttribute('hidden'); 
	}
}));

const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
	slide.style.left = slideWidth * index + 'px';
});