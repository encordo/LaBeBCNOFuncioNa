// ========= IMPORTS ============
import { getSingleElement } from "./api.js";

// ========== FUNCTIONS ==========
//Sustituye los _ por espacios y pone el string en mayúsculas.
function formatProperty(name){
    let cadena = name.replaceAll("_", " ");
    cadena = cadena.toUpperCase();
    return cadena;
}

async function initPage() {
    const ficha = document.getElementById("ficha");
    const url = new URL(window.location.href);
    let id = url.searchParams.get('id');
    const elemento = await getSingleElement(id);
    for (let propiedad in elemento) {
        let divDat = document.createElement("div");
        divDat.classList.add("elem-dato");
        let divProp = document.createElement("div");
        divProp.classList.add("elem-propiedad");
        let divVal = document.createElement("div");
        divVal.classList.add("elem-valor");
        divProp.innerText = formatProperty(propiedad);
        if(propiedad === "is_synthetic" || propiedad === "is_radioactive"){
            divVal.innerText = elemento[propiedad]? "✔" : "✖" ;
        }
        else if(propiedad === "category_color" || propiedad === "cpk_hex_color"){
            let spanCol = document.createElement("span");
            spanCol.innerText = elemento[propiedad];
            divVal.append(spanCol);
            spanCol = document.createElement("span");
            spanCol.classList.add("color-box");
            spanCol.style.backgroundColor = elemento[propiedad];
            divVal.append(spanCol);
        }
        else if (propiedad === "isotopes") {
            divVal.id = "casilla-isotopos";
            for(let isotopo of elemento[propiedad]){
                let fichaIsotopo = document.createElement("div");
                fichaIsotopo.classList.add("ficha-isotopo")
                for(let prop in isotopo){
                    let divIsoDat = document.createElement("div");
                    let divIsoProp = document.createElement("div");
                    let divIsoVal = document.createElement("div");
                    divIsoDat.classList.add("ficha-dato");
                    divIsoProp.classList.add("ficha-propiedad");
                    divIsoVal.classList.add("ficha-valor");
                    divIsoProp.innerText = formatProperty(prop);
                    divIsoVal.innerText = isotopo[prop];
                    divIsoDat.append(divIsoProp,divIsoVal);
                    fichaIsotopo.append(divIsoDat);
                }
                divVal.append(fichaIsotopo);
            }
        } else{
            divVal.innerText = elemento[propiedad];
            
        }
        divDat.append(divProp,divVal);
        ficha.append(divDat);
    }
}

// ========== MAIN ===============
await initPage();