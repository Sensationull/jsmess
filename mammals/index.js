function getMammals() {
  let allAnimals = document.querySelector('.all-animals');
  let animals = allAnimals.querySelectorAll('div.animal')
  let mammals = document.getElementById('only-mammals');
  for (let item of animals.values()) {
    if(item.lastElementChild.firstElementChild.textContent === 'true') {
      mammals.appendChild(item);
    }
  }
}

getMammals();