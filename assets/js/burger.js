const burger = document.getElementById("burger")
const menu = document.getElementById("menu")
const burgerIcon = document.getElementById("burger-icon")

burger.addEventListener("click",()=>{
    burgerIcon.classList.toggle("fa-bars");
  burgerIcon.classList.toggle("fa-times");
  menu.classList.toggle("menu-content");
  menu.classList.toggle("abierto");   
})
