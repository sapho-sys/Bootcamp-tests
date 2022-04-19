function countAllFromTown(list){
  var count=0;
  //var counter=0;
  
  var town=list.split(',');
  for(var i=0; i < town.length;i++){
    var regNo=town[i];
    if(regNo.startsWith('CL'))
      count++;
    }
  return count;
}