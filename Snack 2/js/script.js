function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const squadre = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];

squadre.forEach(squadra => {
    squadra.puntiFatti = randomInt(0, 100);
    squadra.falliSubiti = randomInt(0, 50);
    // console.log(`Punti fatti da ${squadra.nome}: ${squadra.puntiFatti}`);
    // console.log(`Falli subiti da ${squadra.nome}: ${squadra.falliSubiti}`);
});

