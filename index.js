import {choice, remove} from "./helpers";
import  fruits  from "./foods";

let randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit} please`);


console.log(`Here you go: ${randomFruit}`)
console.log("Delicious! May I have another?")
let fruitsLeft = remove(fruits,randomFruit)
console.log(`I'm sorry, we're all out. We have ${fruitsLeft.length}`)

