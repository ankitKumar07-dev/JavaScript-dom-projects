let h1 = document.querySelector("h1");
let statusShow = document.querySelector("h3");
let add = document.querySelector(".add-btn");
let subtract = document.querySelector(".subtract-btn");
let multiply = document.querySelector(".multiply-btn");
let division = document.querySelector(".division-btn");
let reset = document.querySelector(".reset-btn");

let count = 0;

add.addEventListener("click", ()=>{
   
   if(count < 10)
   {
    count++; 
    updateStatus();
   }
});

subtract.addEventListener("click", function(){
    
    if(count > -10)
   {
    count--;
    updateStatus();
   }
});

multiply.addEventListener("click", ()=>{
    
    if(count < 10)
   {
    count *= 2;
    updateStatus();
   }
});

division.addEventListener("click", ()=>{
    count /= 2;
    updateStatus();
});

reset.addEventListener("click", ()=>{
    count = 0;
    updateStatus();
});

function updateStatus(){
    if(count > 0){
    statusShow.textContent = "Positive";
} else if(count < 0){
    statusShow.textContent = "Negative";
} else{
    statusShow.textContent = "Zero"
}

if(count === 10){
    add.disabled = true;
} else{
    add.disabled = false;
}

if(count === -10){
    subtract.disabled = true;
} else{
    subtract.disabled = false;
}

 h1.textContent = count;
}