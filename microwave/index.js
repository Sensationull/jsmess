function getTime() {
  let date = new Date();
  let display = document.querySelector('.display');
  display.innerHTML = `${date.getHours()}:${date.getMinutes()}`
  // console.log(date.getHours(), date.getMinutes())
}
function showTime() {
  setInterval(getTime, 1000);
}

/* How do you set the timer so that a minute in time (<- important) is displayed, but doesn't start until another button is pressed */
let minute = setInterval(() => {
  let display = document.querySelector('.display');
  let date = new Date();
  let time = (60 - date.getSeconds());
  display.innerHTML = time
  if (time <= 10) {
    clearInterval(minute);
    showTime();
  } 
}, 1000)


showTime()
