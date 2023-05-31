import Lampa from "./Lampa.js";

class Jatekter {
    #db; // int felkapcsolt lámpák száma
    #allapotLISTA = []; 
    #meret; // int játéktér mérete, lámpák száma, meret*meret
    #lepes; // int

    constructor(){
        new Lampa();
        console.log("Jatekter.js elérhető");

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