'use strict'


//функция конструктор
function User(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function(){
    console.log(this);
    return this.firstName +' '+this.lastName;
  };
}

// function getName(){
//   console.log(this);
// };
// создаём экзепляры объедков
let myUser = new User ('Егор','Фёдоров');
let yUser = new User ('Вася','Мельник');

console.log(myUser.getFullName());
console.log(yUser.getFullName());

//getName();
