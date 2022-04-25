describe("Testing countAllfromPaarl function", function(){
    it("this function counts and returns 3 for plates from Paarl!", function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

    


    });
    it("this function will return 2 for registration plates from Paarl", function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })
    it("this function will return 0 if theres are no plates for blank searches", function(){
        assert.equal(0, countAllPaarl(''));
    })
});