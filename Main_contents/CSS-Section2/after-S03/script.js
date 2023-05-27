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

let votesInteresting = 15;
let votesMindblowing = 17;
const text = "Lisbon";
// javascript is like python, no need to declare datatype of variable
// 7 types of data types in javascript
// function calcyear(year){}
// new Date().getFullYear();
// calcyear(2015);

if (votesInteresting === 5) {
  alert("WHATTT");
}
// falsy values : 0, '', null, undefined
// truthy values: everything else....

let votesFalse = 6;
const totalUpvotes = votesInteresting + votesMindblowing;
const mesaage =
  totalUpvotes > votesFalse ? "The fact is true" : "Might be false";

//alert(message);
