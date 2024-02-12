console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');


// tosError.style.display = "none";
tosError.setAttribute("hidden", "");

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (event.target.tos.checked === false) {
    return showTosError();
  } else {
    tosError.innerHTML = '<div data-js="success" class="success">Complaint successfully submitted!</div>'; 
    return showTosError();
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});