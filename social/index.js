async function getInfo() {
  let result = fetch('https://randomuser.me/api/?results=10')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      // let results = data.results
      // for (let item of results) {
      //   displayInfo(item);
      // }
      return data.results
    })
    .catch(function(err){
      console.log('Something is wrong', err);
    })
    return result;
}

/* async functions, written synchronously still accomplish the same job, is there any upside to writing them in this manner? */

async function testing() {  
  console.log(await getInfo())
  return await getInfo()
}

async function cycleData(data) {
  let result = await data
  result.forEach(item => displayInfo(item));
}

cycleData(testing());

/**
 * async function getInfo() {
  let result = await fetch('https://randomuser.me/api/?results=10')
    .then(function(res) {
      return res.json();
    })
    // .then(function(data) {
    //   console.log(data);
    //   let results = data.results
    //   // for (let item of results) {
    //   //   displayInfo(item);
    //   //   // Would it be better for this looping to happen outside of the promise?
    //   //   // How would we refactor this to async/await?
    //   // }
    //   return results
    // })
    .then(info => info.results)
    .catch(function(err){
      console.log('Something is wrong', err);
    })
    return result;
}
(async () => {  
  console.log(await getInfo())
})()
 */



// let people = getInfo();
// console.log(people)

function displayInfo(info) {
  // creates a card and appends it to the main
  let main = document.querySelector('.main');
  // Select the container that the info will live in
  const card = document.createElement('div');
  // create the card that will hold the image and name
  const name = document.createElement('span');
  // create the name container
  const properName = formatName(info)
  // Format the name coming in from the api call
  name.textContent = properName
  // place it into the text portion for the html element
  name.classList.add('name');
  // add the class of name to the element to add styles
  const image = document.createElement('img');
  //  create the image element
  //  when dealing with larger requests or slower responses from the server use image onload
  // image.onload = () => {
  //   image.classList.toggle('fade-in');
  // };
  image.src = info.picture.large;
  // set the source of the image's image from the api call
  image.classList.add('image');
  // append the image and the name to the card, as they are the children
  card.appendChild(image);
  card.appendChild(name);
  //  style the card by adding the class
  card.classList.add('card');
  // finally add the card to main
  main.appendChild(card);
  card.classList.toggle('fade-in')
}

function formatName(object) {
  let first = object.name.first
  let last = object.name.last
  return `${first} ${last}`
}

// async function fetchInfo() {
//   try {
//     const res = await fetch('https://randomuser.me/api/?results=10');
//     // You can only consume the res.json once, but you can clone it
//     // let copy = await res.clone().json()
//     // let data = await res.json();
//     return res.json();
//   } catch (err) {
//     console.log('Ooops', err);
//   }
// }