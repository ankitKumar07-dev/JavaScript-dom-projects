// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// btn.addEventListener("click", ()=>{
//     if(input.type === "password"){
//         input.type = "text";
//         btn.textContent = "Hide";
//     } else {
//         input.type = "password";
//         btn.textContent = "Show";
//     }
// });

// input.addEventListener("input", ()=>{
//      if(input.value.length === 0){
//         btn.disabled = true;
//     } else{
//         btn.disabled = false;
//     }
// });


let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    if(inp.type === "password"){
        inp.type = "text";
        btn.textContent = "Hide";
    }
    else{
        inp.type = "password";
        btn.textContent = "Show";
    }
});

inp.addEventListener("input", (e)=>{
    if(e.target.value === ""){
        btn.disabled = true;
    } else{
        btn.disabled = false;
    }
});