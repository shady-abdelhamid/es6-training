import { Helper } from './helper.js'

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
    
    constructor(name) {
        super(name);
        this._position = [123,456];
    }
    
    
    get position() {
        return this._position;
    }
    
    set position(value) {
        let [x,y] = value;
        if(x >= 0  && y>= 0) {
            this._position = value
        } else {
            console.error('ERROR: bad position assignment');
        }
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I can wonder`);
    }
    
    wonder() {
        console.log('wondering...'+ this._position[0]);
    }
}


let aya = new WonderingNPC('Aya');
aya.wonder();
aya.talk();
aya.position = [-10,10];
console.log(aya.position);


Helper.refresh();
