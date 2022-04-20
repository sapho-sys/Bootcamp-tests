describe("Testing totalPhoneBill function", function(){
    it("this sums up a total for services that exceed 2 !", function(){
     assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));


    });
    it('this sums up a total for less than 3 services',function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));


    })
});