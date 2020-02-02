/**
 * iterators
 */

let array = [1, 2, 3];

let it = array[Symbol.iterator]();

console.log(it.next());




/** iterateable object */

// let enemy = {
//     name: 'Darth Vader',
//     abilities: ['Force Valor', 'Telekinesis', 'Master Lightsaber Duelist'],
//     [Symbol.iterator]: function() {
//         let i = 0;
//         let abilities = this.abilities;
//         return {
//             next: function() {
//                 let value = abilities[i];
//                 i++;
//                 return {
//                     done: i > abilities.length,
//                     value
//                 };
//             }
//         };
//     }
// };

// for (const ability of enemy) {
//     console.log(ability);
// }





/**
 * 
 */