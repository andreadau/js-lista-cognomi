// dichiarazione variabile e richiesta cognome
var cognome = prompt("Inserisci Il tuo Cognome");
// dichiarazione array cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// Inserimento del nuovo cognome nella lista 
listaCognomi.push(cognome);
// Ordine alfabetico dell'array
listaOrdinata = listaCognomi.sort();
console.log(listaOrdinata);