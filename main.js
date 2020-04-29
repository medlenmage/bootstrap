/* 
  create a collection of ducks
  print ducks to dom
*/

const ducks = [
  {
    color: 'Green, Brown, White',
    name: 'Comrade',
    breed: 'Mallard',
    size: 'large',
    temperament: 'Quiet and reserved',
    imageUrl: 'https://www.allaboutbirds.org/guide/assets/photo/60021841-480px.jpg',
    gender: 'male',
    age: 3,
  },
  {
    color: 'Brown and White',
    name: 'Bob Ross',
    breed: 'Canvasback',
    size: 'large',
    temperament: 'Chill and Groovy',
    imageUrl: 'https://www.allaboutbirds.org/guide/assets/photo/141748541-480px.jpg',
    gender: 'male',
    age: 11,
  },
  {
   color: 'Brown and Beige',
   name: 'Cambria',
   breed: 'Marbled',
   size: 'small',
   temperament: 'Reserved',
   imageUrl: 'https://download.ams.birds.cornell.edu/api/v1/asset/189839151/1800',
   gender: 'female',
   age: 16,
  },
  {
    color: 'Reddish Brown, Black, and White',
    name: 'Marie Antoinette',
    breed: 'Black-bellied whistling',
    size: 'small',
    temperament: 'Sassy and Noble',
    imageUrl: 'https://www.thespruce.com/thmb/nRI1CzvQdBqz-ApA-tCPgOALujg=/1500x1000/filters:fill(auto,1)/black-bellied-whistling-duck-569ea9985f9b58eba4ac8bd0.jpg',
    gender: 'female',
    age: 4,
  },
  {
    color: 'Brown, Black, Beige',
    name: 'Sir Quackers',
    breed: 'White Faced Whistling',
    size: 'medium',
    temperament: 'Aggressive and Fiesty',
    imageUrl: 'https://www.purelypoultry.com/images/white-faced-whistling-ducks.jpg',
    gender: 'male',
    age: 7,
  },
  {
    color: 'Orange, biege, black',
    name: 'Dr. Orange',
    breed: 'Fulvous Whistling',
    size: 'medium',
    temperament: 'Goofy',
    imageUrl: 'https://res-5.cloudinary.com/ebirdr/image/upload/s--ps-ADM7x--/f_auto,q_auto,t_full/2917-fulvous-whistling-duck.jpg',
    gender: 'male',
    age: 3,
 },
 {
   color: 'black, gray, brown',
   name: 'Ms. Plum',
   breed: 'Plumed Whistling',
   size: 'medium',
   temperament: 'chill',
   imageUrl: 'https://test.cdn.download.ams.birds.cornell.edu/api/v1/asset/116455141/1800',
   gender: 'female',
   age: 4,
  },
  {
    color: 'Brown, black, and white',
    name: 'Chicken',
    breed: 'Alabio',
    size: 'large',
    temperament: 'Loosey Goosey',
    imageUrl: 'https://i.imgur.com/T9fXZIl.jpg',
    gender: 'male',
    age: 83,
  },
  {
    color: 'yellow, black, and white',
    name: 'Sir Ducks Alot',
    breed: 'rubber',
    size: 'small',
    temperament: 'squeaky',
    imageUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/261/10460/Wedding-Set-Rubber-Duck-Ad-Line-3__62602.1569352978.jpg?c=2&imbypass=on',
    gender: 'male',
    age: 100,
  }
    
]

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const filterDucks = (duckFilter) => {
  let domString = '';



  for (let i = 0; i < duckFilter.length; i++){
    
    domString += `
    <div class="card" style="width: 18rem;">
      <img src="${duckFilter[i].imageUrl}" class="card-img-top" alt="${duckFilter[i].breed}">
      <div class="card-body">
        <h5 class="card-title">${duckFilter[i].name}</h5>
        <p> This is a ${duckFilter[i].breed} it's name is ${duckFilter[i].name} it is a ${duckFilter[i].gender}.</p>
        <p> it's length and weight are ${duckFilter[i].size} it is a ${duckFilter[i].gender} the color of it's feathers are usully ${duckFilter[i].color} it's temperament is usually ${duckFilter[i].temperament} and is currently ${duckFilter[i].age}.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
  </div>
    
    
    `
    
    
    
    
    // domString += `<div>`
    // domString +=  `<h2>${duckFilter[i].breed}</h2>`
    // domString +=  `<img src="${duckFilter[i].imageUrl}" alt="${duckFilter[i].breed}">`
    // domString +=  `<p> This is a ${duckFilter[i].breed} it's name is ${duckFilter[i].name} it is a ${duckFilter[i].gender}.</p>`
    // domString +=  `<p> it's length and weight are ${duckFilter[i].size} it is a ${duckFilter[i].gender} the color of it's feathers are usully ${duckFilter[i].color} it's temperament is usually ${duckFilter[i].temperament} and is currently ${duckFilter[i].age}.</p>`
    // domString +=  `</div>`
  }
  printToDom('#duckTarget', domString)
}


const filterDucksEvent = (event) => {
  const buttonId = event.target.id;

  const tempDuckCollection = [];

  if (buttonId === all) {
    filterDucks(ducks)
    return;
  }

  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i].size === buttonId) {
      tempDuckCollection.push(ducks[i]);
    }
  }

  filterDucks(tempDuckCollection);

}

const filterDucksGender = (e) => {
  const buttonId = e.target.id;

  const tempDuckFilter = []

  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i].gender === buttonId) {
      tempDuckFilter.push(ducks[i]);
    }
  }
  filterDucks(tempDuckFilter)
}

const rubberDuckEvent = (e) => {
  const buttonId = e.target.id;

  const rubberDuckFilter = []

  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i].breed === buttonId) {
      rubberDuckFilter.push(ducks[i]);
    }
  }
  filterDucks(rubberDuckFilter)
}

const clickEvents = () => {
  document.querySelector('#large').addEventListener('click', filterDucksEvent);
  document.querySelector('#medium').addEventListener('click', filterDucksEvent);
  document.querySelector('#small').addEventListener('click', filterDucksEvent);
  document.querySelector('#all').addEventListener('click', filterDucksEvent);
  document.querySelector('#rubber').addEventListener('click', rubberDuckEvent);
  document.querySelector('#male').addEventListener('click', filterDucksGender);
  document.querySelector('#female').addEventListener('click', filterDucksGender);
}

const init = () => {
  filterDucks(ducks);
  clickEvents();
}

init();
