// ========= IMPORTS ============
import { getSingleElement } from "./api.js";

// ========== FUNCTIONS ==========
//Sustituye los _ por espacios y pone el string en mayúsculas.
function formatProperty(name) {
    let cadena = name.replaceAll("_", " ");
    cadena = cadena.toUpperCase();
    return cadena;
}
//Configura la casilla de elemento.
function setElemento(elemento) {
    document.getElementById("numero-atomico").innerText = elemento.atomic_number;
    document.getElementById("simbolo-elemento").innerText = elemento.symbol;
    document.getElementById("nombre-elemento").innerText = elemento.name;
    document.getElementById("elemento").classList.add(elemento.category);
}

//Configura la ficha
function setFicha(elemento) {
    for (let propiedad in elemento) {
        //No se pone en la ficha los parámetros: id,atomic_number,symbol,name,slug.
        if (!["id", "atomic_number", "symbol", "name", "slug"].includes(propiedad)) {
            let divDat = document.createElement("div");
            divDat.classList.add("elem-dato");
            let divProp = document.createElement("div");
            divProp.classList.add("elem-propiedad");
            let divVal = document.createElement("div");
            divVal.classList.add("elem-valor");
            divProp.innerText = formatProperty(propiedad);
            //Los valores booleanos se marcan con ✔ o ✖
            if (propiedad === "is_synthetic" || propiedad === "is_radioactive") {
                divVal.innerText = elemento[propiedad] ? "✔" : "✖";
            }
            //A los valores cromáticos se les añade un recuadro con el color visible.
            else if (propiedad === "category_color" || propiedad === "cpk_hex_color") {
                let spanCol = document.createElement("span");
                spanCol.innerText = elemento[propiedad];
                divVal.append(spanCol);
                spanCol = document.createElement("span");
                spanCol.classList.add("color-box");
                spanCol.style.backgroundColor = elemento[propiedad];
                divVal.append(spanCol);
            }
            //A category se le filtran los _ para que maquete bien.
            else if (propiedad === "category") {
                divVal.innerText = elemento[propiedad].replaceAll("_", " ");
            }
            //Se añaden grados Kelvin
            else if(propiedad === "boiling_point" || propiedad === "melting_point"){
                divVal.innerText = elemento[propiedad] + " ºK";
            }
            //Se añaden kJ/mol
            else if(propiedad === "ionization_energy" || propiedad === "electron_affinity"){
                divVal.innerText = elemento[propiedad] + " kJ/mol";
            }
            //Se añaden g/cm³
            else if(propiedad === "density"){
                divVal.innerText = elemento[propiedad] + " g/cm³";
            }
            //Se añaden pm
            else if(propiedad === "atomic_radius" || propiedad === "covalent_radius" || propiedad === "van_der_waals_radius"){
                divVal.innerText = elemento[propiedad] + " pm";
            }
            else if(propiedad === "atomic_mass"){
                divVal.innerText = elemento[propiedad] + " uma"
            }
            //Se identa la lista de elementos
            else if(propiedad === "electrons_per_shell"){
                divVal.innerText = elemento[propiedad].join(", ");
            }
            //Tratamiento especial a isótopos ya que es una lista de objetos complejos.
            else if (propiedad === "isotopes") {
                divDat.id = "entrada-isotopos";
                for (let isotopo of elemento[propiedad]) {
                    let fichaIsotopo = document.createElement("div");
                    fichaIsotopo.classList.add("ficha-isotopo")
                    for (let prop in isotopo) {
                        let divIsoDat = document.createElement("div");
                        let divIsoProp = document.createElement("div");
                        let divIsoVal = document.createElement("div");
                        divIsoDat.classList.add("ficha-dato");
                        divIsoProp.classList.add("ficha-propiedad");
                        divIsoVal.classList.add("ficha-valor");
                        divIsoProp.innerText = formatProperty(prop);
                        if (prop === "stable")
                            divIsoVal.innerText = isotopo[prop] ? "✔" : "✖";
                        else
                            divIsoVal.innerText = isotopo[prop];
                        divIsoDat.append(divIsoProp, divIsoVal);
                        fichaIsotopo.append(divIsoDat);
                    }
                    divVal.append(fichaIsotopo);
                }
            } else {
                divVal.innerText = elemento[propiedad];
            }
            divDat.append(divProp, divVal);
            ficha.append(divDat);
        }
    }
}

//Inicializa la página
async function initPage() {
    const ficha = document.getElementById("ficha");
    const url = new URL(window.location.href);
    let id = url.searchParams.get('id');
    const elemento = await getSingleElement(id);
    setElemento(elemento);
    setFicha(elemento);
}

// ========== MAIN ===============
await initPage();