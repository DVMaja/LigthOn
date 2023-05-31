import Jatekter from "./Classok/Jatekter.js";

$(function () {
    new Jatekter();
    console.log("Main csatolva");
    const gombELEM = $("article gomb");
    //console.log(gombELEM);
    gombELEM.on("click", () =>{
        console.log("Rá lehet kattintani a gombra");
        //ezzel folytat
    })
})