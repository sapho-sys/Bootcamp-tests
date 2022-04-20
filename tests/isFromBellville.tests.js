
describe('Testing isFromBellville function' , function(){
    it('returns true for plates from  Bellville!' , function(){
        assert.equal(isFromBellville('CY 123'), true);
        
    });
    it('returns false if number plate is from elsewhere',function(){
        assert.equal(isFromBellville('CJ 123'), false);

    })

});