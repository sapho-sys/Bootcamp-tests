function totalPhoneBill(str){
    var services=str.split(',');
     var totalAmt=0;
     for(let i=0; i < services.length;i++){
       let rendered=services[i].trim();
       if(rendered==='call'){
         totalAmt += 2.75;
       }else if(rendered==='sms'){
         totalAmt +=0.65;
       }
     }
     let totalFee=(totalAmt).toFixed(2);
     return 'R' + totalFee;
   }
   
                    
          
          