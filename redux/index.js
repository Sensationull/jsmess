/*on click, fade away and remove from DOM*/
function slideAway () {
  let content = document.querySelector('.content-1');
  content.classList.toggle('slide-left');
}

function fadeAway () {
  let allContent = document.querySelector('.content');
  allContent.classList.toggle('shade');
}

function eachNode () {
  let allContent = document.querySelectorAll('.content');
  allContent.forEach(node => {
    node.addEventListener('mouseover',() => {
      node.classList.toggle('shade')
    }, false);
    node.addEventListener('mouseout', () => {
      node.classList.toggle('shade');
    }, false);
    node.addEventListener('click', () => {
      node.classList.toggle('slide-left');
      node.addEventListener('animationend', ()=> {
        node.style.display = 'none';
      }, false)
    }, false);
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
