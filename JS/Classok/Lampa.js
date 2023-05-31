class Lampa {
    #allapot;//boolean fel le kapcsolt e
    #id; // int lámpa sorszáma
    #divELEM // html elem

    constructor(id, allapot, szuloELEM){
        console.log("Lampa.js elérhető");

    }
    setAllapot(){
        this.#szinBeallit();
    }
    #szinBeallit(){

    }
    #kattintasTrigger(){
        const esemeny = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default Lampa;