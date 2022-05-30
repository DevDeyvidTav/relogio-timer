
function weekDay(date) {
    let day;
    switch(date){
        case 0:
            day = "Domingo";
            return day;
        case 1:
            day = "Segunda-feira";
            return day;
        case 2:
            day = "Terça-feira";
            return day;
        case 3:
            day = "Quarta-feira";
            return day;
        case 4:
            day = "Quinta-feira";
            return day;
        case 5:
            day = "Sexta-feira";
            return day;                
        case 6:
            day = "Sabado";
            break;
            return day
    }
}
function writeMonth(month){
    let stringmonth; 
    switch(month){
        case 0:
            stringmonth = "Janeiro";
            return stringmonth;
        case 1:
            stringmonth = "Fevereiro"
            return stringmonth    
        case 2:
            stringmonth = "Março"
            return stringmonth
        case 3:
            stringmonth = "Abril"
            return stringmonth
        case 4:
            stringmonth = "Maio"
            return stringmonth
        case 5:
            stringmonth = "Junho"
            return stringmonth
        case 6:
            stringmonth = "Julho"
            return stringmonth
        case 7:
            stringmonth = "Agosto"
            return stringmonth
        case 8:
            stringmonth = "Setembro"
            return stringmonth
        case 9:
            stringmonth = "Outubro"
            return stringmonth
        case 10:
            stringmonth = "Novembro"
            return stringmonth
        case 11:
            stringmonth = "Dezembro"
            return stringmonth
            
    }

} 
function relogio() {
    
    const data = new Date();
    const diaSemana = data.getDay();
    const diaMes = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const sec = data.getSeconds()
    const relogio = document.querySelector('#relogio');
    const conversaoWeekDay = weekDay(diaSemana);
    const conversaoMonth = writeMonth(mes)
    return relogio.innerHTML = `<p>${conversaoWeekDay}, ${diaMes} de ${conversaoMonth} de ${ano} ${hora}:${minuto}:${sec} </p>`

}
 setInterval(relogio,500)
let segundos = 0;

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

let timer;

function iniciaTimer() {
    timer = setInterval(function() {
      segundos++;
      selTimer.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }


const selTimer = document.querySelector('.timer')
const iniciar = document.querySelector('.iniciar')
iniciar.addEventListener('click', function(event){
    iniciaTimer();
    selTimer.style.color = "white"
})
const pausar = document.querySelector('.parar') 
const zerar = document.querySelector('.zerar')

pausar.addEventListener('click', function(evernt){
    clearInterval(timer)
    selTimer.style.color = "black"
})
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    selTimer.innerHTML = '00:00:00';
    selTimer.style.color = "white"
    segundos = 0
})