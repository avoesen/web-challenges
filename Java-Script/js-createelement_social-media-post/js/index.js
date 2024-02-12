console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const articleElement = document.createElement("article");
const pElement = document.createElement("p");
const footerElement = document.createElement("footer");
const spanElement = document.createElement("span");
const btnElement = document.createElement("button");

document.body.append(articleElement);
articleElement.classList.add("post");
articleElement.append(pElement);
articleElement.append(footerElement);
footerElement.append(spanElement);
footerElement.append(btnElement);

pElement.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
pElement.classList.add("post__content");
footerElement.classList.add("post__footer");
spanElement.classList.add("post__username");
spanElement.textContent = "@username";
btnElement.classList.add("post__button");
btnElement.textContent = "♥ Like";

btnElement.addEventListener("click", handleLikeButtonClick);



