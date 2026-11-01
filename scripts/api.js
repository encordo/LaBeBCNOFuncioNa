// ==== IMPORTS =======
import {Element} from "../classes/Element.js";
import {Isotope} from "../classes/Isotope.js";

// ===== PARÁMETROS =======
const URL_API = "https://api.periodictableofelements.org/elements/";

// ===== FUNCIONES ========
export async function getAllElements() {
    return await fetch(URL_API)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status}`);
            }
            //return res.json().results.map(e=>new Elemento(e));
            return res.json().map(e=>new Element(e));
        });
}

export async function getSingleElement(atomicNumber) {
    return await fetch(URL_API + atomicNumber + "/")
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status}`);
            }
            return new Element(res.json());
        });
}

//console.log(await getSingleElement(86));
//console.log(await getAllElements());
