let questions = document.querySelectorAll(".accordion-question");
let answers = document.querySelectorAll(".accordion-answer");
let iconBtn = document.querySelectorAll("span");

questions.forEach(question =>{
    question.addEventListener("click", ()=>{
         let item = question.closest(".accordion-item");
         let answer = item.querySelector(".accordion-answer");
         let icon = item.querySelector("span");

         if(answer.style.display === "block"){
            answer.style.display = "none";
            icon.textContent = "+"
            return;
         }

         answers.forEach(ans=>{
             ans.style.display = "none";
         })

         iconBtn.forEach((i)=>{
            i.textContent = "+";
         })

        answer.style.display = "block";
        icon.textContent = "-";


    })
})

