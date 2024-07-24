// Базовая (родительская) функция конструктор

function User(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFullName = function(){
  return this.firstName +' '+this.lastName;
}
//дочерняя функция конструктор
function Manager(firstName, lastName){
  User.apply(this, arguments)

  this.sayHello = function(){
    alert('Hello '+firstName)
  }
  this.changeName = function(name){
    this.firstName = name;
  }
}
// Manager.prototype.getFullName = function (){
//   return this.firstName +' '+this.lastName+' Или нахуй';


let u = new User('Jonh','Due');
let m = new Manager('You','Ya');
