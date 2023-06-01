class Lampa {
    #allapot = false;
    #id;
    #divELEM;

    constructor(id, allapot, szuloELEM) {
        this.#id = id;
        this.#allapot = allapot;
        szuloELEM.append(`<div class="korELEM"></div>`);
        //console.log("Lampa.js elérhető");

        this.korELEM = $("ideJatekter .korELEM:last-child p");

        this.korELEM.on("click", () => {
            this.#kattintasTrigger();
        })
        this.setAllapot();
    }
    setAllapot() {

        if (this.#allapot) {
            console.log("látszik az igaz álítás!");
            this.#allapot = false;
            this.#szinBeallit();
            let ki = this.#szinBeallit();
            console.log(ki);


        } else if (!this.#allapot) {
            console.log("látszik a hamis álítás!");
            this.#allapot = false;
            this.#szinBeallit();
            let ki = this.#szinBeallit();
            console.log(ki);
        }


    }
    #szinBeallit() {
        if (this.#allapot == true) {
            return $(".korELEM").css(`background-color`, `darkgreen`);

        } else if (!this.#allapot) {
            return $(".korELEM").css(`background-color`, `orange`);
        }

        //return this.korELEM.css(`background-color`, szin);

    }
    #kattintasTrigger() {
        const esemeny = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default Lampa;