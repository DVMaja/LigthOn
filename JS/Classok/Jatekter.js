import Lampa from "./Lampa.js";

class Jatekter {
    #db; // int felkapcsolt lámpák száma
    #allapotLISTA = []; //[false, false, false, false, false, false, false, false, false,]; 
    #meret = 9; // int játéktér mérete, lámpák száma, meret*meret
    #lepes; // int

    constructor() {
        const szuloELEM = $("article .ideJatekter");

        //console.log("Jatekter.js elérhető");
        for (let szamlalo = 0; szamlalo < this.#meret; szamlalo++) {
            new Lampa(szamlalo, this.#allapotLISTA[szamlalo], szuloELEM);

        }

    }

    #setAllapotLISTA() {
        this.#allapotLISTA.length = this.#meret * this.#meret;
        for (let index = 0; index < this.#allapotLISTA.length; index++) {
            let esely = Math.floor((Math.random() * 4) + 1);
            if (esely = 1) {
                this.#allapotLISTA[index] = true;
                //Lampa.setAllapot();
            } else {
                this.#allapotLISTA[index] = false;
                //itt van lekapcsolva
                //Lampa.setAllapot();
            }
            console.log(this.#allapotLISTA[index]);

        }
        return this.#allapotLISTA;
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