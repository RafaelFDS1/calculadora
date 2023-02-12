const numbers = Array.from(document.querySelectorAll(".numbers"));
const output = document.querySelector("#outputs");
const submit = document.querySelector("#submit");
const divide = document.querySelector(".divide");
const clear = document.querySelector(".clear");
let actualNumber = "";
let cont = 0;

numbers.forEach((e) => {
  e.addEventListener("click", (e) => {
    actualNumber += e.target.innerText;
    output.innerText = actualNumber;
    console.log(cont);
  });
});

divide.addEventListener("click", (e) => {
  output.innerText += "/";
  actualNumber += "/";
  cont++;
  console.log(cont);
});

// multply.addEventListener("click", (e) => {
//   output.innerText += "/";
//   actualNumber += "/";
//   cont++;
// });

clear.addEventListener("click", () => {
  output.innerText = 0;
  actualNumber = "";
  cont = 0;
});

submit.addEventListener("click", () => {
  output.innerText.split("").forEach((e) => {
    if (cont == 1) {
      switch (e) {
        case "/":
          output.innerText =
            Number(output.innerText.split("/")[0]) /
            Number(output.innerText.split("/")[1]);
          actualNumber = output.innerText;
          break;
        case "-":
          output.innerText =
            Number(output.innerText.split("-")[0]) -
            Number(output.innerText.split("-")[1]);
          break;
        case "*":
          output.innerText =
            Number(output.innerText.split("*")[0]) *
            Number(output.innerText.split("*")[1]);
          break;
        case "+":
          output.innerText =
            Number(output.innerText.split("+")[0]) +
            Number(output.innerText.split("+")[1]);
          break;
      }
    }
  });
  cont = 0;
});
