console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function getUser(url) {
  // try {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error("no response")
    }
    try {
      const json = await response.json();
      return json.data;
  } catch(error) {
    throw new Error("parsing error")
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      const user = await getUser(event.target.dataset.url);
      if (!user) {
        userElement.textContent = "User not found";
      } else {
        userElement.innerHTML = `
        <h2>${user.first_name} ${user.last_name}</h2>
        <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
        `;
      }
      errorElement.textContent = ""; 
    } catch (error) {
      errorElement.textContent = error.message; 
      userElement.textContent = "User not found"; 
    }
  })
);
