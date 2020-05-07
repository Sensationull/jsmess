function hideBar() {
  let sidebar = document.querySelector('.sidebar');
  sidebar.style.transition = '0.3'
  sidebar.style.transform = 'translateX(-200px)'
  
}

function showBar() {
  let sidebar = document.querySelector('.sidebar');
  sidebar.style.transform = 'translateX(0px)'
}