// let colorName = document.querySelector("h2");
// let colorBox = document.querySelector(".color-box");
// let generateBtn = document.querySelector(".btn-1");
// let copybtn = document.querySelector(".btn-2");
// let para = document.querySelector("p");


// generateBtn.addEventListener("click", ()=>{
//     randomColor = "#" + Math.floor(Math.random() * 16777216)
//     .toString(16)
//     .padStart(6, "0");

//     colorBox.style.backgroundColor = randomColor;
//     colorName.textContent = randomColor; 
// });

// let timer;
// copybtn.addEventListener("click", async()=>{
//     await
//     navigator.clipboard.writeText(randomColor);
//     para.textContent = "Color copied!";

//     clearTimeout(timer);

//     timer = setTimeout(()=>{
//         para.textContent = "";
//     },2000);
    
// });


let colorName = document.querySelector("h2");
let colorBox = document.querySelector(".color-box");
let generateBtn = document.querySelector(".btn-1");
let copybtn = document.querySelector(".btn-2");
let para = document.querySelector("p");

generateBtn.addEventListener("click", ()=>{
    randomColor = "#" + Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, "0");

    colorBox.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
});

let timer;

copybtn.addEventListener("click", async()=>{
   await 
   navigator.clipboard.writeText(randomColor);
   
   para.textContent = "Color copied!";

   clearTimeout(timer);

   timer = setTimeout(()=>{
    para.textContent = "";
   },1000);
});