// Object Destructuring

// const person = {
//   name: 'Snir',
//   age: 27,
//   location: {
//     city: 'Rehovot',
//     temp: 13
//   }
// };

// const {name: firstName = 'Anonymus', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperture} = person.location;
// if (city && temperture) {
//   console.log(`It's ${temperture} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// Array Desctructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvenia', '19147'];

// const [, city, state] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [ itemName, , mediumPrice, ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
