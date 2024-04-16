const persone = [
    { nome: "Mario", cognome: "Rossi", età: 25 },
    { nome: "Luca", cognome: "Bianchi", età: 16 },
    { nome: "Sara", cognome: "Verdi", età: 20 },
    { nome: "Giulia", cognome: "Neri", età: 17 }
];

// Creazione di un array vuoto
const frasiInfo = [];

// Ciclo for per scorrere l'array delle persone
for (let i = 0; i < persone.length; i++) {
    const persona = persone[i];
    const VerificaGuida = persona.età >= 18 ? "può guidare." : "non può guidare.";
    const frase = `${persona.nome} ${persona.cognome} ${VerificaGuida}`;
    // Aggiunta della frase all'array che ho inizializzato come vuoto
    frasiInfo.push(frase); 
}

// Stampa
console.log(frasiInfo);