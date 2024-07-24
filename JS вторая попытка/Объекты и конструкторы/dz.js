//Создаём Замыкание для конструкторов UserList и User
(function(){
  //Создаём массив для месяце в правильном падеже
  let month = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
  //Декоратор для наших пользователей
function User (name_Surname){
  let d = new Date()
  let minutes = d.getMinutes()
  let hours = d.getHours()
  this.firsName = name_Surname[0]
  this.lastName = name_Surname[name_Surname.length - 1]
  //Чтобы красиво выводить время я добавил тернарный оператор ,который при невыполнении условия ставит 0 перед числом
  this.regDate = `зарегистрировался ${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()} года в ${hours > 9 ? hours:`0${hours}`}:${minutes > 9 ? minutes:`0${minutes}`}`;
  };

  function UserList(){
    this.users = []
    this.add = function(user){
        this.users.push(user);
    };
    this.getAllUsers = function(){
      for (var prop in this.users) {
        //Выводим из массива users элементы с индексами prop(наши пользователи)
        console.log(`${this.users[prop].firsName} ${this.users[prop].lastName} ${this.users[prop].regDate}`);
        //Выводим у каждого пользователя его имя ,фамилию, и дату регистрации
      }
    }
  };
//Создаём экземпляр типа UserList
  let users = new UserList()
//Делаем функцию доступной для использования на внешнем уровне window
//Это нужно для того, чтобы мы могли испольлзовать её ,но не имели доступа к переменным снаружи
  window.start = function(){
    do{
      let user = prompt('Введите имя и фамилию пользователя');
      if (user === null){return users.getAllUsers();}
      user = new User(user.trim().split(' '))
      users.add(user)
    }while(true)
  }
})()
start();
