import Lampa from "./Lampa.js";

class Jatekter {
    #db; // int felkapcsolt lámpák száma
    #allapotLISTA = [];
    #meret = 9;
    #lepes; // int

    constructor() {
        const szuloELEM = $("article .ideJatekter");


        //console.log("Jatekter.js elérhető");
        for (let szamlalo = 0; szamlalo < this.#meret; szamlalo++) {
            const lampa = new Lampa(szamlalo, this.#allapotLISTA[szamlalo], szuloELEM);
            this.#allapotLISTA.push(lampa);
            this.#init(lampa, szamlalo);
        }
        console.log(this.#allapotLISTA);



        $(window).on("kapcsolas", (event) => {
            console.log(event.detail);
            this.#setAllapotLISTA(event.detail);

            //console.log("RÁ LEHET KATTINTANI");
            this.#lepes++;
        })
    }

    #setAllapotLISTA(lampa) {
        let aktAllapot;
        let eredetiAllapot = lampa.allapot;
        //console.log(eredetiAllapot);
        if (eredetiAllapot != true) {
            aktAllapot = true;
            //console.log(lampa);
            lampa.setAllapot(aktAllapot);
        } else {
            aktAllapot = false;
            lampa.setAllapot(aktAllapot);
        }
    }

    #szomszedokKeresese(id) {
    }

    #init(lampa, szamlalo) {
        //console.log(this.#allapotLISTA);
        let aktAllapot;

        //for (let index = 0; index < this.#meret; index++) {
        let esely = Math.floor((Math.random() * 4) + 1);
        //alapállapot
        if (esely == 1) {
            aktAllapot = true;
            //console.log(lampa);
            lampa.setAllapot(aktAllapot);

            console.log(aktAllapot);
        } else {
            aktAllapot = false;
            lampa.setAllapot(aktAllapot);
        }
        //}
    }

    #ellenorzes() {
        //megnézi hogy hány lámpa ég még
    }
}
export default Jatekter;