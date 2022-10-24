let countDownDate = new Date("Dec 21, 2022 12:00:00").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();
    
  let distance = countDownDate - now; 
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = `${days}`;
  document.getElementById("hours").innerHTML = `${hours.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
  document.getElementById("minutes").innerHTML = `${minutes.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
  document.getElementById("seconds").innerHTML = `${seconds.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


let modal = document.getElementById("myModal");

let btn = document.getElementById("inscreva");

let submit = document.getElementById("form");

let span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", () => {
  modal.style.display = "block";
})

span.addEventListener("click", () => {
  modal.style.display = "none";
})

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

submit.addEventListener("submit",()=>{
  alert("Dados enviados com sucesso!");
  modal.style.display = "none";
})

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()
})