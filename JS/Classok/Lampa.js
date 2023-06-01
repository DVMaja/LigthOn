class Lampa {
    #allapot = false;
    #id;
    #divELEM;

    constructor(id, allapot, szuloELEM) {
        this.#id = id;
        this.#allapot = allapot;
        szuloELEM.append(`<div class="korELEM"></div>`);
       
        this.korELEM = $(".ideJatekter .korELEM:last-child");
        //console.log(this.korELEM);

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
            //console.log("igaz ágba bemegy");

        } else {
            //console.log("hamis ágba bemegy");
            this.korELEM.css(`background-color`, `orange`);
            this.allapot = false;

        }

        //return this.korELEM.css(`background-color`, szin);

    }
    #kattintasTrigger() {
        console.log("A trigger megy")
        const esemeny = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default Lampa;