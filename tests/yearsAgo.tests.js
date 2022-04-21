describe("Testing yearsAgo function", function(){
    it("this returns the difference in years since the year 1976", function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));


    });
    it('this returns the difference in years since the year 2000',function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

    })
    it('this returns the difference in years since the year 2010',function(){
        assert.equal((new Date().getFullYear() - 2010), yearsAgo(2010));

    })
});