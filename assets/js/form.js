const register = document.getElementById("register")
const popUp = document.getElementById("popUp")
const close = document.getElementById("close")
const container = document.getElementById("container")

register.addEventListener("click",()=>{
    container.style.display="block";
})

close.addEventListener("click",()=>{
        container.style.display="none";
    })
