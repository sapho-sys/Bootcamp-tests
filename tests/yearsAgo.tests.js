describe("Testing yearsAgo function", function(){
    it("this returns the difference in years since the year 1976", function(){
        assert.equal(46, yearsAgo(1976));


    });
    it('this returns the difference in years since the year 2000',function(){
        assert.equal(22, yearsAgo(2000));

    })
    it('this returns the difference in years since the year 2010',function(){
        assert.equal(12, yearsAgo(2010));

    })
});