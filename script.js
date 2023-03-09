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
  let output = document.querySelector("#outputs");
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
  output.innerText = calcular(numbers, operators);
});

function calcular(numbers, operators) {
  operators.forEach((e, i) => {
    if (e == "/" || e == "*") {
      let temp = numbers[i];
      numbers.pop(numbers.indexOf(temp));
      numbers.unshift(temp);
      temp = numbers[i + 1];
      numbers.pop(numbers.indexOf(temp));
      numbers.unshift(temp);
    }
  });
  let result = numbers[0];
  operators.forEach((e, i) => {
    switch (e) {
      case "/":
        result = result / numbers[i + 1];
        break;
    }
  });
  return result;
}
