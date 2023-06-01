import Lampa from "./Lampa.js";

class Jatekter {
    #db; // int felkapcsolt lámpák száma
    #allapotLISTA = []; //[false, false, false, false, false, false, false, false, false,]; 
    #meret = 3; // int játéktér mérete, lámpák száma, meret*meret
    #lepes; // int

    constructor() {
        const szuloELEM = $("article .ideJatekter");
        let jatekterNagysaga = this.#meret * this.#meret;


        //console.log("Jatekter.js elérhető");
        for (let szamlalo = 0; szamlalo < jatekterNagysaga; szamlalo++) {
            const lampa = new Lampa(szamlalo, this.#allapotLISTA[szamlalo], szuloELEM);
            this.#allapotLISTA.push(lampa);

        }
        //this.#setAllapotLISTA(lampa);

        $(window).on("kapcsolas", (event) => {
            this.#setAllapotLISTA();

        })


    }

    #setAllapotLISTA() {
        this.#allapotLISTA.length = this.#meret * this.#meret;
        //console.log("this.#allapotLISTA hossza: " + this.#allapotLISTA.length);

        let aktAllapot;
        for (let index = 0; index < this.#allapotLISTA.length; index++) {
            let esely = Math.floor((Math.random() * 4) + 1);


            if (esely == 1) {
                aktAllapot = true;
                //console.log("igaz ág:" + aktAllapot);
                lampa.setAllapot(aktAllapot);
            } else {
                aktAllapot = false;
                //console.log("hamis ág:" + aktAllapot);
                lampa.setAllapot(aktAllapot);
            }

        }
        //return this.#allapotLISTA;
    }

    #szomszedokKeresese(id) {


    }

    #init() {
        //új játéktér

    }

    #ellenorzes() {
        //megnézi hogy hány lámpa ég még
    }
}
export default Jatekter;