
describe("Testing countAllfromTown function", function(){
    it("this checks for plates from Stellenbosch!",function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
        
       
        
    });
    it('this checks for plates from Kuilsriver',function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromKuilsriver should contains
        assert.equal(fromKuilsriver, 1)
        

    })
});
