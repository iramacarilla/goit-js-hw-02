const calculateEngravingPrice = function(message, pricePerWord) {
    let wordsArray = message.split(' ');
    console.log (wordsArray);
    let totalPrice = wordsArray.length * pricePerWord;
    console.log(totalPrice);
  };
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); // 160
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); // 240
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); // 120




  const calculateEngravingPrice = (message = "", pricePerWord = 0) => //pricePerWord; // Write code in this line 
{let wordsArray = message.split(' ');
   // console.log (wordsArray);
    let totalPrice = wordsArray.length * pricePerWord;
    return totalPrice;
  };

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); 