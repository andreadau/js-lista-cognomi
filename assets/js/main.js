// Dichiarazione variabile e richiesta cognome
var cognome = prompt("Inserisci Il tuo Cognome");
// Imposizione del cognome di almeno una lettera
while (cognome.length < 1) {
    var cognome = prompt("inserisci un cognome valido")
}
//Trasformazione del cognome per accettare qualsiasi Maiuscola e Minuscola
var cognomeUpper = cognome.charAt(0).toUpperCase() + cognome.slice(1);
// Dichiarazione array cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// Inserimento del nuovo cognome nella lista 
listaCognomi.push(cognomeUpper);
// Ordine alfabetico dell'array
var listaOrdinata = listaCognomi.sort();
// Visualizzazione lista ordinata 
for (var i = 0; i<listaOrdinata.length; i++) {
    var item = listaOrdinata[i];
    var listaContent = document.getElementById("lista").innerHTML;
    document.getElementById("lista").innerHTML = listaContent + "<li>" + item + "</li>";
}
// Visualizzazione Posizione Umana
document.getElementById("posizione").innerHTML = " La tua posizione è: " + (listaCognomi.indexOf(cognomeUpper) + 1);