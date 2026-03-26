import _ from 'underscore';

let vowels = ["a", "e", "i", "o", "u"];
console.log(vowels);
vowels = _.shuffle(vowels);

displayVowels();

function displayVowels() {
    for (let vowel of vowels) {
        console.log(vowel);
    }
}

let hello = () => {
    return"Hello, World!";
}

console.log(hello());