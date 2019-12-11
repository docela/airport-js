describe("Airport", function () {
    var airport

    beforeEach(function () {
        airport = new Airport();
    });

    it("Airport is an object", function () {
        expect(airport).toBeInstanceOf(Object);
    });

    it("Airport lands plane", function() {
        plane = new Plane("BA", "One");
        airport.land(plane);
        expect(airport.landing_strip).toContain(plane);
    });
});


// --------------------- Planes ---------------------

describe("Plane", function(){
    var plane

    beforeEach(function () {
        plane = new Plane();
    });

    it("Plane is an object", function () {
        expect(plane).toBeInstanceOf(Object);
    });
})