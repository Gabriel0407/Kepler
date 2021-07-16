const register = document.getElementById("register")
const popUp = document.getElementById("popUp")

register.addEventListener("click",()=>{
    const container = document.createElement("div");
    const formContainer = document.createElement("div");
    const close = document.createElement("i");
    const form = document.createElement("form");
    
    container.setAttribute("class","container");
    formContainer.setAttribute("class","formContainer");
    close.setAttribute("class","fas fa-times close-button");
    form.setAttribute("name","contact");
    form.setAttribute("method","POST");
    form.setAttribute("data-netlify","true");
    
    popUp.appendChild(container);
    container.appendChild(formContainer);
    formContainer.appendChild(close);
    formContainer.appendChild(form);

    close.addEventListener("click",()=>{
        popUp.removeChild(container);
    })
})  