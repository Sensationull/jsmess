function getTime() {
  let date = new Date();
  let display = document.querySelector('.display');
  display.innerHTML = `${date.getHours()}:${date.getMinutes()}`
  // console.log(date.getHours(), date.getMinutes())
}
function showTime() {
  setInterval(getTime, 1000);
}

showTime()
