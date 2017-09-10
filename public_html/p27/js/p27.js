function menu(){ 
var option = Number(prompt("menu:\n 1.personal data\n 2.Family reference\n 3.Work reference\n 4.Professional Profile Description\n 5.Print resume\n 0.Exiting the program"));
return option;
}

function per() {
    var registerper = {
        name: "",
        lastname: "",
        phone: "",
        year: ""
    };
    registerper.name = (prompt("enter name"));
    registerper.lastname = (prompt("enter last name"));
    registerper.phone = Number(prompt("enter your phone number"));
    registerper.age = Number(prompt("enter your age"));
    return registerper;
}

function fami() {
    var registerfa = {
        name: "",
        lastname: "",
        phone: "",
        address: ""
    };
    registerfa.name = (prompt("enter name"));
    registerfa.lastname = (prompt("enter last name"));
    registerfa.phone = Number (prompt("enter your phone number"));
    registerfa.address= (prompt("enter residence address"));
    return registerfa;
}

function labo() {
    var registerla = {
        name: "",
        address: "",
        phone: "",
        occupation: "",
        pay: ""
    };
    registerla.name = (prompt("enter name"));
    registerla.address = (prompt("enter address"));
    registerla.phone = Number(prompt("enter your phone number"));
    registerla.occupation = (prompt("enter occupation"));
    registerla.pay = Number (prompt("inter pay "));
    return registerla;
}

function perfi() {
    var registerca = {
        experience: "",
        enterprise: "",
        address: "",
        phone: ""
    };
    registerca.experience=(prompt("work experiences"));
    registerca.enterprise=(prompt("name of last company where I work"));
    registerca.address=(prompt("management of the company where I work"));
    registerca.phone= Number (prompt("enter your phone number"));
    return registerca;
}

function imprimir(registerper, registerfa, registerla, registerca) {
    console.log("informacion personal");
    console.log("name " + registerper.name);
    console.log("lastname " + registerper.lastname);
    console.log("phone " + registerper.phone);
    console.log("age " + registerper.age);
    console.log("referencia familiar");
    console.log("name " + registerfa.name);
    console.log("latneme " + registerfa.lastname);
    console.log("phone " + registerfa.phone);
    console.log("address " + registerfa.address);
    console.log("referencia laboral");
    console.log("nombre de la empresa " + registerla.name);
    console.log("direcion de empresa " + registerla.address);
    console.log("telefono de mepresa " + registerla.phone);
    console.log("occupation " + registerla.occupation);
    console.log("pay " + registerla.pay);
    console.log("perfil ocpacional");
    console.log("perfil " + registerca.experience);
    console.log("enterprise " + registerca.enterprise);
    console.log("address " + registerca.address);
    console.log("phone " + registerca.phone);
}
var option=1;
var registerper={};
var registerfa={};
var registerla={};
var registerca={};

while (option !==0){
    option=menu();
switch (option) {
    case 1:
        registerpe = per();
        break;

    case 2:
        registerfa = fami();
        break;

    case 3:
        registerla = labo();
        break;

    case 4:
        registerca = perfi();
        break;
     
    case 5:
        imprimir(registerper, registerfa, registerla, registerca);
        break;
    case 0:
        alert("thank you for using our program");
        break;

}
}