var aste = "     *";
var maximo = 5;
var x = 1;
var d = "*";
while (x <= maximo) {
  if (x === 1) {
    console.log(aste);
  }
  console.log(aste = aste.slice(1) + d);
  x++;
}

