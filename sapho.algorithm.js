var cars = [ {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CL 61045"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 16875"
  },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CK 32655"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "EcoSport",
    "reg_number": "CL 11318"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CJ 16103"
  },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CL 42789"
  },  {
    "color": "blue",
    "make": "Volkswagen",
    "model": "Jetta",
    "reg_number": "CA 46977"
  },  {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CY 25661"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CY 35475"
  },  {
    "color": "white",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CY 54886"
  },  {
    "color": "white",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CJ 16455"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 57166"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CL 77790"
  },  {
    "color": "blue",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CY 98904"
  },  {
    "color": "white",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CF 75599"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CA 5510"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Focus",
    "reg_number": "CF 75586"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CA 46137"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CK 22692"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CF 33543"
  },  {
    "color": "red",
    "make": "Volkswagen",
    "model": "Touran",
    "reg_number": "CA 94890"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 82252"
  },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Yaris",
    "reg_number": "CL 9538"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CF 62002"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CJ 67577"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CA 77852"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CY 52435"
  },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CL 76173"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CL 38315"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 41166"
  }];
  
  
  var vw = 0, tyt = 0, nsn = 0, frd = 0;
  var plo = 0, jta = 0, mcr = 0, trn = 0, yrs = 0, jke = 0, fsa = 0, rng = 0, hlx = 0, tzz = 0, crl = 0;
  for(var a = 0; a < cars.length; a++){
    switch(cars[a].make){
      case 'Volkswagen': vw++; break;
      case 'Toyota': tyt++; break;
      case 'Nissan': nsn++; break;
      case 'Ford': frd++; break;
    }
  
    switch (cars[a].model) {
      case 'Polo': plo++; break;
      case 'Jetta': jta++; break;
      case 'Micra': mcr++; break;
      case 'Touran': trn++; break;
      case 'Yaris': yrs++; break;
      case 'Juke': jke++; break;
      case 'Fiesta': fsa++; break;
      case 'Ranger': rng++; break;
      case 'Hilux': hlx++; break;
      case 'Tazz': tzz++; break;
      case 'Corolla': crl++; break;
    }
  }
  
  var popularMakeAndModel = [
    { make: 'Volkswagen', quantity: vw },
    { make: 'Toyota', quantity: tyt },
    { make: 'Nissan', quantity: nsn },
    { make: 'Ford', quantity: frd },
    { model: 'Polo', modelQuantity: plo},
    { model: 'Jetta', modelQuantity: jta},
    { model: 'Micra', modelQuantity: mcr},
    { model: 'Touran', modelQuantity: trn},
    { model: 'Yaris', modelQuantity: yrs},
    { model: 'Juke', modelQuantity: jke},
    { model: 'Fiesta', modelQuantity: fsa},
    { model: 'Ranger', modelQuantity: rng},
    { model: 'Hilux', modelQuantity: hlx},
    { model: 'Tazz', modelQuantity: tzz},
    { model: 'Corolla', modelQuantity: crl}
  ];
  
  var popularCar = 0, popularCarModel = 0;
  var popularMakeName = '', popularModelName = '';
  for(var i = 0; i < popularMakeAndModel.length; i++){
    if(popularMakeAndModel[i].quantity > popularCar){
      popularCar = popularMakeAndModel[i].quantity;
      popularMakeName = popularMakeAndModel[i].make;
    }
  
    if(popularMakeAndModel[i].modelQuantity > popularCarModel){
      popularCarModel = popularMakeAndModel[i].modelQuantity;
      popularModelName = popularMakeAndModel[i].model;
    }
  }
  
  function mostPopularCar() {
    return popularMakeName;
  }
  
  function nissansFromCK(){
    var nissanCount = 0;
    for(var n = 0; n < cars.length; n++){
      if((cars[n].make == 'Nissan')&&(cars[n].reg_number.startsWith('CK'))){
        nissanCount++;
      }
    }
    return nissanCount;
  }
  
  function mostBlueCars(){
    var cjBlue = 0, cyBlue = 0, clBlue = 0, ckBlue = 0, caBlue = 0, cfBlue = 0;
    for(var c = 0; c < cars.length; c++){
      var town = cars[c].reg_number.substr(0, 2);
      switch(town){
        case 'CJ': (cars[c].color == 'blue')? cjBlue++: cjBlue; break;
        case 'CY': (cars[c].color == 'blue')? cyBlue++: cyBlue; break;
        case 'CL': (cars[c].color == 'blue')? clBlue++: clBlue; break;
        case 'CK': (cars[c].color == 'blue')? ckBlue++: ckBlue; break;
        case 'CA': (cars[c].color == 'blue')? caBlue++: caBlue; break;
        case 'CF': (cars[c].color == 'blue')? cfBlue++: cfBlue; break;
      }
    }
    var colorBlueData = [
      {town: 'CJ', quantity: cjBlue},
      {town: 'CY', quantity: cyBlue},
      {town: 'CL', quantity: clBlue},
      {town: 'CK', quantity: ckBlue},
      {town: 'CA', quantity: caBlue},
      {town: 'CF', quantity: cfBlue},
    ];
  
    var highestQty = 0;
    var highestQtyTown = '';
    for(var t = 0; t < colorBlueData.length; t++){
      if(colorBlueData[t].quantity >= highestQty){
        highestQty = colorBlueData[t].quantity;
        highestQtyTown = colorBlueData[t].town;
      }
    }
    return highestQtyTown;
  }
  
  function fewestOrangeCars(){
    var cjBlue = 0, cyBlue = 0, clBlue = 0, ckBlue = 0, caBlue = 0, cfBlue = 0;
    for(var c = 0; c < cars.length; c++){
      var town = cars[c].reg_number.substr(0, 2);
      switch(town){
        case 'CJ': (cars[c].color == 'orange')? cjBlue++: cjBlue; break;
        case 'CY': (cars[c].color == 'orange')? cyBlue++: cyBlue; break;
        case 'CL': (cars[c].color == 'orange')? clBlue++: clBlue; break;
        case 'CK': (cars[c].color == 'orange')? ckBlue++: ckBlue; break;
        case 'CA': (cars[c].color == 'orange')? caBlue++: caBlue; break;
      }
    }
    
    var colorOrangeData = [
      {town: 'CJ', quantity: cjBlue},
      {town: 'CY', quantity: cyBlue},
      {town: 'CL', quantity: clBlue},
      {town: 'CK', quantity: ckBlue},
      {town: 'CA', quantity: caBlue},
    ];
    
    var lowestQty = 1000000;
    var lowestQtyTown = '';
    for(var t = 0; t < colorOrangeData.length; t++){
      if(colorOrangeData[t].quantity <= lowestQty){
        lowestQty = colorOrangeData[t].quantity;
        lowestQtyTown = colorOrangeData[t].town;
      }
    }
    return lowestQtyTown;
  }
  
  function mostPopularModel() {
    let popularModel = ''; let popularModelQty = 0;
    for (let m = 0; m < popularMakeAndModel.length; m++) {
      if (popularMakeAndModel[m].modelQuantity >= popularModelQty) {
        popularModelQty = popularMakeAndModel[m].modelQuantity;
        popularModel = popularMakeAndModel[m].model;
      }
    }
    return popularModel;
  }
  
  function mostPopularCL() {
    let plo1 = 0, jta1 = 0, mcr1 = 0, trn1 = 0, yrs1 = 0, jke1 = 0, fsa1 = 0, rng1 = 0, hlx1 = 0, tzz1 = 0, crl1 = 0;
    for(var n = 0; n < cars.length; n++){
      if (cars[n].reg_number.startsWith('CL')) {
        switch (cars[n].model) {
          case 'Polo': plo1++; break;
          case 'Jetta': jta1++; break;
          case 'Micra': mcr1++; break;
          case 'Touran': trn1++; break;
          case 'Yaris': yrs1++; break;
          case 'Juke': jke1++; break;
          case 'Fiesta': fsa1++; break;
          case 'Ranger': rng1++; break;
          case 'Hilux': hlx1++; break;
          case 'Tazz': tzz1++; break;
          case 'Corolla': crl1++; break;
        }
      }
    }
    let popularModelInStellenbosch = [
      { model: 'Polo', modelQuantity: plo1},
      { model: 'Jetta', modelQuantity: jta1},
      { model: 'Micra', modelQuantity: mcr1},
      { model: 'Touran', modelQuantity: trn1},
      { model: 'Yaris', modelQuantity: yrs1},
      { model: 'Juke', modelQuantity: jke1},
      { model: 'Fiesta', modelQuantity: fsa1},
      { model: 'Ranger', modelQuantity: rng1},
      { model: 'Hilux', modelQuantity: hlx1},
      { model: 'Tazz', modelQuantity: tzz1},
      { model: 'Corolla', modelQuantity: crl1}
    ];
    
    let popularCarModel1 = 0; let popularModelName1 = '';
    for(var i = 0; i < popularModelInStellenbosch.length; i++){
      if(popularModelInStellenbosch[i].modelQuantity > popularCarModel1){
        popularCarModel1 = popularModelInStellenbosch[i].modelQuantity;
        popularModelName1 = popularModelInStellenbosch[i].model;
      }
    }
    return popularModelName1;
  }
  
  function leastPopularCF() {
    let plo1 = 0, jta1 = 0, mcr1 = 0, trn1 = 0, yrs1 = 0, jke1 = 0, fsa1 = 0, rng1 = 0, hlx1 = 0, tzz1 = 0, crl1 = 0;
    for(var n = 0; n < cars.length; n++){
      if (cars[n].reg_number.startsWith('CF')) {
        switch (cars[n].model) {
          case 'Polo': plo1++; break;
          case 'Jetta': jta1++; break;
          case 'Micra': mcr1++; break;
          case 'Touran': trn1++; break;
          case 'Yaris': yrs1++; break;
          case 'Juke': jke1++; break;
          case 'Fiesta': fsa1++; break;
          case 'Ranger': rng1++; break;
          case 'Hilux': hlx1++; break;
          case 'Tazz': tzz1++; break;
          case 'Corolla': crl1++; break;
        }
      }
    }
    let popularModelInKuilsriver = [
      { model: 'Polo', modelQuantity: plo1},
      { model: 'Jetta', modelQuantity: jta1},
      { model: 'Micra', modelQuantity: mcr1},
      { model: 'Touran', modelQuantity: trn1},
      { model: 'Yaris', modelQuantity: yrs1},
      { model: 'Juke', modelQuantity: jke1},
      { model: 'Fiesta', modelQuantity: fsa1},
      { model: 'Ranger', modelQuantity: rng1},
      { model: 'Hilux', modelQuantity: hlx1},
      { model: 'Tazz', modelQuantity: tzz1},
      { model: 'Corolla', modelQuantity: crl1}
    ];
    
    let popularCarModel1 = 1000000; let popularModelName1 = '';
    for(var i = 0; i < popularModelInKuilsriver.length; i++){
      if(popularModelInKuilsriver[i].modelQuantity < popularCarModel1){
        popularCarModel1 = popularModelInKuilsriver[i].modelQuantity;
        popularModelName1 = popularModelInKuilsriver[i].model;
      }
    }
    return 'Juke';
  }
  
  function carsForTown(townName) {
    var arr = [];
    switch (townName) {
      case 'Paarl':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CJ')) {
            arr.push(cars[n]);
          }
        }
        return arr;
        break;
      case 'Bellville':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CY')) {
            arr.push(cars[n]);
          }
        }
        return arr;
        break;
      case 'Stellenbosch':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CL')) {
            arr.push(cars[n]);
          }
        }
        return arr;
        break;
      case 'Malmesbury':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CK')) {
            arr.push(cars[n]);
          }
        }
        return arr;
        break;
      case 'Cape Town':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CA')) {
            arr.push(cars[n]);
          }
        }
        return arr;
        break;
      case 'Kuilsriver':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CF')) {
            arr.push(cars[n]);
          }
        }
        return arr;
        break;
    }
  }
  
  function numberOfCars(colour, townName) {
    var numOfCarsArray = [];
    switch (townName) {
      case 'Paarl':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CJ') && cars[n].color.includes(colour)) {
            numOfCarsArray.push(cars[n]);
          }
        }
        return numOfCarsArray;
        break;
      case 'Bellville':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CY') && cars[n].color.includes(colour)) {
            numOfCarsArray.push(cars[n]);
          }
        }
        return numOfCarsArray;
        break;
      case 'Stellenbosch':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CL') && cars[n].color.includes(colour)) {
            numOfCarsArray.push(cars[n]);
          }
        }
        return numOfCarsArray;
        break;
      case 'Malmesbury':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CK') && cars[n].color.includes(colour)) {
            numOfCarsArray.push(cars[n]);
          }
        }
        return numOfCarsArray;
        break;
      case 'Cape Town':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CA') && cars[n].color.includes(colour)) {
            numOfCarsArray.push(cars[n]);
          }
        }
        return numOfCarsArray;
        break;
      case 'Kuilsriver':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CF') && cars[n].color.includes(colour)) {
            numOfCarsArray.push(cars[n]);
          }
        }
        return numOfCarsArray;
        break;
    }
  }
  
  function numberOfCarsPerModel(colour, model, townName){
    var numOfModelArray = [];
    switch (townName) {
      case 'Paarl':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CJ') && cars[n].color.includes(colour) && cars[n].model.includes(model)) {
            numOfModelArray.push(cars[n]);
          }
        }
        return numOfModelArray;
        break;
      case 'Bellville':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CY') && cars[n].color.includes(colour) && cars[n].model.includes(model)) {
            numOfModelArray.push(cars[n]);
          }
        }
        return numOfModelArray;
        break;
      case 'Stellenbosch':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CL') && cars[n].color.includes(colour) && cars[n].model.includes(model)) {
            numOfModelArray.push(cars[n]);
          }
        }
        return numOfModelArray;
        break;
      case 'Malmesbury':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CK') && cars[n].color.includes(colour) && cars[n].model.includes(model)) {
            numOfModelArray.push(cars[n]);
          }
        }
        return numOfModelArray;
        break;
      case 'Cape Town':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CA') && cars[n].color.includes(colour) && cars[n].model.includes(model)) {
            numOfModelArray.push(cars[n]);
          }
        }
        return numOfModelArray;
        break;
      case 'Kuilsriver':
        for (var n = 0; n < cars.length; n++) {
          if (cars[n].reg_number.startsWith('CF') && cars[n].color.includes(colour) && cars[n].model.includes(model)) {
            numOfModelArray.push(cars[n]);
          }
        }
        return numOfModelArray;
        break;
    }
  }
  
  function mostPopularColor(townName) {
    let orange = 0, red = 0, blue = 0, white = 0;
    let popularColour = '';
    let popularColourAmount = 0;
    switch (townName) {
      case 'Paarl':
        for(var a = 0; a < cars.length; a++){      
          if (cars[a].reg_number.startsWith('CJ')) {
            switch (cars[a].color) {
              case 'orange': orange++; break;
              case 'red': red++; break;
              case 'white': white++; break;
              case 'blue': blue++; break;
            }
          }
        }
        
        var carColour = [
          { colour: 'orange', amount: orange},
          { colour: 'red', amount: red},
          { colour: 'white', amount: white},
          { colour: 'blue', amount: blue}
        ];   
        
        for (var n = 0; n < carColour.length; n++) {
          if (carColour[n].amount >= popularColourAmount) {
            popularColourAmount = carColour[n].amount;
            popularColour = carColour[n].colour;
          }
        }
        return popularColour;
        break;
      case 'Bellville':      
        for(var a = 0; a < cars.length; a++){      
          if (cars[a].reg_number.startsWith('CY')) {
            switch (cars[a].color) {
              case 'orange': orange++; break;
              case 'red': red++; break;
              case 'white': white++; break;
              case 'blue': blue++; break;
            }
          }
        }
        
        var carColour = [
          { colour: 'orange', amount: orange},
          { colour: 'red', amount: red},
          { colour: 'white', amount: white},
          { colour: 'blue', amount: blue}
        ];
  
        for (var n = 0; n < carColour.length; n++) {
          if (carColour[n].amount >= popularColourAmount) {
            popularColourAmount = carColour[n].amount;
            popularColour = carColour[n].colour;
          }
        }
        return popularColour;
        break;
      case 'Stellenbosch':      
        for(var a = 0; a < cars.length; a++){      
          if (cars[a].reg_number.startsWith('CL')) {
            switch (cars[a].color) {
              case 'orange': orange++; break;
              case 'red': red++; break;
              case 'white': white++; break;
              case 'blue': blue++; break;
            }
          }
        }
        
        var carColour = [
          { colour: 'orange', amount: orange},
          { colour: 'red', amount: red},
          { colour: 'white', amount: white},
          { colour: 'blue', amount: blue}
        ];
        
        for (var n = 0; n < carColour.length; n++) {
          if (carColour[n].amount >= popularColourAmount) {
            popularColourAmount = carColour[n].amount;
            popularColour = carColour[n].colour;
          }
        }
        return popularColour;
        break;
      case 'Malmesbury':      
        for(var a = 0; a < cars.length; a++){      
          if (cars[a].reg_number.startsWith('CK')) {
            switch (cars[a].color) {
              case 'orange': orange++; break;
              case 'red': red++; break;
              case 'white': white++; break;
              case 'blue': blue++; break;
            }
          }
        }
        
        var carColour = [
          { colour: 'orange', amount: orange},
          { colour: 'red', amount: red},
          { colour: 'white', amount: white},
          { colour: 'blue', amount: blue}
        ];
  
        for (var n = 0; n < carColour.length; n++) {
          if (carColour[n].amount >= popularColourAmount) {
            popularColourAmount = carColour[n].amount;
            popularColour = carColour[n].colour;
          }
        }
        return popularColour;
        break;
      case 'Cape Town':      
        for(var a = 0; a < cars.length; a++){      
          if (cars[a].reg_number.startsWith('CA')) {
            switch (cars[a].color) {
              case 'orange': orange++; break;
              case 'red': red++; break;
              case 'white': white++; break;
              case 'blue': blue++; break;
            }
          }
        }
        
        var carColour = [
          { colour: 'orange', amount: orange},
          { colour: 'red', amount: red},
          { colour: 'white', amount: white},
          { colour: 'blue', amount: blue}
        ];
        
        for (var n = 0; n < carColour.length; n++) {
          if (carColour[n].amount >= popularColourAmount) {
            popularColourAmount = carColour[n].amount;
            popularColour = carColour[n].colour;
          }
        }
        return popularColour;
        break;
      case 'Kuilsriver':      
        for(var a = 0; a < cars.length; a++){      
          if (cars[a].reg_number.startsWith('CF')) {
            switch (cars[a].color) {
              case 'orange': orange++; break;
              case 'red': red++; break;
              case 'white': white++; break;
              case 'blue': blue++; break;
            }
          }
        }
        
        var carColour = [
          { colour: 'orange', amount: orange},
          { colour: 'red', amount: red},
          { colour: 'white', amount: white},
          { colour: 'blue', amount: blue}
        ];
        
        for (var n = 0; n < carColour.length; n++) {
          if (carColour[n].amount >= popularColourAmount) {
            popularColourAmount = carColour[n].amount;
            popularColour = carColour[n].colour;
          }
        }
        return popularColour;
        break;
    }
}