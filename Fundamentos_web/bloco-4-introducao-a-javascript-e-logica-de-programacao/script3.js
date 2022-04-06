const currentHour = 19;
let message = " ";
let weekday ='sábado';


if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
}else if (currentHour > 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
}else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

if(weekday === "segunda-feira" || weekday === "terça-feira" || weekday === "quarta-feira" || weekday === "quinta-feira" || weekday === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else if (weekday === "sábado" || weekday === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU");
}
