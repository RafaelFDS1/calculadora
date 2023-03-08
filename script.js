const btnNum = Array.from(document.querySelectorAll(".numbers"));
const btnOp = Array.from(document.querySelectorAll(".operators"));
const btnSubmit = document.getElementById("submit");
let arrayEq = [];
let op = ["/", "x", "-", "+"];
btnNum.forEach((e) => {
  e.addEventListener("click", () => {
    let output = document.querySelector("#outputs");
    arrayEq.push(e.innerText);
    output.innerText = arrayEq.join("");
  });
});

btnOp.forEach((e) => {
  e.addEventListener("click", () => {
    let output = document.querySelector("#outputs");
    arrayEq.push(e.innerText);
    output.innerText += e.innerText;
  });
});

btnSubmit.addEventListener("click", (e) => {
  let arrayNums = [];
  let numbers = [];
  let operators = [];
  let arrayFinal = [];
  arrayEq.forEach((e) => {
    if (op.includes(e)) {
      operators.push(e == "x" ? "*" : e);
      numbers.push(parseInt(arrayNums.join("")));
      arrayNums = [];
    } else {
      arrayNums.push(parseInt(e));
    }
  });
  numbers.push(parseInt(arrayNums.join("")));
  console.log(numbers);
});
