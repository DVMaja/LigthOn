class Lampa {
    #allapot;//boolean fel le kapcsolt e zold vagy sarga
    #id; // int lámpa sorszáma
    #divELEM // html elem

    constructor(id, allapot, szuloELEM) {
        this.#id = id;
        this.#allapot = allapot;
        szuloELEM.append(`<div class="korELEM"><span class="dot"></span></div>`);
        //console.log("Lampa.js elérhető");

        this.korELEM = $("ideJatekter .korELEM:last-child p");

        this.korELEM.on("click", () => {
            this.#kattintasTrigger;
        })
    }
    setAllapot() {
        if (zold) {
            //sárgára állítja át
            this.#szinBeallit();
        } else if (sarga) {
            this.#szinBeallit();
            //zöldre állítja át

        }

    }
    #szinBeallit() {


    }
    #kattintasTrigger() {
        const esemeny = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default Lampa;