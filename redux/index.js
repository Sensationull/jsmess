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

// let el = document.querySelector('.content');
// el.addEventListener('mouseover',fadeAway, false);
// el.addEventListener('mouseout',fadeAway, false);
// el.addEventListener('mouseout', () => {
//   if (el.classList.contains('slide-left')) {
//     el.classList.toggle('slide-left');  
//   }
// }, false);
