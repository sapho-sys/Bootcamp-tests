describe("Testing the mostProfitableDepartment function",function(){
    it('this will return OUTDOOR as the most profitable department in saleData',function(){
      assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");


    })
    it('this will return ELECTRONICS as the most profitable department in saleData2',function(){
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");



    })
    it('this will return CARPENTRY as the most profitable department in saleData3',function(){
        assert.equal('carpentry', mostProfitableDepartment(salesData3), "Most profitable department is 'carpentry' for dataset 3");



    })
})

