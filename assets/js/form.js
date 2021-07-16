const register = document.getElementById("register")
const popUp = document.getElementById("popUp")

register.addEventListener("click",()=>{
    const container = document.createElement("div");
    const formContainer = document.createElement("div");
    const close = document.createElement("i");
    const form = document.createElement("form");
    const h2 =document.createElement("h2");
    const labelGame = document.createElement("label");
    const selectGame = document.createElement("select");
    const optionGame = document.createElement("option");
    const contGroup = document.createElement("div")
    const contTeam = document.createElement("div")
    const contClan = document.createElement("div")
    const labelTeam= document.createElement("label");
    const inputTeam = document.createElement("input");
    const labelClan= document.createElement("label");
    const inputClan = document.createElement("input");
    const labelName = document.createElement("label");
    const inputName = document.createElement("input");
    const labelNumber = document.createElement("label");
    const inputNumber = document.createElement("input");
    const labelIg = document.createElement("label");
    const inputIg = document.createElement("input");
    const labelLogo = document.createElement("label");
    const inputLogo = document.createElement("input");
    const send = document.createElement("input") 

    container.setAttribute("class","container");
    formContainer.setAttribute("class","formContainer");
    close.setAttribute("class","fas fa-times close-button");
    form.setAttribute("action","send.php");
    form.setAttribute("method","post");
    form.setAttribute("enctype","multipart/form-data");
    form.setAttribute("class","form");
    h2.textContent="INSCRIPCION";     
    labelGame.setAttribute("for","game");
    labelGame.textContent="Juego";
    selectGame.setAttribute("name","game");
    selectGame.setAttribute("id","game");
    optionGame.setAttribute("value","freeFire");
    optionGame.setAttribute("Label","Free Fire");
    contGroup.setAttribute("class","divGroup");
     labelTeam.setAttribute("for","team");
     labelTeam.textContent="Team";   
    inputTeam.setAttribute("type","radio");
    inputTeam.setAttribute("name","group");
    inputTeam.setAttribute("id","team");
    labelTeam.setAttribute("for","Clan");
     labelClan.textContent="Clan"; 
    inputClan.setAttribute("type","radio");
    inputClan.setAttribute("name","group");
    inputClan.setAttribute("id","clan");
    labelName.textContent="Nombre del Grupo";
    inputName.setAttribute("type","text");
    inputName.setAttribute("name","name");
    inputName.setAttribute("id","name");
    labelNumber.textContent="Numero de Celular";
    inputNumber.setAttribute("type","number");
    inputNumber.setAttribute("name","number");
    inputNumber.setAttribute("id","number");
    labelIg.textContent="Instagram del Grupo";
    inputIg.setAttribute("type","text");
    inputIg.setAttribute("name","ig");
    inputIg.setAttribute("id","ig");
    labelLogo.textContent="Logo de tu Grupo";
    inputLogo.setAttribute("type","file");
    inputLogo.setAttribute("name","img");
    inputLogo.setAttribute("id","img");
    send.setAttribute("type","button");
    send.setAttribute("value","Enviar");
    send.setAttribute("id","send");

    popUp.appendChild(container);
    container.appendChild(formContainer);
    formContainer.appendChild(close);
    formContainer.appendChild(form);
    form.appendChild(h2);
    form.appendChild(labelGame);
    form.appendChild(selectGame);
    selectGame.appendChild(optionGame);
    form.appendChild(contGroup);
    contGroup.appendChild(contTeam);
    contTeam.appendChild(labelTeam);
    contTeam.appendChild(inputTeam);
    contGroup.appendChild(contClan)
    contClan.appendChild(labelClan);
    contClan.appendChild(inputClan);
    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(labelNumber);
    form.appendChild(inputNumber);
    form.appendChild(labelIg);
    form.appendChild(inputIg);
    form.appendChild(labelLogo);
    form.appendChild(inputLogo);
    form.appendChild(send);

    

    close.addEventListener("click",()=>{
        popUp.removeChild(container);
    })
})  