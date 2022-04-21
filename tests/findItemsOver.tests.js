describe("Testing findItemsOver function",function(){
    it("this functions return a list that contain less or equal to 20 items from itemList!", function(){
        assert.deepEqual(results, findItemsOver(itemList, 20));

    })
    it('this functions return a list that contain less or equal to 20 items from itemList2!',function(){
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
        


    })
    it('this functions return a list that contain less or equal to 20 items from itemList3!',function(){
        
        assert.deepEqual(results3, findItemsOver(itemList3, 20));


    })
})

  