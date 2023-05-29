console.log("Hello");

const btn = document.querySelector(".btn-open"); //select a button
const form = document.querySelector(".fact-form");
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// javascript is like python, no need to declare datatype of variable
// 7 types of data types in javascript

// falsy values : 0, '', null, undefined
// truthy values: everything else....

// let votesInteresting = 23;
// let votesMindlowing = 5;
// const text = "Lisbon is the capital of Portugal";

// votesInteresting = votesInteresting + 1;
// votesInteresting++;
// console.log(votesInteresting);

// let totalUpvotes = votesInteresting + votesMindlowing;
// console.log("Upvotes:", totalUpvotes);

// let votesFalse = 4;
// const isCorrect = votesFalse < totalUpvotes;
// console.log(isCorrect);

// console.log(parseInt("24.533ccc"));

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;

//   if (age >= 0) return age;
//   else return `Impossible year. Year needs to be less or equal ${currentYear}`;
// }

// const age1 = calcFactAge(2015);
// console.log(age1);
// console.log(calcFactAge(2020));
// console.log(calcFactAge(2037));

// console.log("Arrow operator start");
// const calcFactAge2  = (year) => year <= new Date().getFullYear() ? new Date().getFullYear() - year : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}` ;
// console.log(calcFactAge2(2026));

// let votesInteresting = 20;
// let votesMindlowing = 5;

// if (votesInteresting === votesMindlowing) {
//   alert("This fact is equally interesting and mindblowing");
// } else if (votesInteresting > votesMindlowing) {
//   console.log("Interesting fact!");
// } else if (votesInteresting < votesMindlowing) {
//   console.log("Mindblowing fact!!");
// }

// // falsy values: 0, '', null, undefined
// // truthy value: everything else...
// if (votesMindlowing) {
//   console.log("MINDBLOWING FACT!!!");
// } else {
//   console.log("Not so special...");
// }

// let votesFalse = 7;
// const totalUpvotes = votesInteresting + votesMindlowing;

// const message =
//   totalUpvotes > votesFalse
//     ? "The fact is true"
//     : "Might be false, check more sources...";
// // alert(message);

// const text = "Lisbon is the capital of Portugal";
// const upperText = text.toUpperCase();
// console.log(upperText);

// const str = `The current fact is "${text}". It is ${calcFactAge(
//   2015
// )} years old. It is probably ${
//   totalUpvotes > votesFalse ? "correct" : "not true"
// }.`;
// console.log(str);

const fact = ["Lisbon is the capital of Portugal", 2013, true];
console.log(fact.length);
console.log(fact.length - 1);
//true
const [text, createdIn] = fact;
const newfact = [...fact, "society"];
// ... spread operator
console.log(newfact);

const factObj = {
  text: "Lisbon is the capital of Portugal",
  createdIn: 2015,
  isCorrect: true,
  category: "society",
  createSummary: function () {
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());

[2,3,4,5].forEach(function(el){
  console.log(el);
});
const times10 = [2,4,5,6].map(function(el){
  return el *10;

});

console.log(times10);

//forEach: This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database) and does not return anything.

//map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase). It does not mutate the array on which it is called (although the callback function may do so).

//Array.forEach “executes a provided function once per array element.”

//Array.map “creates a new array with the results of calling a provided function on every element in this array.”
