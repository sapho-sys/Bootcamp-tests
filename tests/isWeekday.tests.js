describe("Testing isWeekday function" , function(){
    it("this checks true if its weekday or false if its weekend", function(){
assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Sunday'), false);
assert.equal(isWeekday('Monday'), true);
assert.equal(isWeekday('Tuesday'), true);
assert.equal(isWeekday('Wednesday'), true);
assert.equal(isWeekday('Thursday'), true);
assert.equal(isWeekday('Friday'), true);

    });
});
