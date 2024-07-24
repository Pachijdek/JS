
(function(){
  let random_number = Math.round(Math.random()*1000);
  let count = 10;

  window.start = function(){
    while(count != 0){
      let answer = prompt('Ваши догадки?');
      if (answer === null){return'Начём сначала?'}
      while(isNaN(Number(answer))||!(answer)){
        answer = prompt('Введите ИМЕННО число');
        if (!answer && answer!='') {return 'Начём сначала?'}
      }
      alert(comparison(random_number,answer));
      if(comparison(random_number,answer) == 'Молодец Угадал'){break;};
      count--;
    }
      if (count == 0){return 'Эх не повезёт в игре повезёт в любви'}
      count = 10;
  };

    function comparison (a,b){
      if (a > b) {return 'Твоё число меньше'}
      else if (a < b) {return 'Твоё число больше'}
      else{return 'Молодец Угадал'}
    };

})()
