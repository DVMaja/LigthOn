import Jatekter from "./Classok/Jatekter.js";

$(function () {
    new Jatekter();
    //console.log("Main csatolva");
    const gombELEM = $(".ujJatek");

    gombELEM.on("click", () => {
        console.log("Rá lehet kattintani a gombra");
        const torlendo = $(".ideJatekter");
        torlendo.empty();
        new Jatekter();
    })
})