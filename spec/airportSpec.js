describe("Airport", function () {
    var airport

    beforeEach(function () {
        airport = new Airport();
    });

    it("Airport is an object", function () {
        expect(airport).toBeInstanceOf(Object);
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