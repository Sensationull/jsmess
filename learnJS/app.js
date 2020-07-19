const add = document.querySelector('.add');
add.classList.add('red');

const remove = document.querySelector('.remove');
remove.classList.remove('remove');

const contains1 = document.querySelector('.contains1');
console.log('Do I have a blue class? Contains1: ', contains1.classList.contains('blue'));

const contains2 = document.querySelector('.contains2');
console.log('Contains2: ',contains2.classList.contains('blue'));

const toggle = document.querySelector('.toggle');
toggle.classList.toggle('red');
console.log('toggle me: ', toggle.classList);