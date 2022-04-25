
describe('Testing Greetings function' , function(){

    it('this should return error message if user enter a number' , function(){
        
        assert.equal(greet('Nkunzi737'), 'Error, Please enter alphabetical characters only!');
    });
    it('this functions greets specific names' , function(){
        
    assert.equal(greet('Sapho'), 'Hello, Sapho');
    assert.equal(greet('Sam'), 'Hello, Sam');
    });



    it('should return error message for blank input' , function(){
        
        assert.equal(greet(''), 'Error, Please enter alphabetical characters only!');
    });
    
    
   
});