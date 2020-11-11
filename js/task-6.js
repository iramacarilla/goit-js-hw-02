let input;
const numbers = [];
let total = 0;
while (true) {
input = prompt ('Add a number');
    console.log(input);
    numbers.push(input);   
for (let i=0; i<numbers.length; i++){
  
total = total + numbers[i];
}
   console.log(total);

}
while(UserInput != finish) {UserInput = prompt('Введите любое число'); EnteredNumbers.push(parseFloat(UserInput));}
EnteredNumbers.pop();
console.log(EnteredNumbers);
var sum = 0;

for (i=0; i < EnteredNumbers.length; i++) {
sum = sum + EnteredNumbers[i];}
console.log ('Сумма элементов массива:' +sum);