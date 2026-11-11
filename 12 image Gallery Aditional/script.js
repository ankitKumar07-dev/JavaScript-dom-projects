let images = document.querySelectorAll(".image-card img");
let lightbox = document.querySelector("#lightbox");
let previewImage = document.querySelector("#preview-image");
let closeBtn = document.querySelector(".close-btn");

images.forEach((img)=>{
    img.addEventListener("click", ()=>{
    previewImage.src = img.src;
    lightbox.style.display = "flex";
    })
});

closeBtn.addEventListener("click", ()=>{
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (event)=>{
    if(event.target === lightbox){
        lightbox.style.display = "none";
    }
});

document.addEventListener("keydown", (event)=>{
    if(event.key === "Escape"){
        lightbox.style.display = "none";
    }
});