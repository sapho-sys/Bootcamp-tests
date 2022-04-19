function allFromTown(town,reg){
    let fromStellies=town.split(',');
     var regNumbersForStellies=[];
     for(let i=0;i < fromStellies.length;i++){
       var regNo=fromStellies[i].trim();
       if(regNo.startsWith(reg))
         regNumbersForStellies.push(regNo);
         
       } 
     return  regNumbersForStellies;
     } 
   