// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

// dichiarazione variabili 
    // array lista spesa
const array = [];

const btn = document.getElementById("btn");

// ciclo per passare in rassegna gli elementi della lista 
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
    
// }




btn.addEventListener ("click",
function () {
    const lista = document.getElementById("lista");
    array.push (lista.value);
    

    // ciclo while per passare in rassegna gli elementi della lista
    let index = 0;
    while (index < array.length) {
    // devo insrire gli elementi nel doom 
    // richiamiamo il conainer dove inserire gli elementi 
    console.log(array[index]);
    let ul = document.getElementById ("ul");
    // creiamo il list iteam 
    let li = document.createElement ("li");
    li.innerHTML =( array[index]);

    // inseriamo li in ul 
    ul.append (li);

    // fine ciclo    
    index++;
    }
    

})
