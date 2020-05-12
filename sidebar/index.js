function toggleBar() {
  let sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('is-active');
  console.log(sidebar.classList.contains('is-active'));
  let text = document.querySelector('.button-text');
  if(sidebar.classList.contains('is-active')) {
    text.innerHTML = 'Open Menu'
  } else {
    text.innerHTML = 'Close Menu'
  }
}