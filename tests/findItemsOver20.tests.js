describe("Testing findItemsOver20 function",function(){
    it("this functions checks for items in the list that are greater than 20!", function(){
        assert.deepEqual(results, findItemsOver20(itemList));
})
    it('this functions checks for items in the list that are greater than 20! from itemList2 & 3',function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));
        assert.deepEqual(results3, findItemsOver20(itemList3));
    

    })
})

