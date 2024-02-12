console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

progressBar.style.width = 0;

// console.log(scrollDown);
// console.log(windowInnerHeight);
// console.log(totalHeight);
// console.log(scrollDistance);
// console.log(scrollPercent);

function calculateScrollPercentage() {
  const scrollDown = window.scrollY; //aktuelle position
  const windowInnerHeight = window.innerHeight; //Höhe desFensters
  const totalHeight = document.body.clientHeight; //komplette Höhe des Inhalts
  const scrollDistance = totalHeight - windowInnerHeight;

  const scrollPercent = Math.round((scrollDown / scrollDistance) * 100);
  return scrollPercent;
}
// console.log(calculateScrollPercentage())

window.addEventListener("scroll", ()=> {
  // console.log("ich funktioniere")
  // calculateScrollPercentage();
  progressBar.style.width = calculateScrollPercentage()+ "%";
})