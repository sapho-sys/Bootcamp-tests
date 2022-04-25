function yearsAgo(date) { 
  
    var yearDiff = Date.now() - date;
    var ageDate = new Date(yearDiff);
    return Math.abs(ageDate.getFullYear() - date);
   //return Math.abs(ageDate.getFullYear() - date);
  }
 