const register = document.getElementById("register")
const popUp = document.getElementById("popUp")
const close = document.getElementById("close")
const container = document.getElementById("container")
const statsPopUp = document.getElementById("statsPopUp")
const statsPopUp2 = document.getElementById("statsPopUp2")
const statsPopUp3 = document.getElementById("statsPopUp3")
const statsPopUp4 = document.getElementById("statsPopUp4")
const close2 = document.getElementById("close2")
const close3 = document.getElementById("close3")
const close4 = document.getElementById("close4")
const close5 = document.getElementById("close5")
const cod = document.getElementById("cod")
const free = document.getElementById("free")
const pubg = document.getElementById("pubg")
const csgo = document.getElementById("csgo")
const codDate = document.getElementById("codDate")
const csgoDate = document.getElementById("csgoDate")
const pubgDate = document.getElementById("pubgDate")
const freeDate = document.getElementById("freeDate")
const pcod = document.getElementById("pcod")
const pfree = document.getElementById("pfree")
const ppubg = document.getElementById("ppubg")
const pcsgo = document.getElementById("pcsgo")



function openClose(e,c,v){
e.addEventListener("click",()=>{
    v.style.display="block";
})

c.addEventListener("click",()=>{
        v.style.display="none";
    })

}
function openclose(e,c){
e.addEventListener("click",()=>{
    c.style.display="flex";
})
c.addEventListener("click",()=>{
    c.style.display="none"
})
}


openClose(register,close,container);
openClose(cod,close2,statsPopUp);
openClose(free,close3,statsPopUp2);
openClose(pubg,close4,statsPopUp3);
openClose(csgo,close5,statsPopUp4);
openclose(codDate,pcod);
openclose(freeDate,pfree);
openclose(pubgDate,ppubg);
openclose(csgoDate,pcsgo);

