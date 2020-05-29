/*on click, fade away and remove from DOM*/

function eachNode () {
  let allContent = document.querySelectorAll('.content');
  allContent.forEach(node => {
    node.addEventListener('click', () => {
      node.classList.toggle('slide-left');
    }, false);
    node.addEventListener('animationend', ()=> {
      node.style.display = 'none';
    }, false)
  });
}

eachNode();

function showAllCards() {
  let cards = document.querySelectorAll('.content')
  cards.forEach(card => {
    if (card.classList.contains('slide-left')) {
      card.classList.toggle('slide-left');
    } else {
      card.style.display = 'flex';
    }
  });
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', showAllCards, false);



/**
 * You can use an animation to change the colors of a component, but it might be better to leave that as a transition property, because if you add animation event listeners on top of it, JS won't know which animation to listen to. right now I have a color change animation, a slide animation, and an event listener for 'animationend', which fires regardless of whether or not its the animation I want to fire
 */

// let el = document.querySelector('.content');
// el.addEventListener('mouseover',fadeAway, false);
// el.addEventListener('mouseout',fadeAway, false);
// el.addEventListener('mouseout', () => {
//   if (el.classList.contains('slide-left')) {
//     el.classList.toggle('slide-left');  
//   }
// }, false);
