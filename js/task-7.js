function isLoginValid (login, min=4, max=6) {
    // Write code under this line
  //let loginLength = login.length;
   if (login.length >= 4 && login.length <= 16) {
          return true;
      } else {
          return false;
      }
  
     //return loginLength >= min && loginLength <= max;
    
  }
  
  //function isLoginUnique  (allLogins, login) {
    //'use strict';
    // Write code under this line
    //if (allLogins.includes(login))
    //{
    //return true;
    //}
   //else {return false;}
 
   // return !allLogins.includes(login);
  //}
  
  //function addLogin (allLogins, login) {
    //'use strict';
    //const SUCCESS = 'Логин успешно добавлен!';
    //const REFUSAL = 'Такой логин уже используется!';
   // const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
   // let message;
    // Write code under this line    
      
   // if (!isLoginValid (login))
    //{
      //message = ERROR;
      //return message;
        //break; 
   // }
   // else if (!isLoginUnique  (allLogins, login)) 
    //{
    // message = REFUSAL;
   // return message;
    //continue;
   // }
    //else
      //logins.push(login);
      //message = SUCCESS;
     // return message;
    
      
    //}
  
  
  //const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
  
  console.log(isLoginValid( 'Ajax')); 
  // 'Логин успешно добавлен!'