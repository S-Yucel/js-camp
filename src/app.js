console.log("Merhaba Kodlama.io");


let dolarBugun = 9.30;
let dolarDun = 9.20;
{
   let dolarDun = 9.10;
}
console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 10;
console.log(euroDun);
// camelCasing genel olarak değişkenler ve fonsiyonlar için kullanılır
// PascalCasing ise genel olarak metodlar için kullanılır
//array
let konutKredileri = ["Konut kredisi","Emlak Konut kredisi","Kamu konut kredisi"]

console.log("<ul>");
//for(let i = 0;i < 3;i++) yada
for(let i = 0;i < konutKredileri.length;i++)
{
    console.log("<li>" +konutKredileri[i]+"</li>")

}

console.log("</ul>");

/*
    <ul>
    <li>Konut kredisi</li>
    <li>Konut kredisi</li>
    <li>Kamu konut kredisi</li>
</ul>*/


console.log(konutKredileri);