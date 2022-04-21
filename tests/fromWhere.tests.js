describe("Testing fromWhere function", function(){
    it("this function return 3 plates from Stellenbosch !", function(){

var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])




    });
    it('return empty array for Kuilsriver',function(){
        var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
        assert.deepEqual(fromKuilsriver, []);


    })

    it('this function should return 1 plate from Brackenfell', function(){
        var fromBrackenfell = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
        assert.deepEqual(fromBrackenfell, ['CJ 456']);


    })
});