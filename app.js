class NonPlayableCharacter {
    
    constructor(name) {
        this.name = name;
    }
    
    talk() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let rania = new NonPlayableCharacter('Rania');
rania.talk();




/**
 * Inheritance
 */
class WonderingNPC extends NonPlayableCharacter {

    
    talk() {
        console.log(`Hello, my name is ${this.name} and I can wonder`);
    }
    
    wonder() {
        console.log('wondering...');
    }
}


// let aya = new WonderingNPC('Aya');
// aya.wonder();


// constructor(name) {
//     super(name);
//     this.position = [123,456];
// }

/**
 * Getter and setter
 */

// get position() {
//     return this._position;
//}

// set position(value) {
//     let [x,y] = value;
//     if(x >= 0  && y>= 0) {
//         this._position = value
//     } else {
//         console.error('ERROR: bad position assignment');
//     }
// }

// aya.position = [-2,5];





// import { Helper } from './helper.js'


