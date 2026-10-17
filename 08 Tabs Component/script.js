// let buttons = document.querySelectorAll(".tab-buttons button");
// let contents = document.querySelectorAll(".content");

// buttons.forEach((button, index)=>{
//     button.addEventListener("click", ()=>{
//         contents.forEach(content=>{
//             content.classList.remove("active");
//         });

//         contents[index].classList.add("active");

//         buttons.forEach(btn =>{
//            btn.classList.remove("active");
//         });
        
//         button.classList.add("active");
//     });
// });

// let buttons = document.querySelectorAll(".tab-buttons button");
// let contents = document.querySelectorAll(".content");

// buttons.forEach((button, index)=>{
//     button.addEventListener("click", ()=>{
//         contents.forEach(content => {
//             content.classList.remove("active");
//         });

//         contents[index].classList.add("active");

//         buttons.forEach(btn=>{
//             btn.classList.remove("active");
//         })
//         button.classList.add("active");
//     })
// });

let buttons = document.querySelectorAll(".tab-buttons button");
let contents = document.querySelectorAll(".content");

buttons.forEach((button, index)=>{
    button.addEventListener("click", ()=>{
        contents.forEach(content =>{
            content.classList.remove("active");
        });
        contents[index].classList.add("active");

        buttons.forEach(btn=>{
            btn.classList.remove("active");
        });

        button.classList.add("active");
    });
});
 