let a = NaN;
let b = NaN;
do {
  a = parseInt(prompt('Введите первое число'));
  b = parseInt(prompt('Введите второе число'));
} while (!(a && b));

function Inequality_and_sqr_number(a,b){
      if (a < b){alert('первое число меньше второго');
            for (a ; a <= b; a++) {alert(a**2);}}
      else if (a > b){alert('первое число больше второго');
            for (b ; b <= a; b++) {alert(b**2);}}
      else {alert('они равны');}
}
Inequality_and_sqr_number(a,b);

/*let car = {
  mark: 'BMW',
  model:'X5',
  year:2010,
  getName: function() {
    return(this.mark + ' ' + this.model);
  }
};

console.log(car.mark);
console.log(car.model);
console.log(car['year']);

console.log( car.getName());
*/
let man = {
  sex:'men',
  age:18,
  height:185,
  name:'Вася',
  last_name:'Мельник',
  motherland:'Россия',
  home:'Якутск',
  location:'Владивосток',
  username:'wyiljack'
}
function print_prop(obj){
  for (let prop in obj){alert(prop + ': '+ obj[prop]);}
}
//print_prop(man);

let cars = ['BMW','Toyota','KIA'];
//let cars = new Array();
alert(cars[0]);
cars.push('Oleg');
alert(cars.length);
for (var car in cars) {
  alert(cars[car]);
}
