let colorText = document.querySelector(".color-text");
let clickMe = document.querySelector(".btn-1");
let copyMe = document.querySelector(".btn-2");
let copyText = document.querySelector(".copy-text-show");

let = randomColor = "#FFFFFF";
clickMe.addEventListener("click", ()=>{
    randomColor = "#" + Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, "0")
    
    document.body.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
    colorText.style.color = randomColor;
});

let timer;
copyMe.addEventListener("click", async()=>{
    await
    navigator.clipboard.writeText(randomColor);

    copyText.textContent = "Color Copied!";

    clearTimeout(timer);

    timer = setTimeout(()=>{
        copyText.textContent = "";
    },2000);
});