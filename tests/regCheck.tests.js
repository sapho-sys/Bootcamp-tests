describe("Testing Registration function", function(){
    it("this will return true for plates from Gauteng & Lesotho", function(){
assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

assert.equal(regCheck('5566 L', 'L'), true);
assert.equal(regCheck('5566 L', 'M'), false);


    })
    it('this will return true if there are plates from Eastern Cape & Mpumalanga',function(){
assert.equal(regCheck('ERT 123 EC', 'EC'), true);
assert.equal(regCheck('ERT 123 EC', 'GP'), false);

assert.equal(regCheck('FGT 123 MP', 'MP'), true);
assert.equal(regCheck('FGT 123 MM', 'MP'), false);


    })
})