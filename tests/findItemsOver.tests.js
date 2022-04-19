describe("Testing findItemsOver function",function(){
    it("this functions return a list that contain less or equal to 20 items!", function(){
assert.deepEqual(results, findItemsOver(itemList, 20));
assert.deepEqual(results2, findItemsOver(itemList2, 20));
assert.deepEqual(results3, findItemsOver(itemList3, 20));

console.log('findItemsOver passed!');



    })
})

  