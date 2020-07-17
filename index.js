/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let htime = timeString.split(':').
  let itime = parseInt(htime);
  return itime ;

}
/* Write your implementation of displayMessage() */
function displayMessage(time) {

  let greatingMass = document.getElementById('greeting');
  if (time < 12) {
    greatingMass.innerHTML = "Good Morning"

  }else if (time > 12 && time < 17) {
    greatingMass.innerHTML = "Good Afternoon";
  }
  else {
    greatingMass.innerHTML = "Good Evening";
  }

}
