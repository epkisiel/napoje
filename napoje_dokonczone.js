let napoj={
    nazwa: "Napój Orzeźwiający",
    objetosc: 500,
    cena: 3.20
};
console.log("Info o napoju: ");
console.log("Nazwa: "+napoj.nazwa);
console.log("Objętość: "+napoj.objetosc+"ml");
console.log("Cena: "+napoj.cena+" zł");

console.log("");

let napoje=[{
    nazwa: "Truskawka",
    objetosc: 500,
    cena: 4
},
{
    nazwa: "Mango",
    objetosc: 600,
    cena: 6
},
{
    nazwa: "Jabłko",
    objetosc: 400,
    cena: 3
}];
console.log("Długość tablicy: "+napoje.length);

console.log("");

function funkcja(napoj)
{
    console.log("Info o napoju: ");
    console.log("Nazwa: "+napoj.nazwa);
    console.log("Objętość: "+napoj.objetosc+"ml");
    console.log("Cena: "+napoj.cena+" zł");
}
funkcja(napoj);

console.log("");

napoje.push(napoj);
console.log(napoje[0].nazwa);
console.log(napoje[0].objetosc);
console.log(napoje[0].cena);
console.log(napoje[1].nazwa);
console.log(napoje[1].objetosc);
console.log(napoje[1].cena);
console.log(napoje[2].nazwa);
console.log(napoje[2].objetosc);
console.log(napoje[2].cena);
console.log(napoje[3].nazwa);
console.log(napoje[3].objetosc);
console.log(napoje[3].cena);

console.log("");

let kopia=napoje.slice(0);
kopia.pop();
console.log("Długość oryginalnej tablicy: "+napoje.length);
console.log("Długość kopii tablicy: "+kopia.length);

console.log("");

 let suma;
 function laczna_cena(kopia)
{
	suma=kopia[0].cena+kopia[1].cena+kopia[2].cena;
}
laczna_cena(kopia);
console.log("Łączna cena napojów kopii tablicy: "+suma);