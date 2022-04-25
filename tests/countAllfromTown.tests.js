
describe("Testing countAllfromTown function", function(){
    it("this will return 3 for plates from Stellenbosch!",function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
        
       
        
    });
    it('this will return 1 for a plate from Kuilsriver',function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromKuilsriver should contains
        assert.equal(fromKuilsriver, 1)

    });


        it('this will return 0 for blank request',function(){
            var fromKuilsriver = countAllFromTown('CA 124,CY 567,CY 345,CJ 456,CA 341','CF');
            //fromKuilsriver should contains
            assert.equal(fromKuilsriver, 0)
        });
            
    

    
});
