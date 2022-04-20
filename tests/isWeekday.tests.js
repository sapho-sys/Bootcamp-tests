describe("Testing isWeekday function" , function(){
    it("this checks true if its a weekday", function(){

assert.equal(isWeekday('Monday'), true);
assert.equal(isWeekday('Tuesday'), true);
assert.equal(isWeekday('Wednesday'), true);
assert.equal(isWeekday('Thursday'), true);
assert.equal(isWeekday('Friday'), true);

    });
    it('this checks false for weekends',function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);

    })
});
