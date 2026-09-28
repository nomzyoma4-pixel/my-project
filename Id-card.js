//tips
//am using let for things that will change later while const for things that is constant
const fullName = "Nzeako Model";
let age = 22;
const courseName = "Web Development";
let favouriteLanguage = "javaScript";
let courseFee =false;
//printing first time
// ` is a backtick in JavaScript  used to create a template literal which allows me to put variables directly inside a string using ${}.
console.log(`
M TECH HUB STUDENT CARD
Name:${fullName}}
Age:${age}
Course:${courseName}
favouriteLanguage:${favouriteLanguage}
courseFee:${courseFee}
`);
//change my mind

favouriteLanguage ="python";
 courseFee= "true";
//printin second time
console.log(`
M TECH HUB STUDENT CARD
Name:${fullName}
Age:${age}
Course:${courseName}
favouriteLanguage:${favouriteLanguage}
courseFee:${courseFee}
`);
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof courseName);
console.log(typeof favouriteLanguage);
console.log(typeof courseFee);
// Creating an object
let Human = {
  name: "Jack",
  age: 18 
};

// Assigning the object to a new variable
let newHuman = Human;

// Modifying the new variable
//(.) is used to access a property or method of an object 
 newHuman.name = "jim";

console.log(Human);
console.log(newHuman);
//my observations
//my human and newHuman points to the same object
// Creating an array
let Vegetables = ["bitterleaf", "waterleaf", "curryleaf"];

// Assigning it to a new variable
let newVegetables = Vegetables;

// Modifying the new array
//.push means to add an item/element to the end of an array
newVegetables.push("Orange");

console.log(Vegetables);
console.log(newVegetables); 
// my observations both variable refer to the same array 
