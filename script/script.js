// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

// dichiarazione variabili 
    // array lista spesa
const array = ["sale", "pepe", "aglio", "olio"];

const btn = document.getElementById("btn");
const lista = document.getElementById("lista");


// ciclo per passare in rassegna gli elementi della lista 
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
    
// }

// ciclo while per passare in rassegna gli elementi della lista
let index = 0;

while (index < array.length) {
// devo insrire gli elementi nel doom 
// richiamiamo il conainer dove inserire gli elementi 
let iteam = array[index];

let ul = document.getElementById ("ul");
// creiamo il list iteam 
let li = document.createElement ("li");
 li.innerHTML =`
<div class="input-group mb-3 me-3">
    <div class="input-group-text">
        <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
    </div>
      <input type="text" class="form-control" aria-label="Text input with checkbox" value="${iteam}">
 </div>`;

 // inseriamo li in ul 
 ul.append (li);

 // fine ciclo    
 index++;
  }
    



btn.addEventListener ("click",
function () {
    array.push (lista.value);
    ul.innerHTML = "";

    // ciclo while per passare in rassegna gli elementi della lista
    let index = 0;

    while (index < array.length) {
    // devo insrire gli elementi nel doom 
    // richiamiamo il conainer dove inserire gli elementi 
    let iteam = array[index];

    let ul = document.getElementById ("ul");
    // creiamo il list iteam 
    let li = document.createElement ("li");
    li.innerHTML =`
    <div class="input-group mb-3 me-3">
        <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
        </div>
         <input type="text" class="form-control" aria-label="Text input with checkbox" value="${iteam}">
    </div>`;

    // inseriamo li in ul 
    ul.append (li);

    // fine ciclo    
    index++;
    }
    

})
