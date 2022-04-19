
describe('Testing Greetings function' , function(){
    it('this functions greets specific names!' , function(){
        
    assert.equal(greet('Bob'), 'Hello, Bob');
    assert.equal(greet('Sam'), 'Hello, Sam');
    });

});