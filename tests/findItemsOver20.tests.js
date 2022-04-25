describe("Testing findItemsOver20 function",function(){
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
        
        assert.deepEqual(results, findItemsOver20(itemList));
})
    it('should return an empty object from itemList2 for fruit quantity greater than 20!',function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];
        assert.deepEqual(results2, findItemsOver20(itemList2));
        
    

    })

    it('this functions return a list of fruit greater than 20 from itemList3!',function(){
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
        
        assert.deepEqual(results3, findItemsOver20(itemList3));
    

    })
})

