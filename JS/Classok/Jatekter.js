import Lampa from "./Lampa.js";

class Jatekter {
    #db; // int felkapcsolt lámpák száma
    #allapotLISTA = [false, false, false, false, false, false, false, false, false]; //[false, false, false, false, false, false, false, false, false,]; 
    #meret = 3; // int játéktér mérete, lámpák száma, meret*meret
    #lepes; // int

    constructor() {
        const szuloELEM = $("article .ideJatekter");
        let jatekterNagysaga = this.#meret * this.#meret;


        //console.log("Jatekter.js elérhető");
        for (let szamlalo = 0; szamlalo < jatekterNagysaga; szamlalo++) {
            new Lampa(szamlalo, this.#allapotLISTA[szamlalo], szuloELEM);

        }
        this.#setAllapotLISTA();

    }

    #setAllapotLISTA() {
        this.#allapotLISTA.length = this.#meret * this.#meret;
        //console.log("this.#allapotLISTA hossza: " + this.#allapotLISTA.length);

        let aktAllapot;
        for (let index = 0; index < this.#allapotLISTA.length; index++) {
            let esely = Math.floor((Math.random() * 4) + 1);
            //console.log(esely);

            if (esely == 1) {
                aktAllapot = this.#allapotLISTA[index] = true;
                //console.log("igaz ág:" + aktAllapot);
                //Lampa().setAllapot(aktAllapot);
            } else {
                aktAllapot = this.#allapotLISTA[index] = false;
                //console.log("hamis ág:" + aktAllapot);
                //Lampa().setAllapot(aktAllapot);
            }
            //console.log(this.#allapotLISTA[index]);

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