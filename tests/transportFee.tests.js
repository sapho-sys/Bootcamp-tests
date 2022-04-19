describe("Testing the TransportFee function",function(){
    it("this returns the fare to be paid for a specific time of the day!",function(){
assert.equal(transportFee('morning'), 'R20');

assert.equal(transportFee('afternoon'), 'R10');

assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');



    })
})