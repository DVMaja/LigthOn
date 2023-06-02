import Lampa from "./Lampa.js";

class Jatekter {
    #db;
    #allapotLISTA = [];
    #meret;
    #lepes;
    #jatekterMerete;

    constructor() {
        this.#lepes = 0;
        this.#meret  = 3;
        this.#db = 0;
        const szuloELEM = $("article .ideJatekter");
        this.#jatekterMerete = this.#meret *this.#meret;

        for (let szamlalo = 0; szamlalo < this.#jatekterMerete; szamlalo++) {
            const lampa = new Lampa(szamlalo, this.#allapotLISTA[szamlalo], szuloELEM);
            this.#allapotLISTA.push(lampa);
            this.#init(lampa);
           
        }
        /* console.log("1. lista: ");
        console.log(this.#allapotLISTA); */
        this.#db;
        
        this.#ellenorzes();
        $(window).on("kapcsolas", (event) => {
            console.log(event.detail);
            //this.#allapotLISTA[event.detail] = true;
            //console.log(this.#allapotLISTA[event.detail]);
            if (event.detail.getAllapot() != true) {
                this.#setAllapotLISTA(event.detail);
            }
            
            //this.#szomszedokKeresese(event.detail);
            this.#ellenorzes();
        })
        //this.#szomszedokKeresese();
    }

    #setAllapotLISTA(lampa) {
        let aktAllapot;
        let eredetiAllapot = lampa.allapot;
        //console.log(eredetiAllapot);
        if (eredetiAllapot != true) {
            aktAllapot = true;
            //console.log(lampa);
            lampa.setAllapot(aktAllapot);
            this.#db++;
            
        } else {
            aktAllapot = false;
            this.#db--;
            //console.log("db: " + this.#db);
            lampa.setAllapot(aktAllapot);
        }
    }

    #szomszedokKeresese(id) {
        // meg kell keresni a szomszédjait, a Lámmpa osztáyl segítségével
        console.log(id);
        
        let kattintottElem = id.getId();
        console.log(id.getId());
       
        
        const korulElemLista = [kattintottElem + 1, kattintottElem - 1, kattintottElem + 3, kattintottElem - 3];
        //console.log(korulElemLista[0].getAllapot());
        console.log(korulElemLista);

        for (let db = 0; db < korulElemLista.length; db++) {
            let esely = Math.floor((Math.random() * 10) + 1);
            console.log(korulElemLista[db]);
            console.log(id.getId(korulElemLista[db]));
            //console.log(id.getAllapot());   

          if (esely == 1) {
            id[korulElemLista[db]].setAllapot(false);   
            console.log("egyezik a");
          }
           
        }
    }

    #init(lampa) {
        //console.log(this.#allapotLISTA);
        let aktAllapot;
        let esely = Math.floor((Math.random() * 4) + 1);

        if (esely == 1) {
            aktAllapot = true;
            //console.log(lampa);
            lampa.setAllapot(aktAllapot);
            this.#db++;
            //console.log("69.sor db: " + this.#db);

            //console.log(aktAllapot);
        } else {
            aktAllapot = false;
            lampa.setAllapot(aktAllapot);
        }

    }

    #ellenorzes() {
        const eredmeny = $(".leLampaSzamlalo");
        const listaMerete = this.#allapotLISTA.length;

        //console.log(this.#db);
        eredmeny.empty();
        eredmeny.append(`<p>${this.#db}</p>`);
        if (this.#db == listaMerete) {
            eredmeny.append(`<p>Hurrá, meghosszabítottad a Föld életét!</p>`);
        }

    }
}
export default Jatekter;