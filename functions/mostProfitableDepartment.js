



function mostProfitableDepartment(salesData){
    var departmentMap={};
     for(var i=0; i < salesData.length;i++){
       const depart=salesData[i];
       departmentMap[depart.department]=0;
     }
     for (var i=0;i <salesData.length;i++){
       const depart=salesData[i];
       var currentDepartmentTotal=departmentMap[depart.department];
       currentDepartmentTotal += depart.sales;
       departmentMap[depart.department]=currentDepartmentTotal;
     }
     //console.log(departmentMap);
     var currentMaxSales=0;
     var currentDepartment="";
     for(const departName in departmentMap){
       const currentDepartSales=departmentMap[departName];
       if(currentDepartSales > currentMaxSales){
         currentMaxSales=currentDepartSales
         currentDepartment=departName;
       }
     }
     //console.log(currentDepartment);
     return currentDepartment;
   }