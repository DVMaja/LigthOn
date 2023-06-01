class Lampa {
    #allapot;//boolean fel le kapcsolt e zold vagy sarga
    #id; // int lámpa sorszáma
    #divELEM // html elem

    constructor(id, allapot, szuloELEM) {
        this.#id = id;
        this.#allapot = allapot;
        szuloELEM.append(`<div class="korELEM"></span></div>`);
        //console.log("Lampa.js elérhető");

        this.korELEM = $("ideJatekter .korELEM:last-child p");

        this.korELEM.on("click", () => {
            this.#kattintasTrigger;
        })
        this.setAllapot();
    }
    setAllapot() {
        if (false) {
            //this.korELEM.css(`background-color`, `orange`);
            console.log("látszik a hamis álítás!");
            this.#szinBeallit("orange");
            console.log(this.#szinBeallit);
        } else if (true) {
            //this.korELEM.css(`background-color`, `darkgreen`);  
            let beallitandoSzin = "darkgreen";
            this.#szinBeallit(beallitandoSzin);
            console.log("látszik az igaz álítás!");
            console.log(this.#szinBeallit);
        }

    }
    #szinBeallit(szin) {    
        //meg nem éri el a megadott szint    
        return this.korELEM.css(`background-color`, szin);

    }
    #kattintasTrigger() {
        const esemeny = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default Lampa;