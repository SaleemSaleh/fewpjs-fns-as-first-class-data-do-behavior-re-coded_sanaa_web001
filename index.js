/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let htime = timeString.split(':');
  let time = parseInt(htime, 10);
  if (time < 12) {
  return "Good Morning";

  }else if (time > 12 && time < 17) {
  return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(String) {
let content = document.getElementById("greeting") ;
content.textContent = String ;
}
