/* 
  create a collection of ducks
  print ducks to dom
*/

const ducks = [
  {
    color: 'Green, Brown, White',
    name: 'Comrade',
    breed: 'Mallard',
    size: '23in, 2.2lbs',
    temperament: 'Quiet and reserved',
    imageUrl: 'https://www.allaboutbirds.org/guide/assets/photo/60021841-480px.jpg',
    gender: 'Male',
    age: 3,
  },
  {
    color: 'Brown and White',
    name: 'Bob Ross',
    breed: 'Canvasback',
    size: '21in, 2.4lb',
    temperament: 'Chill and Groovy',
    imageUrl: 'https://www.allaboutbirds.org/guide/assets/photo/141748541-480px.jpg',
    gender: 'Male',
    age: 11,
  },
  {
   color: 'Brown and Beige',
   name: 'Cambria',
   breed: 'Marbled',
   size: '16in, .8lbs',
   temperament: 'Reserved',
   imageUrl: 'https://download.ams.birds.cornell.edu/api/v1/asset/189839151/1800',
   gender: 'Female',
   age: 16,
  },
  {
    color: 'Reddish Brown, Black, and White',
    name: 'Marie Antoinette',
    breed: 'Black-bellied whistling',
    size: '19in, 1lb',
    temperament: 'Sassy and Noble',
    imageUrl: 'https://www.thespruce.com/thmb/nRI1CzvQdBqz-ApA-tCPgOALujg=/1500x1000/filters:fill(auto,1)/black-bellied-whistling-duck-569ea9985f9b58eba4ac8bd0.jpg',
    gender: 'Female',
    age: 4,
  },
  {
    color: 'Brown, Black, Beige',
    name: 'Sir Quackers',
    breed: 'White Faced Whistling',
    size: '14in, 1lb',
    temperament: 'Aggressive and Fiesty',
    imageUrl: 'https://www.purelypoultry.com/images/white-faced-whistling-ducks.jpg',
    gender: 'Male',
    age: 7,
  },
  {
    color: 'Orange, biege, black',
    name: 'Dr. Orange',
    breed: 'Fulvous Whistling',
    size: '18in, 1.2lbs',
    temperament: 'Goofy',
    imageUrl: 'https://res-5.cloudinary.com/ebirdr/image/upload/s--ps-ADM7x--/f_auto,q_auto,t_full/2917-fulvous-whistling-duck.jpg',
    gender: 'Male',
    age: 3,
 },
 {
   color: 'black, gray, brown',
   name: 'Ms. Plum',
   breed: 'Plumed Whistling',
   size: '18in, 1.7lb',
   temperament: 'chill',
   imageUrl: 'https://test.cdn.download.ams.birds.cornell.edu/api/v1/asset/116455141/1800',
   gender: 'Female',
   age: 4,
  },
  {
    color: 'Brown, black, and white',
    name: 'Chicken',
    breed: 'Alabio',
    size: '19in, 1.8lbs',
    temperament: 'Loosey Goosey',
    imageUrl: 'https://i.imgur.com/T9fXZIl.jpg',
    gender: 'Male',
    age: 0,
  }
    
]

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const filterDucks = (duckFilter) => {
  let domString = '';

  for (let i = 0; i < duckFilter.length; i++){
    domString += `<div>`
    domString +=  `<h2>${duckFilter[i].breed}</h2>`
    domString +=  `<img src="${duckFilter[i].imageUrl}" alt="${duckFilter[i].breed}">`
    domString +=  `<p> This is a ${duckFilter[i].breed} it's name is ${duckFilter[i].name} it is a ${duckFilter[i].gender}.</p>`
    domString +=  `<p> it's length and weight are ${duckFilter[i].size} it is a ${duckFilter[i].gender} the color of it's feathers are usully ${duckFilter[i].color} it's temperament is usually ${duckFilter[i].temperament} and is currently ${duckFilter[i].age}.</p>`
    domString +=  `</div>`
  }
  printToDom('#duckTarget', domString)
}

const init = () => {
  filterDucks(ducks);
}

init();
