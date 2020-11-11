const formatString = function(string) {
    const formatString = string.split('');
    console.log(formatString);
    let stringLength = formatString.length;
    console.log (stringLength);
    if (formatString.length < 40)
    {
       // formatString = string.join('');
        console.log(formatString.join(''));
     }
else {
    const removePart = formatString.splice(40);
    console.log (`${formatString.join('')}...`);
}
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка

  function formatString (string, maxLength = 40) {
    // Write code under this line
     const formatString = string.split('');
      //console.log(formatString);
      let stringLength = formatString.length;
      //console.log (stringLength);
      if (formatString.length < maxLength)
      {
         // formatString = string.join('');
         return formatString.join('');
       }
  else {
      const removePart = formatString.splice(maxLength);
      return `${formatString.join('')}...`;
  }
  }
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
  //console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'