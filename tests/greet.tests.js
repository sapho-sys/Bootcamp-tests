
describe('Testing Greetings function' , function(){
    it('The test was successful !' , function(){
        
    assert.equal(greet('Bob'), 'Hello, Bob');
    assert.equal(greet('Sam'), 'Hello, Sam');
    });

});