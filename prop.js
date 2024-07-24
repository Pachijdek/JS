//Основы
/*
let a;
let b;

do{
  a = parseInt(prompt('Введите первое число '));
  b = parseInt(prompt('Введите втоорое число '));
}
while (isNaN(a) || isNaN(b))

if(a > b) {alert('Первое число больше второго');}
else if(b > a) {alert('Второое число больше первого')}
else{alert('Они равны')}
*/
/*\
let a;
let b;

do{
  a = parseInt(prompt('Введите начальный год'));
  b = parseInt(prompt('Введите конечный год'));
}
while((b < a) || isNaN(a) || isNaN(b))

for(a ;a < (b + 1) ;a++){
  if ((a % 4) == 0){
    console.log(a)
  }
}
*/
/*
let k = 0;
let a;
do{
  a = prompt('Введите чило');
  if (!(isNaN(parseInt(a)))){
    k += parseInt(a)
  }
}
while(a != null)
alert(k)
*/
//Функции
/*
alert('Предлагаю сыграть в игру человечишка ');
alert('Попробуй отгадать число ,которое я загадал ');
let random_number = Math.floor(Math.random()*100);

let user_number;

function prov(a){
  if (a > random_number){
    return 'Число больше';
  }
  else if (a < random_number){
    return 'Число меньше';
  }
  else if (a!= undefined && a == random_number){
    random_number = Math.floor(Math.random()*100);
    return 'УГАДАЛ';
  }
}


while (user_number!==null){
  if (user_number !== undefined){
    alert(prov(user_number));
  }
  user_number = prompt();
  while ((typeof(user_number) == 'string' ) && isNaN(parseInt(user_number))) {
    user_number = prompt('ВВЕДИТЕ ИМЕННО ЧИСЛО');
  }
}
*/
//Object
/*
 let car = {
//   mark: 'BMW',
//   model: 'X5',
//   year: 2010,
//   // getName: function() {
//   //   return (`${this.mark} ${this.model}`);
//   // }
// };

let car2 = {
  mark: 'Lada',
  model: 'Priopa',
  year: 2005,
  prise: 201000
  // getName: function(){
  //   return (`${this.mark} ${this.model}`);
  // }

};
let another car = new Object();
вызов свойств объекта
console.log( car.mark );
console.log( car.model );
console.log( car['year'] );
console.log(car.getName());
console.log(car2.getName());
this - указатель

function printObjectProps (obj){
  for (let prop in obj){
    if (obj.hasOwnProperty(prop)){

      let propValue = obj[prop];
      console.log(`${prop} : ${propValue}`);
    }
  }
}
printObjectProps(car);
printObjectProps(car2);


let car3 = {};

for (let prop in car2){
  let propValue = car2[prop];
  car3[prop] = propValue;
}
*/
//Массивы
/*let cars = [
  {
    mark: 'Toyota',
    model:'NO'
  },
  {
    mark: 'BMW',
    model: 'X5'
  }
];
// let cars = new Array ();
console.log(cars[0]);
//car.length - длинна массива
//car.push('Opel') - добавление нового элемента в массив

for (let i = 0; i < cars.length ;i++){
  console.log(cars[i].mark);
}*/
//Date
/*
let d = new Date();
console.log(d.getDay());
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());
*/
/*
function repiat (){
  let d = new Date();
  let months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  let days = ['воскресение','понедельник','вторник','среда','четверг','пятница','суббота'];
  let date = {
    number:'',
    month:'',
    year:'',
    day:'',
    hour:'',
    minutes:'',
    seconds:'',
  };
  function set_date(obj){
    obj['number'] = d.getDate();
    obj['month'] = d.getMonth();
    obj['year'] = d.getFullYear();
    obj['day'] = d.getDay();
    obj['hour'] = d.getHours();
    obj['minutes'] = d.getMinutes();
    obj['seconds'] = d.getSeconds();
  }
  set_date(date);
  function month(){
    return months[d.getMonth()]
  }
  function day() {
    return days[d.getDay()]
  }
  function hour(){
    if (date.hour % 10 == 1 && date.hour != 11){
      return `${date.hour} час`
    }
    if ((date.hour % 10 == 2 || date.hour % 10 == 3 || date.hour % 10 == 4) && date.hour != 12 && date.hour != 13 && date.hour !=14){
      return `${date.hour} часа`
    }
    else{
      return `${date.hour} часов`
    }
  }
  function minutes() {
    if (date.minutes % 10 == 1 && date.minutes != 11){
      return `${date.minutes} минута`
    }
    if ((date.minutes % 10 == 2 || date.minutes % 10 == 3 || date.minutes % 10 == 4 ) && date.minutes != 12 && date.minutes != 13 && date.minutes != 14){
      return `${date.minutes} минуты`
    }
    else {
      return `${date.minutes} минут`
    }
  }
  function second() {
    if (date.seconds % 10 == 1 && date.seconds != 11){
      return `${date.seconds} cекунда`
    }
    if ((date.seconds % 10 == 2 || date.seconds % 10 == 3 || date.seconds % 10 == 4 ) && date.seconds != 12 && date.seconds != 13 && date.seconds != 14){
      return `${date.seconds} cекунды`
    }
    else {
      return `${date.seconds} секунд`
    }
  }
  console.log(`Сегодня ${date.number} ${month()} ${date.year} года, ${day()}, ${hour()}, ${minutes()}, ${second()}`);
}
setInterval(repiat, 1000);
*/
/*
let users = [
{
  name:'VAN',
  login:'DARKHOLM',
  password:'1234658709'
},
{
  name:'BILLY',
  login:'HERRINGTON',
  password:'PdG5sdftp'
},
{
  name: 'MARK',
  login: 'WOLF',
  password: '0987654321'
},
{
  name: 'WASYA',
  login: 'MELNIK',
  password: '27240121'
},
];

let log = prompt('Введите логин');
let pas = prompt('Введите пароль');

for (let i = 0; i < users.length; i++){
  if (users[i]['login'] == log && users[i]['password'] == pas){
    alert(`Привет ${users[i]['name']}`);
    break;
  }
  if (i == users.length - 1){
    alert('Пользователь не найден');
  }
}
*/
