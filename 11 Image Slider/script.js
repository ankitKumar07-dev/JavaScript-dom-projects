// let image = document.querySelector("#slider-image");
// let prevBtn = document.querySelector("#prev-btn");
// let nextBtn = document.querySelector("#next-btn");
// let dotsContainer = document.querySelector(".dots-container");

// let images = [
//   "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//   "https://images.unsplash.com/photo-1610814426508-bc6dcda34c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//   "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//   "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//   "https://plus.unsplash.com/premium_photo-1663956111757-534bcb550932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
// ];

// images.forEach(()=>{
//   let dot = document.createElement("button");
//   dot.classList.add("dot");
//   dotsContainer.appendChild(dot);
// });

// let dots = document.querySelectorAll(".dot");

// function updateDots(){
//   dots.forEach((dot, index)=>{
//     dot.classList.remove("active");

//     if(index === currentIndex){
//       dot.classList.add("active");
//     }
//   });
// }

// let currentIndex = 0;

// image.src = images[currentIndex];
// updateDots();

// nextBtn.addEventListener("click", () => {
//   currentIndex++;
//   if (currentIndex < images.length) {
//     image.src = images[currentIndex];
//     updateDots();
//   } else {
//     currentIndex = 0;
//     image.src = images[currentIndex];
//     updateDots();
//   }
// });

// prevBtn.addEventListener("click", () => {
//   currentIndex--;
//   if (currentIndex >= 0) {
//     image.src = images[currentIndex];
//     updateDots();
//   } else {
//     currentIndex = images.length - 1;
//     image.src = images[currentIndex];
//     updateDots();
//   }
// });

// dots.forEach((dot, index)=>{
//   dot.addEventListener("click", ()=>{
//     currentIndex = index;
//     image.src = images[currentIndex];
//     updateDots();
//   });
// });



let image = document.querySelector("#slider-image");
let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");
let dotsContainer = document.querySelector(".dots-container");

let images = [
  "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1610814426508-bc6dcda34c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://plus.unsplash.com/premium_photo-1663956111757-534bcb550932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1610814426508-bc6dcda34c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://plus.unsplash.com/premium_photo-1663956111757-534bcb550932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
];

let currentIndex = 0;
let startDotIndex = 0;

images.forEach(()=>{
  let dot = document.createElement("button");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

function updateDots() {
  startDotIndex = Math.max(
    0,
    Math.min(currentIndex - 2, images.length - 5)
  );

  dots.forEach((dot, index) => {
    dot.style.display = "none";
    dot.classList.remove("active");
  });

  for (let i = startDotIndex; i < startDotIndex + 5; i++) {
    if (dots[i]) {
      dots[i].style.display = "inline-block";

      if (i === currentIndex) {
        dots[i].classList.add("active");
      }
    }
  }
}


image.src = images[currentIndex];
updateDots();

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < images.length) {
    image.src = images[currentIndex];
    updateDots();
  } else {
    currentIndex = 0;
    image.src = images[currentIndex];
    updateDots();
  }
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex >= 0) {
    image.src = images[currentIndex];
    updateDots();
  } else {
    currentIndex = images.length - 1;
    image.src = images[currentIndex];
    updateDots();
  }
});

dots.forEach((dot, index)=>{
  dot.addEventListener("click", ()=>{
    currentIndex = index;
    image.src = images[currentIndex];
    updateDots();
  });
});