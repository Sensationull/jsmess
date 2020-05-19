function slideLeft() {
    let box = document.querySelector('.box-3');
    box.classList.toggle('animate');
    box.innerText = 'Linear JS';
  }
  
  function slideRight() {
    let box = document.querySelector('.box-4');
    box.classList.toggle('animate-right');
    box.innerText = 'Ease-In-Out JS';
  }
  
  let el = document.querySelector('.box-3');
  let four = document.querySelector('.box-4');

  el.addEventListener('mouseover', slideLeft, false);
  four.addEventListener('mouseover', slideRight, false);