describe("Testing totalPhoneBill function", function(){
    it("this sums up a bill for 2 phonecall's and 3 sms's!", function(){
     assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));


    });
    it('this sums up a bill for 1 sms and 1 phonecall',function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
  


    })
    it("this sums up the bill for 2 sms's",function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));

    })
});