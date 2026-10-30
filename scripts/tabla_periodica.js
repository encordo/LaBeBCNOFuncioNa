// ========= IMPORTS ==========
import data from '../json/elementos.json' with { type: 'json' };
// ========= PARÁMETROS =======
//const elementos = [];

// ========= FUNCIONES ========
function initPage() {
    for (let elemento of data) {
        //Casilla elemento
        let divElemento = document.createElement("div");
        let divComponente;
        divElemento.id = "elemento-" + elemento.numero_atomico;
        divElemento.classList.add("elemento");
        //Número atómico
        divComponente = document.createElement("div");
        divComponente.classList.add("numero-atomico");
        divComponente.innerText = elemento.numero_atomico;
        divElemento.append(divComponente);
        //Símbolo
        divComponente = document.createElement("div");
        divComponente.classList.add("simbolo-elemento");
        divComponente.innerText = elemento.simbolo;
        divElemento.append(divComponente);
        //Nombre
        divComponente = document.createElement("div");
        divComponente.classList.add("nombre-elemento");
        divComponente.innerText = elemento.nombre;
        divElemento.append(divComponente);
        //Evento
        divElemento.addEventListener("click",function(){
            //Llamada a la página de ficha individual.
            alert(`¡Hola! Soy el ${elemento.nombre}`)
        })
        //Asignación a la tabla principal o al bloque f según corresponda
        if ((elemento.numero_atomico >= 57 && elemento.numero_atomico <= 71) ||
            (elemento.numero_atomico >= 89 && elemento.numero_atomico <= 103)) {
            document.getElementById("tabla-periodica-bloque-f").append(divElemento);
        } else {
            document.getElementById("tabla-periodica").append(divElemento);
        }

    }
}
// ========== MAIN ============
initPage();