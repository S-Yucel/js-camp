function addToCart(quantity,productName = "Elma") {
    console.log("sepete eklendi : ürün :"  + productName + " adet :" + quantity);
}
//addToCart();
addToCart("Yumurta",10);
//addToCart("Karpuz");

let sayHello = ()=>{
    console.log("Hello world!");
};
sayHello();

let sayHello2 = function () {
    console.log("Selam Millet!");
};
sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
};
addToCart2("elma",5,20);
addToCart2("armut",4,30);
addToCart2("muz",9,50);


let product1 = {productName:"Elma", quantity:5, unitPrice:20};
function addToCart3(product) {
    console.log("Ürün : " +product.productName);
    console.log("Ürün : " +product.quantity);
    console.log("Ürün : " +product.unitPrice);
    console.log("Ürün : " +product.productName + " " +product.quantity + " "+product.unitPrice);
};

addToCart3(product1);

let product2 = {productName:"Elma", quantity:5, unitPrice:20};
let product3 = {productName:"Elma", quantity:5, unitPrice:20};
product2 = product3;
product2.productName = "Karpuz"; //? ne olur
console.log(product3.productName);

function addToCart4(products) {
    console.log(products);
}; 
let products = [
    {productName:"Elma", quantity:5, unitPrice:20},
    {productName:"Armut", quantity:10, unitPrice:5},
    {productName:"Muz", quantity:8, unitPrice:30},

];
addToCart4(products);

// Rest oparatörü

function add(...numbers) {
    let total = 0    
    for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i]
    }
    console.log(total);

}
add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers2 = [30,20,400,800,600,120];
console.log(Math.max(...numbers2));

//Destructiring


//let regions =["İç Anadolu","Marmara","Karadeniz"]
//console.log(regions);

let [iCAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
];
console.log(iCAnadolu);
console.log(marmara.name);
console.log(karadeniz);
console.log(icAnadoluSehirleri);
console.log(marmaraSehirleri);

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
= {productName:"Elma", quantity:5, unitPrice:20})
console.log(newProductName,newQuantity);
console.log(newUnitPrice);

