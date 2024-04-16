const cars = [
    { marca: "Simone", modello: "500", alimentazione: "benzina" },
    { marca: "Walter", modello: "Golf", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Musk", alimentazione: "elettrico" },
    { marca: "Olga", modello: "Ypsilon", alimentazione: "metano" }
];


const autoRag = {
    benzina: cars.filter(auto => auto.alimentazione === "benzina"),
    diesel: cars.filter(auto => auto.alimentazione === "diesel"),
    altre: cars.filter(auto => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel")
};

// Stampa 
console.log("Auto divide per alimentazione:", autoRag, typeof autoRag);