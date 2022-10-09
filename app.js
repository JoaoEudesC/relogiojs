console.log("estou funcionando haha")

  const  horas = document.getElementById("hour");
  const  minutos= document.getElementById("minute");
  const segundos = document.getElementById("second");






const relogio = setInterval(function time(){
let datetoday = new Date();

        let hr = datetoday.getHours();
        let min = datetoday.getMinutes();
        let s = datetoday.getSeconds();










if (hr < 10) hr = "0" + hr;
if(min< 10)   min = "0" + min;   




hour.textContent = hr;
minute.textContent = min;
second.textContent = s ;



});





