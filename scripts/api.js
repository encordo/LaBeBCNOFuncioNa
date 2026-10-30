// ===== PARÁMETROS =======
const URL_API = "https://api.periodictableofelements.org/elements/";

// ===== FUNCIONES ========
export async function getAllElements() {
    return await fetch(URL_API)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status}`);
            }
            return res.json();
        });
}

export async function getSingleElement(atomicNumber) {
    return await fetch(URL_API + atomicNumber + "/")
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status}`);
            }
            return res.json();
        });
}

//console.log(await getSingleElement(86));
//console.log(await getAllElements());
