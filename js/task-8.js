function mapArray(array) {
    'use strict';
    const numbers = new Array(array.length);
    for(let i = 0; i < array.length; i += 1) {
      // Write code under this line
      numbers[i] = array[i] * 10;  
    }
    return numbers;
  }
  
  console.log(mapArray([-2, 0, 2]));
  [-20, 0, 20]



  function filterArray(array) {
    'use strict';
    const numbers = [];
    for(let i = 0; i < array.length; i += 1) {
      // Write code under this line
      if (Number.isFinite(array[i])===false){
        continue;
      }
  else  {numbers.push(array[i])}
    }
      return numbers;
  }

  function SumArray(array) {
    'use strict'; 
    let total = 0;
    for(let i = 0; i < array.length; i += 1) {
      // Write code under this line
      total += array[i]; }
   return total;
  }
  
  console.log(filterArray([2, 0, 2]));