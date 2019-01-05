const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello');
// Interpolated
console.log('Hello I am a %s string', 'weird');
// Styled
console.log(' %c I am some great text', 'font-size: 50px');
// warning!
console.warn('Oh nooo');
// Error :|
console.error('Crap!');
// Info
console.info('Cats love mice');
// Testing
console.assert(1 === 2, 'That is wrong!');
// clearing
console.clear();
// Viewing DOM Elements
//console.log(p);
//console.dir(p);

console.clear();
// Grouping together
dogs.forEach(dog => {
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name}, is ${dog.age} years old.`);

});
// counting
console.count('Wes');
console.count('Steve');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    })