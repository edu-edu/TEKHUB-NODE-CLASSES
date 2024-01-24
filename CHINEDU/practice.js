const sports = ["football", "Long Jump", "Skipping", "basketball"];
const pass = sports.shift();
console.log(sports);
console.log(pass);


// We are about to work on the UNSHIFT method
const kids = ["Nedum", "Chimamaka", "Muna", "Ifee"];
const family = kids.unshift("Chisom");
console.log(family);
console.log(kids);

//We are about to work on the Splice method
const food = ["rice", "beans", "yam"];
food.splice(2, 1, "fio fio", "akidi");
console.log(food);

//We are about to work on the Slice method
const naijaFood = ["rice", "beans", "yam"];
const arrayCopy= naijaFood.slice(0,2)
console.log({arrayCopy, naijaFood});