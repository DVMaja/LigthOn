class Lampa {
    #allapot;//boolean fel le kapcsolt e
    #id; // int lámpa sorszáma
    #divELEM // html elem

    constructor(id, allapot, szuloELEM) {
        this.#id = id;
        this.#allapot = allapot;
        szuloELEM.append(`<div class="korELEM"></div>`);
        console.log("Lampa.js elérhető");

    }
    setAllapot() {
        this.#szinBeallit();
    }
    #szinBeallit() {

    }
    #kattintasTrigger() {
        const esemeny = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default Lampa;