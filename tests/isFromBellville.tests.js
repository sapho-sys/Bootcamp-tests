
describe('Testing isFromBellville function' , function(){
    it('returns true for plates from  Bellville!' , function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

});