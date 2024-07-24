
/*
function showArguments(){
  //ES6
  let args = Array.prototype.slice.call(arguments);
  // let args = Array.from(arguments)
  // let args = [...arguments];
  alert(args.join(' ,'));
}

showArguments('f','f');
*/
//function sayHello(name){alert('Привет'+' '+name)}

//setTimeout(sayHello,1000,'Tujh');

/*let car = {
   sayHello:function(){
     alert('Поехали')
   },
   start:function(name){
     alert('Заводися...');

     function sayHellolater(){
       this.sayHello();
     }

     sayHellolater = sayHellolater.bind(this);

     setTimeout(sayHellolater,3000);
 }
}*/
/*try{
var age = prompt('Возраст ');
var birhyear = new Date().getFullYear()-age;
if (isNaN(birhyear)){
  throw('Введено не число')
}
else if (age!==null){alert(birhyear)}
}
catch(ex){
  alert(ex)
}
*/

/*var isValidPhone = /\d{3}-\d{2}-\d{2}/.test(phone);
if (isValidPhone){alert('Спачибо')}
else(alert('Введи норм номер дебил '))
*/
/*
function user_code(){
  try{
    'use strict';
    var code = prompt('Введите код который хотите исполнить ');
    eval(code);
  }
  catch(err){
    alert('Возникла ошибка, перепроверьте код ');
    alert(`Ваша ошибка ${err}` )
  }
}
user_code();

function filter_by_type(){
  var args = Array.prototype.slice.call(arguments)
  var filtr_arr = []
  for(let i = 1;i < args.length;i++){
    if (typeof args[i] == args[0]){filtr_arr.push(args[i])}
  }
  return(filtr_arr)
}*/
//Алгоритм линейного поиска
/*
var array = [1,3,6,34,77,4,32,2,8,7,6];

function linelSearch(arr, item){
  for(let i = 0;i<arr.length;i++){
    if (arr[i]==item){
      return i;
    }
  }
  return null
}

console.log(linelSearch(array,8));
*/
//Алгоритм бинарного поиска
/*
var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function binarySearch(arr, item){
    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end){
      middle = Math.floor((start + end)/2);
      if (arr[middle] === item){
        found = true;
        position = middle;
        return position;
      }
      if (item < arr[middle]){
        end = middle -1;
      }
      else{start = middle + 1}
      console.log(arr[middle]);
    }
    return position;
  }
*/
//Сортировка выбором
/*
var array = [5,0,1,4,6,8,2,8,5,3]

function selectionSort(arr){
  for(let i = 0;i < arr.length;i++){
    let minIndex = i;
    for(let j = i;j < arr.length - 1;j++){
      if (arr[minIndex] > arr[j+1]){
        minIndex = j+1;
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp;
  }
  return arr
}
*/
//Сортировка пузырьком
/*
var array = [5,0,1,4,6,8,2,8,5,3]

function bubleSort(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1; j++){
      if (arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return console.log(arr);
}
*/
//Реккурсия
/*
var factorial = (n) => {
    if (n === 1){
      return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(5));

var fibonachiNumbers = (n) =>{
  if (n === 1 || n===2){
    return 1
  }
  return fibonachiNumbers(n-1) + fibonachiNumbers(n-2)
}
console.log(fibonachiNumbers(10));
*/
