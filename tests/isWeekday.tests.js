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
    it("this will test for lowercase inputs",function(){
        assert.equal(isWeekday('monday'), true);
        assert.equal(isWeekday('tuesday'), true);
        assert.equal(isWeekday('wednesday'), true);
        assert.equal(isWeekday('thursday'), true);
        assert.equal(isWeekday('friday'), true);
        assert.equal(isWeekday('saturday'), false);
        assert.equal(isWeekday('sunday'), false);



    })
});
