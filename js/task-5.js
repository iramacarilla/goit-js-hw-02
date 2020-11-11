const checkForSpam = function(message) {
    //const messageArray = message.split(' ');
    //if ( messageArray.includes('SPAM') ||  messageArray.includes('sale') )
    //{console.log(true) }
    //else {console.log(false)};
    
  };
  let strForCheck = str.toLowerCase();
    return strForCheck.includes(`spam`) || strForCheck.includes(`sale`);
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true