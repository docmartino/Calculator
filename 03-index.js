/* --- FIRST NUMBER --- */

// let button = document.querySelectorAll(".number");
// let screenFirstNbr = document.querySelector(".firstNbr");

// console.log(button);

// for (let index = 0; index < button.length; index++) {
//   const elementButton = button[index];

//   elementButton.addEventListener("click", (event) => {
//     // alert(element.innerHTML);
//     screenFirstNbr.innerText = screenFirstNbr.innerText + elementButton.innerText;
//   });
// }

/* --- OPERATOR --- */

let operator = document.querySelectorAll(".operator");
let screenOperator = document.querySelector(".operatorScreen");
let newDivMemoryRemove = document.querySelector(".memoryContainer");

for (let index = 0; index < operator.length; index++) {
  const elementOperator = operator[index];

  elementOperator.addEventListener("click", (event) => {
    console.log(event)
    if (elementOperator.innerText == "AC") {
      screenFirstNbr.innerText = "";
      screenOperator.innerText = "";
      screenSecondNbr.innerText = "";
      screenEqual.innerText = "";
      while (newDivMemoryRemove.firstChild) {
        newDivMemoryRemove.removeChild(newDivMemoryRemove.firstChild);
      }
    } else if (screenFirstNbr.innerText == "") {
      alert("Click on a number first please :)");
    } else {
      screenOperator.innerText = elementOperator.innerText + " ";
    }
  });
}

/* --- SECOND NUMBER --- */

let button = document.querySelectorAll(".number");
let screenFirstNbr = document.querySelector(".firstNbr");
let screenSecondNbr = document.querySelector(".secondNbr");

for (let index = 0; index < button.length; index++) {
  const elementButton = button[index];

  elementButton.addEventListener("click", (event) => {
    if (screenEqual.innerText != "") {
      screenFirstNbr.innerText = "";
      screenOperator.innerText = "";
      screenSecondNbr.innerText = "";
      screenEqual.innerText = "";
    }
    if (screenOperator.innerText == "") {
      // alert(element.innerHTML);
      screenFirstNbr.innerText =
        screenFirstNbr.innerText + elementButton.innerText;
    } else {
      //   alert("je suis dans le second ecran");
      screenSecondNbr.innerText =
        screenSecondNbr.innerText + elementButton.innerText;
    }
  });
}

/* --- EQUAL --- */

let equal = document.querySelector(".equal");
let screenEqual = document.querySelector(".equalScreen");

equal.addEventListener("click", (event) => {
  let a = Number(screenFirstNbr.innerText);
  let b = screenOperator.innerText;
  let c = Number(screenSecondNbr.innerText);

  //   console.log(a + b + c);

  switch (b) {
    case "÷":
      screenEqual.innerText = "=" + a / c;
      newDivForMemoryContainer();
      break;
    case "x":
      screenEqual.innerText = "=" + a * c;
      newDivForMemoryContainer();
      break;
    case "-":
      screenEqual.innerText = "=" + (a - c);
      newDivForMemoryContainer();
      break;
    case "+":
      screenEqual.innerText = "=" + (a + c);
      newDivForMemoryContainer();
      break;
  }
});

let newDivForMemoryContainer = () => {
  let memory = document.querySelector(".memoryContainer");
  let newDivMemory = document.createElement("div");

  memory.prepend(newDivMemory);
  newDivMemory.className = "divMemory";

  newDivMemory.innerText =
    screenFirstNbr.innerText +
    screenOperator.innerText +
    screenSecondNbr.innerText +
    screenEqual.innerText;

  if (memory.hasChildNodes()) {
    let children = memory.childNodes;
    // console.log(children);
    if (children.length % 2 == 0) {
      newDivMemory.className = "divMemory colorLine";
    }
  }
};
