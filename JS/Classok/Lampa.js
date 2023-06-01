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

        if (this.#allapot == true) {
            console.log("látszik az igaz álítás!");  
            this.#allapot = false; 
            this.#szinBeallit();
            let ki = this.#szinBeallit();
            console.log(ki);            
            

        } else if (this.#allapot == false) {
            console.log("látszik a hamis álítás!");
            this.#allapot = false;
            this.#szinBeallit();
            let ki = this.#szinBeallit();
            console.log(ki);          
        }        
        

    }
    #szinBeallit() {
        if (true) {
            return $("korELEM").css(`background-color`, `darkgreen`);  

        } else if (false) {
            
            return $("korELEM").css(`background-color`, `orange`); 
        }

        //return this.korELEM.css(`background-color`, szin);

    }
    #kattintasTrigger() {
        const esemeny = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default Lampa;