
var flag = 1;
while (flag === 1) {
  var numero = Number(prompt("Enter number"));
  if (numero < 0) {
    numero = numero * (-1);
    console.log("The positive number is " + numero);
    flag = 0;
  } else {
    alert("You must enter a number less than zero");
  }
}

