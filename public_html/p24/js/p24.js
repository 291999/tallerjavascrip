var hours = Number(prompt("enter number of hours"));
if (hours >= 24) {
    var resulT = Math.round((hours *1) / 24);
    console.log("is equivalent to: " + resulT + "days");
}else{
    alert("number of hours is not equivalent to one day");
    console.log("number of hours is not equivalen to one day");
}
if (hours >= 168){
    var resultA = Math.round((hours * 1) / (24 * 7) / 1);
    console.log("is equivalent to: " + resultA + "weeks");
}else{
    alert("Number of hours do not equilibrate to a week");
    console.log("NUmber of hours do not equilibrate to a week");
}