describe("Testing the countRegNumber function",function(){
    it("this function counts and return 3 number of plates !",function(){
var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3);


    })
    it('this will return  2 plate number',function(){
        var regCount = countRegNumber('CA 182736,CJ 813438')
        assert.equal(regCount, 2);


    })
    it('this will return only 1 plate number',function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);


    })
})