// ========= IMPORTS ============
import { getSingleElement } from "./api.js";

// ========== FUNCTIONS ==========
async function initPage() {
    const ficha = document.getElementById("ficha");
    const url = new URL(window.location.href);
    let id = url.searchParams.get('id');
    const elemento = await getSingleElement(id);
    for (let propiedad in elemento) {
        let divProp = document.createElement("div");
        if (propiedad === "isotopes") {
            for(let isotopo of elemento[propiedad]){
                let ul = document.createElement("ul");
                for(let prop in isotopo){
                    let li =document.createElement("li");
                    li.innerHTML = `<b>${prop}:</b> ${isotopo[prop]}`;
                    ul.append(li);
                }
                divProp.append(ul);
            }
        } else
            divProp.innerHTML = `<b>${propiedad}:</b> ${elemento[propiedad]}`;
        ficha.append(divProp);
    }
}

// ========== MAIN ===============
await initPage();