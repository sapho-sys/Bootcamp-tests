describe("Testing findItemsOver function",function(){
    it("should return an object that contain fruits greater than 20  from itemList!", function(){
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
      
        assert.deepEqual(findItemsOver(itemList, 20), results);

    })
    it('should return an empty object from itemList2 for fruit quantity greater than 20!',function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];
        assert.deepEqual(findItemsOver(itemList2, 20), results2);
        


    })
    it('this functions return a list for fruit greater than 20 from itemList3!',function(){
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
        assert.deepEqual(findItemsOver(itemList3, 20), results3);


    })
})

  