function *selectHero() {
    yield 'Ironman';
    yield 'Spiderman';
}

let it = selectHero();
console.log(it.next());
console.log(it.next());
console.log(it.next());




