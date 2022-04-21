describe("Testing the TransportFee function",function(){
    it("this returns the fare to be paid for a morning shift!",function(){
       assert.equal(transportFee('morning'), 'R20');
    })

    it('this will return a free journey for the afternoon shift!',function(){
        assert.equal(transportFee('afternoon'), 'R10');
    })



    it('this will return a free journey for the nightshift!',function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift fee');
    })
})