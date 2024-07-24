function Transport(bak,model,gasoline_consumption){
  this.name = 'транспорт'
  this.bak_Volume = bak;
  this.gasoline_consumption_per_100_km = gasoline_consumption;
  this.model = model;
  this.mode_of_transportation ='передвигается';
  this.starter = false;

  this.on_of = function(){
    this.starter = !this.starter;
    return this.starter ? alert(`Ваш ${this.name} был заведён`):alert(`Вы заглушили ваш ${this.name}`);
  }
  this.move = function(){
    let km = prompt("На сколько километров собираетесь передвинуться?");
    if (this.bak_Volume > km*(this.gasoline_consumption_per_100_km/100)) {
      this.bak_Volume = this.bak_Volume - km*(this.gasoline_consumption_per_100_km/100);
      return alert(`Ваш транспорт  ${this.mode_of_transportation} на ${km} километров`);
    }
    else return alert('У Вас недостаточно бензина!')
  }
}
function Plane(bak,model,gasoline_consumption,capacity){
  Transport.apply(this,arguments)
  this.name = 'самолёт';
  this.baggage = [];
  this.capacity = capacity;
  this.mode_of_transportation = 'перелетает';
  this.chassis = true;
  Plane.prototype.on_of_chassis = function(){
    this.chassis = !this.chassis
  }
  Plane.prototype.load_luggage = function(){
    let things = prompt('Введите наименование предмета и его вес').trim().split(' ');
    if (Number(things[things.length - 1]) < this.capacity){
      this.baggage.push(things[0]);
      this.capacity = this.capacity - Number(things[things.length - 1]);
    }
    else alert( 'Вы не можете положить багаж');
  }
}

function Car(bak,model,gasoline_consumption){
  Transport.apply(this,arguments)
  this.name = 'машина';
  this.mode_of_transportation = 'переезжает';
}
function Sheep(bak,model,gasoline_consumption,capacity){
  Transport.apply(this,arguments)
  this.name = 'пароход';
  this.mode_of_transportation = 'переплывает';
  this.baggage = [];
  this.capacity = capacity;
  Plane.prototype.load_luggage = function(){
    let things = prompt('Введите наименование предмета и его вес').trim().split(' ');
    if (Number(things[things.length - 1]) < this.capacity){
      this.baggage.push(things[0]);
      this.capacity = this.capacity - Number(things[things.length - 1]);
    }
    else alert( 'Вы не можете положить багаж');
  }
}
let trans = new Transport(7,'GT5',5);
let plane = new Plane(8000,'Boing 747',1140,1000);
let car = new Car(25,'BMW X5',8)
let sheep = new Sheep(50000,'Knock Nevis',60,150000)
