function getInfo() {
  fetch('https://randomuser.me/api')
    .then(function(res) {
      // console.log('success', res);
      return res.json();
    })
    .then(function(data) {
      let results = data.results
      console.log(data.results, 'and the card ', displayInfo(results))
    })
    .catch(function(err){
      console.log('Something is wrong', err);
    })
}

function displayInfo(info) {
  let card = document.querySelector('.card');
  let properName = formatName(info)
  card.textContent = properName
  return properName;
}

function formatName(object) {
  let title = object[0].name.title
  let first = object[0].name.first
  let last = object[0].name.last
  return `${title} ${first} ${last}`
}

getInfo();