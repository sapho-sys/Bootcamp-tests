
describe('Testing isFromBellville function' , function(){
    it('This test was successful !' , function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

});