var year = Number(prompt("ingres años"));

var meses = Number(12);
var dias = Number(365);
var hora = Number(24);
var minutos = Number(60);
var segundos = Number(60);

console.log("los meses " + year * meses + " en total");
console.log("los dias " + year * dias + " en total");
console.log("las horas " + hora * dias * year + " en total");
console.log("los minutos " + minutos * hora * dias * year + " en total");
console.log("los segundos " + segundos * minutos * hora * dias * year + " en total");


