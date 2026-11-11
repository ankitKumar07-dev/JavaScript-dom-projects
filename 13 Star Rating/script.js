let stars = document.querySelectorAll(".star");
let ratingText = document.querySelector(".rating-text");
let resetBtn = document.querySelector(".reset-btn");

let selectedRating = 0;

stars.forEach((star, index)=>{
    star.addEventListener("click", ()=>{
        selectedRating = index + 1;
        updatesStars(selectedRating);

        ratingText.textContent = `You rated ${selectedRating}/5`
    })

    star.addEventListener("mouseenter", ()=>{
        updatesStars(index + 1);
    })
});

document.querySelector(".stars").addEventListener("mouseleave", ()=>{
    updatesStars(selectedRating);
})

const updatesStars = (rating)=>{
     stars.forEach((star, index)=>{
        if(index < rating){
            star.classList.add("active");
        } 
        else{
            star.classList.remove("active");
        }
        
    })
}

resetBtn.addEventListener("click", ()=>{
    selectedRating = 0;
    updatesStars(selectedRating);
    ratingText.textContent = "Select your rating";
});