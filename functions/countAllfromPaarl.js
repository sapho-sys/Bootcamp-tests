function countAllPaarl(list){
    var count=0;
    let regNo=list.split(',');
    for(var i=0;i < regNo.length;i++){
      var plates=regNo[i].trim();
      if(plates.startsWith('CJ'))
        count++;
    }
    return count;
    
  
  }
  