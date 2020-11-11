'use strict'; 
const getItemsString = function(array) {
  let result
  for (const elementArray of array) {
    const elementIndex = array.indexOf(elementArray);
     result =`${elementIndex + 1} - ${elementArray}`;
     console.log (result);
  }

};

getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

console.log(getItemsString([5, 10, 15]));
const getItemsString = function(array) {
  'use strict';
 let result= '';
    for (let i = 0; i < array.length; i+=1)
    {
        result += `${i + 1}${' - '}${array[i]}\n`}
  
  return result;
};




//const logItems = function(array) {
   // for (let i = 0; i < array.length; i += 1) {
    //   let arrayNumber = i + 1;
    //   console.log(`${arrayNumber} - ${array[i]}`);
  //  }
   //   };

 // logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
 // logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  