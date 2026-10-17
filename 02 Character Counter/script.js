// let message = document.querySelector("#message");
// let warning = document.querySelector(".warning");
// let cCount = document.querySelector(".c-count");
// let rCount = document.querySelector(".r-count");
// let progress = document.querySelector(".progress");

// message.addEventListener("input", ()=>{
//     let char = message.value.length;
    
//         cCount.textContent = `Character: ${char}/100`  
//         rCount.textContent = `Remaining: ${100 - char}`
//         progress.style.width = `${char}%`

//         if(char >= 100){
//             warning.textContent = "Character limit reached!"
//         } else if(char >= 90){
//             warning.textContent = "You are approaching the character limit!"
//         } else{
//             warning.textContent = "";
//         }
        
//         if(char >= 100){
//             progress.style.backgroundColor = "red";
//         } else if(char >= 90){
//             progress.style.backgroundColor = "yellow"
//         } else{
//             progress.style.backgroundColor = "black";
//         }

// });



let message = document.querySelector("#message");
let warning = document.querySelector(".warning");
let cCount = document.querySelector(".c-count");
let rCount = document.querySelector(".r-count");
let progress = document.querySelector(".progress");

message.addEventListener("input", ()=>{
    let char = message.value.length;

    cCount.textContent = `Characters: ${char}/100`;
    rCount.textContent = `Remainder: ${100 - char}`;
    progress.style.width = `${char}%`;

    if(char >= 100){
        warning.textContent = "Character limit reached!";
    }else if(char >= 90){
         warning.textContent = "You are approaching the character limit!"
    } else{
        warning.textContent = "";
    }
    
    if(char >= 100){
        progress.style.backgroundColor = "red";
    }else if(char >= 90){
        progress.style.backgroundColor = "yellow";
    }else{
        progress.style.backgroundColor = "black";
    }
})