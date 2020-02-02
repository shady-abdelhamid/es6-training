/**
 * iterators
 */

let array = [1, 2, 3];

let it = array[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());




/** iterateable object */

let enemy = {
    name: 'Darth Vader',
    abilities: ['Force Valor', 'Telekinesis', 'Master Lightsaber Duelist'],
    [Symbol.iterator]: function() {
        let i = 0;
        return {
            next: () => {
                let value = this.name + this.abilities[i];
                i++;
                return {
                    done: i > this.abilities.length,
                    value
                };
            }
        };
    }
};

for (const ability of enemy) {
    console.log(ability);
}
