console.clear();

const form = document.querySelector('[data-js="form"]');


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const ageBadnessSum = Number(age.value) + Number(badness.value);
    console.log(ageBadnessSum)

    event.target.reset();
    event.target.firstName.focus();
})

// badness.addEventListener("input", () =>{
//     const ageBadnessSum = Number(age.value) + Number(badness.value); 
//     // console.log(ageBadnessSum)
//     console.log(badness.value);
// })
// age.addEventListener("input", () =>{
//     const ageBadnessSum = Number(age.value) + Number(badness.value); 
//     // console.log(ageBadnessSum)
//     console.log(age.value);
// })
