function findLightestBike(bicycles) {
    for (let i = 1; i < bicycles.length; i++) {
        if (bicycles[i].weight < lightestBike.weight) {
            lightestBike = bicycles[i];
        }
    }

    return lightestBike;
}
