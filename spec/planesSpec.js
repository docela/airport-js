describe("Plane", function(){
    var plane

    beforeEach(function () {
        plane = new Plane();
    });

    it("Plane is an object", function () {
        expect(plane).toBeInstanceOf(Object);
    });
})