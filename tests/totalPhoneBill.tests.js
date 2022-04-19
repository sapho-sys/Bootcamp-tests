describe("Testing totalPhoneBill function", function(){
    it("this test was successful !", function(){
assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
assert.equal('R3.40', totalPhoneBill('call, sms'));
assert.equal('R1.30', totalPhoneBill('sms, sms'));


    });
});