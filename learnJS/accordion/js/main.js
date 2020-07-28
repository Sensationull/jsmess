// Start writing JavaScript here!
// const openButtons = document.querySelectorAll('.accordion__header');
const cheese = document.querySelector('[data-theme="cheese"]');

const showCheeseContent = () => {
	cheese.classList.toggle('is-open');
};

cheese.addEventListener('click', showCheeseContent);

const lettuce = document.querySelector('[data-theme="lettuce"]');

const showLettuceContent = () => {
	lettuce.classList.toggle('is-open');
};

lettuce.addEventListener('click', showLettuceContent);



// for (let button of openButtons) {
// 	button.addEventListener('click', openAccordion);
// }

/*
  Select All the accordion headers
  put an event listener on each button that grabs that specific 
  button's content and adds the is open class to that specific content
*/