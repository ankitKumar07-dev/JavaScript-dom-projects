let openBtn =document.querySelector("#open-model");
let closeBtn = document.querySelector("#close-model");
let modelOverlay =document.querySelector(".model-overlay");

openBtn.addEventListener("click", ()=>{
    modelOverlay.style.display = "flex";
});

closeBtn.addEventListener("click", ()=>{
    modelOverlay.style.display = "none";
});

modelOverlay.addEventListener("click", (event)=>{
    if(event.target === modelOverlay){
        modelOverlay.style.display = "none";
    }
});

document.addEventListener("keydown", (event)=>{
    if(event.key === "Escape"){
        modelOverlay.style.display = "none";
    }
});