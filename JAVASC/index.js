// function Hello() {
//     console.log("Hello SoftUni");
// }
// hello();

// function nums1to10() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//      console.log(5);
//      console.log(6);
//      console.log(7);
//      console.log(8);
//      console.log(9);
//      console.log(10);
// }
// nums1to10();

// function squareArea(input) {
//     let side = input[0];
//     let area = side * side;
//     console.log(area);

// }
// squareArea("5");

// function converter(input){

//     let centimeters = Number(input[0]*2.54)
//     console.log( centimeters);
// }
// function greeting(name){

//     let firstname=name[0]

//     console.log('Hello, '+ firstname + '!');
// //rezultat  hello niki
// }

// function ozelenqvane(input){
//     let finalprice=input*7.61
//     let discount= 0.18*finalprice
//     let withdiscount= finalprice-discount
//     console.log(`The final price is: ${withdiscount} lv.`);
//     console.log(`The discount is: ${discount} lv.`);
// }
// ozelenqvane(150);

// function proect(input){

//     cenakucheta=input[0]*2.5
//     cenakotki=input[1]*4
//      krainasuma=cenakotki + cenakucheta
//     console.log(`${krainasuma} +lv`);
// }
// proect(["5","4"]);

// function converter(input){
//     console.log(input*1.79549)
// }
// converter(['22']);

// function radians(input){
// console.log(input*180/Math.PI)

// }
// radians(3.1416);

// function calcdeposits(input){
//     let endsum=(input[0]*input[2]/100 /12);
//  console.log(input[0]+input[1]*endsum);

//  }
// calcdeposits([200,3,5.7]);

// function calcdeposits(input){
//     const deposit = Number(input[0]);
//     const timeofdeposit = Number(input[1]);
//     const percent = Number(input[2]);
//     const interest =Number(deposit*percent /100)
//     const permount = Number(interest/12);
//     const endsum = Number(deposit+timeofdeposit*permount);

// console.log (endsum);

// }
// calcdeposits(["200","3","5.7"]);

// function literatura (input){
//     const pages = Number(input[0]);
//     const pagesperhour = Number(input[1]);
//     const days = Number(input[2]);
//     console.log(pages/pagesperhour/days);

// }
// literatura(["212","20","2"])

// function smetka(input){
//     const pakethimikali = Number(input[0] * 5.80);
//     const paketmarkeri = Number(input[1] * 7.20);
//     const litripreparat = Number(input[2]* 1.20);
//     const procentotstupka =Number(input[3]/100);
//     const krainacena = (pakethimikali+paketmarkeri+litripreparat)
//  console.log(krainacena -(krainacena*procentotstupka) );
// }
// smetka(["2","3","4","25"]);

// function preboqdisvane(input) {
//   const nailon = Number(input[0]);
//   const cenanailon = (nailon + 2) * 1.5;
//   // cena za  boq
//   const boq = Number(input[1]);
//   const cenaboq = boq * 14.5;
//   const cenaprocent = (cenaboq * 10) / 100;
//   const cenaboqprocent = cenaboq + cenaprocent;
//   // cena za  boq +10%
//   // cena za  razreditel
//   const razreditel = Number(input[2] * 5.0);
//   // cena razreditel
//   // cena za  materiali
//   const cenamateriali = Number(cenanailon + cenaboqprocent + razreditel + 0.4);
//   // cena za  rabota na maistorite
//   const sumamaistorinachas = Number((cenamateriali * 30) / 100);
//   const chasove = Number(input[3]);
//   const sumamaistori = Number(sumamaistorinachas * chasove);
//   const krainasuma = sumamaistori + cenamateriali;

//   console.log(krainasuma);
// }

// preboqdisvane(["10", "11", "4", "8"]);

// function dostavka(input) {

//     const cenazapileskomenu = 10.35;
//     const cenazaribnomenu =12.4;
//     const vegemenu =8.15;
//     const desert = 0.2;
//     const dostavaka = 2.50;

//     const broimenupile = Number(input[0]);
//     const broimenuriba = Number(input[1]);
//     const broimenuvege = Number(input[2]);

//     const krainacenazapile = broimenupile*cenazapileskomenu;
//     const krainacenazariba = broimenuriba*cenazaribnomenu;
//     const krainacenavege = broimenuvege*vegemenu;

//     const cenanadeserta=(krainacenazapile+krainacenazariba+krainacenavege)*desert;
//     const cenanaporuckata= cenanadeserta+krainacenavege+krainacenazapile+krainacenazariba
//     console.log(cenanaporuckata+dostavaka);
// }

// dostavka(["2 ", "4 ", "3 "]);

// function  basketbol(input){
//     // cena za kecove
//     const cenazagodina=Number(input[0]);
//     const cenakecoveprocent=Number(cenazagodina*0.4);
//     const cenakecove= Number(input[0]-cenakecoveprocent);
//     // cena za  ekip
//     const cenaekipprocent= cenakecove*0.2;
//     const cenaekip =cenakecove-cenaekipprocent;
//     //  cena za  topka
//     const cenatopka = cenaekip/4;
//     // cena za  aksesoari
//     const cenaaksesoari =cenatopka/5;
//     // obsta cena
//     console.log(cenaekip+cenakecove+cenatopka+cenaaksesoari+cenazagodina);

// }
// basketbol(["365"]);

// function akvarium(input) {

//     const duljina=Number(input[0]);
//     const shirina=Number(input[1]);
//     const visochina=Number(input[2]);
//     const zaetoprostranstvo=Number(input[3]/100);

//     const obemakvarium=duljina*shirina*visochina;
//     const obemlitri=obemakvarium/1000;
//     const nujnilitri=obemlitri*(1-zaetoprostranstvo);

// console.log( nujnilitri);

// }
// akvarium(["85 ", "75 ", "47 ", "17"]);
