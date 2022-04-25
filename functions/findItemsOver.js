

function findItemsOver(itemList, value) {
    var results=[];
      for(var i=0; i < itemList.length; i++) {
        var item = itemList[i];
        if (item.qty > value) {
          results.push(item);
        }
      }
      return results;
  }