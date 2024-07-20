const marvel_heros = [ "thor", "ironman" , "spiderman"]
const dc_heros = [ "suparman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//  const allHeros = marvel_heros.concat(dc_heros)     // .push & .concat perform similar operation, combine two or more arrays
// console.log(marvel_heros);


const all_new_heros = [...marvel_heros,...dc_heros]      // spread[...xyz,...ubs] => add individual element from different arrays


// console.log(all_new_heros);

const another_array = [1, 2, 3,[4, 5,6], 7, [6, 7,[4, 5]]]
const real_another_array = another_array.flat(Infinity)    // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);


// console.log(Array.isArray("Aman"));   // boolean
// console.log(Array.from("Aman"));      // Creates an array from an iterable object.  // output => ['A', 'm', 'a', 'n']
// console.log(Array.from({name: "Aman"}));  //intresting case  //

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // A set of elements to include in the new array object.  //Returns a new array from a set of elements.


