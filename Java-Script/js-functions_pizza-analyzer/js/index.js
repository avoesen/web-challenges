console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

console.log(pizza1);

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value; 
  let pizzaSize2 = pizzaInput2.value; 

  calculatePizzaGain(pizzaSize1, pizzaSize2)
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
    let pizzaSize1 = pizzaInput1.value;
    let pizzaSize2 = pizzaInput2.value;

    calculatePizzaGain(pizzaSize1, pizzaSize2);
    updatePizzaDisplay(pizza2, pizzaSize2)
    updateOutputColor(pizzaSize1, pizzaSize2)
    // console.log("test")
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  area1 = Math.PI * (diameter1/2)**2;
  area2 = Math.PI * (diameter2/2)**2;
  output.textContent = Math.round(((area2 - area1) / area1) * 100);
}
// calculatePizzaGain(pizzaInput1, pizzaInput2)

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  // pizzaElement1 = pizza1.style.width;
  // pizzaElement2 = pizza2.style.width;
  let screenSize = (newSize / 24) * 100;
  pizzaElement.style.width = screenSize + "px";
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  if (size1 < size2) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}
