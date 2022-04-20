describe("Testing the countRegNumber function",function(){
    it("this function counts the number of plates !",function(){
var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3);


    })
    it('this will return only one plate number',function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);


    })
})