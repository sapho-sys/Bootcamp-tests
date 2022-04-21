
describe('Testing Greetings function' , function(){
    it('this functions greets specific names!' , function(){
        
    assert.equal(greet('Bob'), 'Hello, Bob');
    assert.equal(greet('Sam'), 'Hello, Sam');
    });
    
    it("this function should confirm the surname",function(){
        assert.equal(ask('Nkunzi'), 'Is your surname, Nkunzi');
    })


    it('this functions greets surnames!' , function(){
        
        assert.equal(greet('Nkunzi'), 'Hello, Nkunzi');
    });
   
});