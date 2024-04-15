const bicycles = [
    { name: "Bella", weight: 7.2 },
    { name: "veloce", weight: 6.9 },
    { name: "Pantani", weight: 7.5 },
    { name: "Doping", weight: 6.8 }
];

let lightestBike = bicycles[0];

const lightestBikeReturn = findLightestBike(bicycles);

const { name, weight } = lightestBikeReturn;

// Stampa
console.log(`La bici più Leggera è ${name} e pesa ${weight} kg.`);
 