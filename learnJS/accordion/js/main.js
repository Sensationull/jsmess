// Start writing JavaScript here!
// const openButtons = document.querySelectorAll('.accordion__header');
// const cheese = document.querySelector('[data-theme="cheese"]');

// const showCheeseContent = () => {
// 	cheese.classList.toggle('is-open');
// };

// cheese.addEventListener('click', showCheeseContent);

// const lettuce = document.querySelector('[data-theme="lettuce"]');

// const showLettuceContent = () => {
// 	lettuce.classList.toggle('is-open');
// };

// lettuce.addEventListener('click', showLettuceContent);

// const tomato = document.querySelector('[data-theme="tomato"]');

// const showTomatoContent = () => {
// 	tomato.classList.toggle('is-open');
// };

// tomato.addEventListener('click', showTomatoContent);

// const beef = document.querySelector('[data-theme="beef"]');

// const showBeefContent = () => {
// 	beef.classList.toggle('is-open');
// };

// beef.addEventListener('click', showBeefContent);

// for (let button of openButtons) {
// 	button.addEventListener('click', openAccordion);
// }

/*
  Select All the accordion headers
  put an event listener on each button that grabs that specific 
  button's content and adds the is open class to that specific content
*/

// const accordions = Array.from(document.querySelectorAll(".accordion"));

// accordions.forEach((accordion) => {
//   const accordionHeader = accordion.querySelector(".accordion__header");
//   /* each element has a query selector inside it to find the first class within itself that matches the class given */
//   accordionHeader.addEventListener("click", (event) => {
//     accordion.classList.toggle("is-open");
//   });
// });
// Event Delegation Style
const accordionContainer = document.querySelector('.accordion-container');

accordionContainer.addEventListener('click', (e) => {
	const accordionHeader = e.target.closest('.accordion__header');

	if (accordionHeader) {
		const accordion = accordionHeader.parentElement;
		accordion.classList.toggle('is-open');
	}
});
