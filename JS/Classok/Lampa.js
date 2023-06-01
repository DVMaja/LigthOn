class Lampa {
    #allapot;
    #id;
    #divELEM;

    constructor(id, allapot, szuloELEM) {
        this.#id = id;
        this.#allapot = allapot;
        szuloELEM.append(`<div class="korELEM"></div>`);
        this.korELEM = $(".ideJatekter .korELEM:last-child");

        this.korELEM.on("click", () => {
            console.log("A kattintást érzékeli")
            this.#kattintasTrigger();
        })
        this.setAllapot(this.#allapot);
    }

    setAllapot(aktAllapot) {
        this.#allapot = aktAllapot;
        this.#szinBeallit();
    }

    #szinBeallit() {
        if (this.#allapot == true) {
            this.korELEM.css(`background-color`, `darkgreen`);
            this.#allapot = true;

        } else {
            this.korELEM.css(`background-color`, `orange`);
            this.allapot = false;
        }
    }

    getAllapot() {
        console.log(this.#allapot);
        return this.#allapot;
    }
    
    getId() {
        return this.#id;
    }

    #kattintasTrigger() {
        console.log("A trigger megy")
        const esemeny = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default Lampa;