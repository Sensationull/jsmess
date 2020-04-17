// function green() {
//   let element = document.querySelector('.box-three');
//   element.style.backgroundColor = 'green';
//   removeStyle('green')
// }

// function yellow() {
//   let element = document.querySelector('.box-two');
//   element.style.backgroundColor = 'yellow'
//   removeStyle('yellow')
// }

// function red() {
//   let element = document.querySelector('.box-one');
//   element.style.backgroundColor = 'red'
//   removeStyle('red')
// }

function removeStyle(selector) {
  let el = document.querySelector('.big-box');
  let children = [...el.children];
  /* 
  Gather all children (Done)
    Select the individual children 
      turn the background styles off for each one of them
  */
 for (let i = 0; i < children.length; i++) {
   let item = children[i];
   if (item.style.backgroundColor !== selector) {
     item.style.backgroundColor = '';
   }
 }
}


  setTimeout(function green() {
  let element = document.querySelector('.box-three');
  element.style.backgroundColor = 'green';
  removeStyle('green')
  setTimeout(function yellow() {
    let element = document.querySelector('.box-two');
    element.style.backgroundColor = 'yellow'
    removeStyle('yellow')
    setTimeout(function red() {
      let element = document.querySelector('.box-one');
      element.style.backgroundColor = 'red'
      removeStyle('red')
    }, 2000)
  },3000)
}, 5000)

function hello() {
  console.log('yoooo')
}