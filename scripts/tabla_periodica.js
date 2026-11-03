// ========= IMPORTS ==========
import { getAllElements } from './api.js';
// ========= PARÁMETROS =======
let elementos;

// ========= FUNCIONES ========
function initPage() {
    for (let elemento of elementos) {
        //Casilla elemento
        let divElemento = document.createElement("div");
        let divComponente;
        divElemento.id = "elemento-" + elemento.atomic_number;
        divElemento.classList.add("elemento", elemento.category);
        //Número atómico
        divComponente = document.createElement("div");
        divComponente.classList.add("numero-atomico");
        divComponente.innerText = elemento.atomic_number;
        divElemento.append(divComponente);
        //Símbolo
        divComponente = document.createElement("div");
        divComponente.classList.add("simbolo-elemento");
        divComponente.innerText = elemento.symbol;
        divElemento.append(divComponente);
        //Nombre
        divComponente = document.createElement("div");
        divComponente.classList.add("nombre-elemento");
        divComponente.innerText = elemento.name;
        divElemento.append(divComponente);
        //Evento
        divElemento.addEventListener("click",function(){
            //Llamada a la página de ficha individual.
            window.open("./ficha_elemento.html?id="+elemento.atomic_number,"_self");
        })
        //Asignación a la tabla principal o al bloque f según corresponda
        if ((elemento.atomic_number >= 57 && elemento.atomic_number <= 71) ||
            (elemento.atomic_number >= 89 && elemento.atomic_number <= 103)) {
            document.getElementById("tabla-periodica-bloque-f").append(divElemento);
        } else {
            document.getElementById("tabla-periodica").append(divElemento);
        }

    }
}
// ========== MAIN ============
elementos = await getAllElements();
initPage();