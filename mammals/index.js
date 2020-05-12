function getMammals() {
  let animals = document.querySelectorAll('div.animal > p:last-child');
  let mammals = document.getElementById('only-mammals');
  for (let item of animals) {
      if(item.lastElementChild.textContent === 'true') {
        console.log(item)
        mammals.appendChild(item.parentNode);
      }
  }
}

getMammals();