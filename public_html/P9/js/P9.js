var num = Number(prompt("Enter number"));
numeroprimo = true;
for (i = 1; i < num; i++)
{
  if (num / i == Math.round(num / i) && i != 1 && i != num) {
    numeroprimo = false;
    break;
  }
}
if (numeroprimo)
  console.log("the number  is cousin");
else
  console.log("the number" + num + " " + "he is not cousin");