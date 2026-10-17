let clock = document.querySelector("#clock");

let updateClock = ()=>{
let now = new Date();

let hours = now.getHours();
let ampm = hours >= 12 ? "PM" : "AM";
let tFormat = hours % 12 || 12;
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let time = `${String(tFormat).padStart(2, "0")}:
${String(minutes).padStart(2, "0")}:
${String(seconds).padStart(2, "0")}
 ${ampm}`;

clock.textContent = time; 

}

updateClock();

setInterval(updateClock, 1000);
