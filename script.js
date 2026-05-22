let btn = document.querySelector(".btn1")
let loginDiv = document.querySelector(".login-form");

btn.addEventListener("click", ()=>{
    loginDiv.classList.toggle("active")
})

let spantag = document.querySelector(".form-cut")

spantag.addEventListener("click", ()=>{
    loginDiv.classList.remove("active")
})

