const numbers = Array.from(document.querySelectorAll(".numbers"));
const output = document.querySelector("#outputs");
const submit = document.querySelector("#submit");
const divide = document.querySelector(".divide");
let firstNumbers = "";
let activeNumbers = [];
let contador = 0;
numbers.forEach((e) => {
  e.addEventListener("click", (e) => {
    activeNumbers.push(e.target.innerText);
    if (activeNumbers.length > 0) {
      output.innerText = activeNumbers.join("");
    } else {
      firstNumbers = e.target.innerText;
      output.innerText += firstNumbers;
    }
  });
});

divide.addEventListener("click", (e) => {
  output.innerText += "/";
  activeNumbers = [];
});

submit.addEventListener("click", (e) => {
  output.innerText.split("").forEach((e) => {
    switch (e) {
      case "/":
        output.innerText =
          Number(output.innerText.split("/")[0]) /
          Number(output.innerText.split("/")[1]);
        break;
    }
  });
});
