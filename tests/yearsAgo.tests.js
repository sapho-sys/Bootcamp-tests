describe("Testing yearsAgo function", function(){
    it("this test for diffrenece in years from a specific date to now!", function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

    });
});