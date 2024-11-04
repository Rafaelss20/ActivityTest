import { find } from "cypress/types/lodash";
// import { findAll, insertMany } from "./db";
import { product } from "./model/product";


export function getproducts(){
    const products: Array<product> = [
        { id: "MONITOR21", value: 600,img: "MONITOR21.png", name: "Monitor 21\"", description: "Monitor de 21 polegadas - 60Hz - HDMI/VGA" },
        { id: "MONITOR24", value: 1.100,img: "MONITOR24.png", name: "Monitor 24\"", description: "Monitor de 24 polegadas - Borda infinita - 144Hz - HDMI/DisplayPort" },
        { id: "MONITORCURVO", value: 3.500,img: "MONITORCURVO.png", name: "Monitor 29\" Curvo", description: "Monitor de 29 poelgadas - Curvo - Borna infinita - 75Hz - HDMI/DisplayPort" },
        { id: "MOUSE1A", value: 350,img: "MOUSE1A.png", name: "Mouse Gamer RedDragon", description: "Mouse Gamer RedDragon - 800dpi~3500dpi - RGB" },
        { id: "MOUSE2A", value: 70,img: "MOUSE2A.png", name: "Mouse Simples", description: "Mouse Simples Escritório - 800dpi" },
        { id: "MOUSE3A", value: 110,img: "MOUSE3A.png", name: "Mouse S/ Fio", description: "Mouse Sem Fio Escritório - 800dpi" },
        { id: "TECLADOGAMER", value: 350,img: "TECLADOGAMER.png", name: "Teclado Gamer", description: "Teclado Gamer - Black Switch - RGB" },
        { id: "TECLADOSIMPLES", value: 80,img: "TECLADOSIMPLES.png", name: "Teclado Simples", description: "Tecado Simples Escritório - ABNT2" },
        { id: "TECLADOSFIO", value: 150,img: "TECLADOSFIO.png", name: "Teclado S/ Fio", description: "Tecado Sem Fio Escritório - ABNT2" },
        { id: "HEADFONEBEN10", value: 40,img: "HEADFONEBEN10.png", name: "HeadPhone Simples", description: "HeadPhone Simples - 1 Saída P3" },
        { id: "HEADFONEGAMER", value: 180,img: "HEADFONEGAMER.png", name: "HeadPhone Gamer", description: "HeadPhone Gamer - Orelhas de Gato - 2 Saídas P2" },
        { id: "HEADFONEQUANTION", value: 480,img: "HEADFONEQUANTION.png", name: "HeadPhone Quantion JBL", description: "HeadPhone Quantion JBL - Função Microfone - Volume interno" }
    ]
    // insertMany("Products", products);
    // const result = findAll("Products")
    return products
}

