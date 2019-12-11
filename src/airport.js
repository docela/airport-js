class Airport {
    constructor() {
        this.landing_strip = []
    }
    land(plane) {
        this.landing_strip.push(plane);
        return `${plane.airline}'s ${plane.name} has just landed.`
    }
}


// -------------------- Planes ---------------------

class Plane {
    constructor(airline, name) {
        this.airline = airline;
        this.name = name;
    }
}
