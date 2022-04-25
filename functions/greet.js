
function greet(name)
  {
   var letters = /^[A-Za-z]+$/;
   if(name.match(letters))
     {
        //  alert("Hello," + " " + name )
         return "Hello," + " " + name 
      
     }else if(name < -1 ){
       return "Error, Please enter your name!"
     }
   else
     {
    //  alert("error");
     return "Error, Please enter alphabetical characters only!"
     
     }
  }
    