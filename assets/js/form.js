const register = document.getElementById("register")
const popUp = document.getElementById("popUp")

register.addEventListener("click",()=>{
    const container = document.createElement("div");
    const formContainer = document.createElement("div");
    const close = document.createElement("i");

    container.setAttribute("class","container");
    formContainer.setAttribute("class","formContainer");
    close.setAttribute("class","fas fa-times close-button");

    popUp.appendChild(container);
    container.appendChild(formContainer);
    formContainer.appendChild(close);


    close.addEventListener("click",()=>{
        popUp.removeChild(container);
    })
})  