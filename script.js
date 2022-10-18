// Set the date we're counting down to
let countDownDate = new Date("Dec 21, 2022 12:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now; 
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = `${days}`;
  document.getElementById("hours").innerHTML = `${hours.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
  document.getElementById("minutes").innerHTML = `${minutes.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
  document.getElementById("seconds").innerHTML = `${seconds.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


const form = document.querySelector('form');
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("inscreva");

// Get the button that submits the data
let submit = document.getElementById("submit");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

form.addEventListener('submit',(e)=>{
  alert("Dados enviados com sucesso!");
 })