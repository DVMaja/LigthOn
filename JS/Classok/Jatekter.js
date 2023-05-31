import Lampa from "./Lampa.js";

class Jatekter {
    #db; // int felkapcsolt lámpák száma
    #allapotLISTA = []; 
    #meret = 6  ; // int játéktér mérete, lámpák száma, meret*meret
    #lepes; // int

    constructor(){
        const szuloELEM = $("article .ideJatekter");
        
        console.log("Jatekter.js elérhető");
        for (let szamlalo = 0; szamlalo < this.#meret; szamlalo++) {
            new Lampa(szamlalo, false, szuloELEM);
            
        }

    }

    #setAllapotLISTA(){

    }

    #szomszedokKeresese(id){

    }

    #init(){
        //új játéktér
    }

    #ellenorzes(){
        //megnézi hogy hány lámpa ég még
    }
}
export default Jatekter;