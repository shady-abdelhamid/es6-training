/**
 * Rest
 */
let items = [];

function loot (toPickup) {
    let result = [];
    for (let i = 0; i < toPickup.length; i++) {
        result.push(toPickup[i]);
    }
    return result;
}

console.log('BackBag', loot('toolbox', 'shovel', 'bike'));




/**
 * Spread
 */


let enemies = [1,2,3,5];

let boss = Math.max(enemies);

console.log(boss);
