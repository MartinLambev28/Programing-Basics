
// function cinema (input){
//     const type =input [0];
//     const rows = Number(input[1]);
//     const collums = Number(input[2]);
//     let income = 0;
//     const premiereprice = 12;
//     const normalscost = 7.5;
//     const discountprice = 5;

//     if (type === "Premiere"){
//         income = rows*collums*premiereprice
//     }else if (type === "Normal"){
//         income = rows* collums *normalscost
//     }else{
//         income = rows * collums * discountprice
//     }

// console.log (income.toFixed(2))

// }
// cinema (["Premiere","10","12"])

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function wardrobe (input){
//  const degrees = Number(input[0]);
//  const timeofday = input[1];
//  let outfit ;
//  let shoes ;

// if(timeofday === "Morning" && degrees >=10 && degrees <=18){
//     outfit = "Sweatshirt";
//     shoes = "Sneakers";
// }else if (timeofday === "Afternoon" && degrees >=10 && degrees <=18){
//     outfit = "Shirt";
//     shoes = "Moccasins";
// }else if (timeofday === "Evening" && degrees >=10 && degrees <=18){
//     outfit = "Shirt";
//     shoes = "Moccasins";
// }else if (timeofday ==="Morning" && degrees >=18 && degrees <=24){
//     outfit = "Shirt";
//     shoes = "Moccasins";
// }else if (timeofday === "Afternoon" && degrees >=18 && degrees <=24){
//     outfit = "T-Shirt";
//     shoes = "Sandals";
// }else if (timeofday === "Evening"&& degrees >=18 && degrees <=24){
//     outfit = "T-Shirt";
//     shoes = "Sandals";
// }else if (timeofday === "Morning" && degrees >=25 ){
//     outfit = "T-Shirt";
//     shoes = "Sandals";
// }else if (timeofday === "Afternoon" && degrees >=25){
//     outfit = "Swim Suit";
//     shoes = "Barefoot";
// }else{
//     outfit = "Shirt";
//     shoes = "Moccasins";
// }

// console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
// }
// wardrobe(["22","Afternoon"])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function novdom (input){
//     const roza = 5;
//     const daliq = 3.80;
//     const lale =2.80;
//     const narcis = 3;
//     const gladiola = 2.50;
//     const flowertype = input[0];
//     const numberOfFlowers = Number(input[1]);
//     const budget = Number(input[2]);
//     let finalprice = 0;

//     switch (flowertype){
//         case "Roses":
//         if (numberOfFlowers >80 ){
//             finalprice-= numberOfFlowers * roza *0.10;
//         }
//         finalprice += numberOfFlowers *roza;
//         break;
//         case "Dahlias":
//             if (numberOfFlowers>90){
//                 finalprice-= numberOfFlowers*daliq*0.15;
//             }
//             finalprice+= numberOfFlowers*daliq;
//             break;

//         case "Tulips":
//             if(numberOfFlowers>80){
//                 finalprice -= numberOfFlowers * lale *0.15;
//             }
//             finalprice += numberOfFlowers*lale;
//             break;

//         case "Narcissus":
//             if (numberOfFlowers<120){
//                 finalprice += numberOfFlowers *narcis *0.15;
//             }
//             finalprice += numberOfFlowers *narcis;
//             break;
//         case "Gladiolus":
//             if(numberOfFlowers<80){
//                 finalprice += numberOfFlowers *gladiola *0.20;
//             }
//             finalprice += numberOfFlowers*gladiola;
//             break;

//     }
// if (budget>= finalprice){
//     const moneyleft = budget- finalprice;
//     console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowertype} and ${moneyleft.toFixed(2)} leva left.`)
// }else{
//     const moneyNeeded = finalprice - budget;
//     console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
// }

// }
// novdom(["Roses","55","250"])




// function fishningboat (input){
//     //picese
//     const priceForSpring = 3000;
//     const priceForSummerAndAutum = 4200;
//     const priceForWinter = 2600;
// //inputs
//     const budget =Number(input[0]);
//     const season = input[1];
//     const countOfFisherman = Number(input[2]);
    
// //logic
// let totalmoney = 0;

//      switch(season){
//          case "Winter":
//              totalmoney=priceForWinter;
//              break;
//          case "Spring":
//              totalmoney = priceForSpring;
//              break;
//          case "Autumn":
//          case "Summer":    
//              totalmoney = priceForSummerAndAutum;
//              break;        
//      }

// if (countOfFisherman<=6){
//     totalmoney -= totalmoney*0.1;

// }else if (countOfFisherman>= 7 && countOfFisherman <= 11){
//     totalmoney-=totalmoney*0.15;

// }else if (countOfFisherman >= 12){
//     totalmoney -= totalmoney *0.25;
// }
// if (countOfFisherman % 2 === 0 && season != "Autumn" ){
//     totalmoney -= totalmoney *0.05;
// }
// if (budget >= totalmoney){
//     const moneyleft = budget - totalmoney;
//     console.log(`Yes! You have ${moneyleft.toFixed(2)} leva left.`)
// }else {
//     const moneyNeeded = totalmoney - budget;
//     console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
// }
// }
// fishningboat(["3600","Autumn","6"])
// fishningboat(["3600","Autumn","6"])
// fishningboat(["3600","Autumn","6"])
// fishningboat(["3600","Autumn","6"])




// function  Journey(input){
//     const budget = Number(input[0]);
//     const season = input[1];
//     let finalmoney = 0;


//     if (budget <= 100){
//         if (season === "summer"){
//             finalmoney = budget *0.3;
//             console.log("Somewhere in Bulgaria");
//             console.log (`Camp - ${finalmoney.toFixed(2)}`);
//         }else{
//             finalmoney = budget *0.7;
//             console.log("Somewhere in Bulgaria");
//             console.log (`Hotel - ${finalmoney.toFixed(2)}`);
//         }
//     }else if (budget >100 && budget <= 1000){
//         if(season=== "summer"){
//             finalmoney = budget *0.4;
//             console.log("Somewhere in Balkans");
//             console.log (`Camp - ${finalmoney.toFixed(2)}`);
//         }else{
//             finalmoney = budget *0.8;
//             console.log("Somewhere in Balkans");
//             console.log (`Hotel - ${finalmoney.toFixed(2)}`);
//         }
//     }else{
//         finalmoney = budget *0.9
//         console.log("Somewhere in Europe");
//         console.log (`Hotel - ${finalmoney.toFixed(2)}`);
//         }

//     }

// Journey(["75","winter"])



// function operationBetweenNumbers (input){
//     const n1 = Number(input [0]);
//     const n2 = Number (input[1]);
//     const operator = input [2];
//     let result = 0;
    

//     if(operator === "+"){
//         result = n1 + n2 ;
//         if (result % 2 == 0){
//             console.log(`${n1} ${operator} ${n2} = ${result} - even`)
//         }else{
//             console.log(`${n1} ${operator} ${n2} = ${result} - odd`)
//         }
//     }else if (operator === "-"){
//         result = n1 - n2 ;
//         if(result %2 == 0){
//             console.log(`${n1} ${operator} ${n2} = ${result} - even`)
//         }else{
//             console.log(`${n1} ${operator} ${n2} = ${result} - odd`)
//         }
//     }else if (operator === "*"){
//         result= n1 *n2;
//         if(result %2 == 0){
//             console.log(`${n1} ${operator} ${n2} = ${result} - even`)
//         }else{
//             console.log(`${n1} ${operator} ${n2} = ${result} - odd`)
//         }
//     }else if (operator === "/"){
//         if(n2 == 0){
//             console.log(`Cannot divide ${n1} by zero`)
//         }else{
//             result = n1 / n2 ;
//         console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`)
//         }
     
//     }else if (operator === "%"){
//         if(n2 == 0){
//             console.log(`Cannot divide ${n1} by zero`)
//         }else{
//         result = n1 % n2;
//         console.log(`${n1} ${operator} ${n2} = ${result}`)
//     }
//  }

// }

// operationBetweenNumbers(['112','0','/'])





// function forcycle (input){
//     let num = Number(input[0])
   
//     for(let i = num; i >=1 ; i --){
//         console.log(i)
//     }

// }
// forcycle(["125"]);





























function hotelRoom (input){
    const mayAndOctomberStudioPrice = 50;
    const mayAndOctomberApartmentPrice = 65;
    const juneAndSeptemberStudioPrice = 75.2;
    const juneAndSeptemberApartmentPrice = 68.7;
    const julyAndAugustStudioPrice = 76;
    const julyAndAugustApartemntPrice = 77;
    const season = input[0];
    const nights = Number(input[1]);
    let totalMoneyFroStudio =0 ;
    let totalmoneyForApartment = 0;


    switch(season){
        case "May":
        case "October":
            totalMoneyFroStudio = nights *mayAndOctomberStudioPrice;
            totalmoneyForApartment= nights* mayAndOctomberApartmentPrice;
            if(nights > 7 && nights < 14){
                totalMoneyFroStudio -= totalMoneyFroStudio *0.05;
            }else if (nights >14){
                totalMoneyFroStudio -= totalMoneyFroStudio* 0.3;
            }
          break;
          case "June":
          case "September":
              totalMoneyFroStudio = nights * juneAndSeptemberStudioPrice;
              totalmoneyForApartment= nights * juneAndSeptemberApartmentPrice;
              if(nights >14){
                  totalMoneyFroStudio -= totalMoneyFroStudio*0.2;
              }
              break;
          case "July":
          case "August":
              totalMoneyFroStudio = nights * julyAndAugustStudioPrice;
              totalmoneyForApartment = nights * julyAndAugustApartemntPrice;
              break;        

    }
    if (nights>14){
        totalmoneyForApartment -= totalmoneyForApartment *0.1;
    }
    console.log(`Apartment: ${totalmoneyForApartment.toFixed(2)} lv.`);
    console.log (`Studio: ${totalMoneyFroStudio.toFixed(2)} lv.`)


}
hotelRoom(["May","14"]);



// function onTimeForTheExam(input){

//     const examHour = Number (input[0]);
//     const examMinutes = Number (input[1]);
//     const arrivalhour = Number(input[2]);
//     const arrivalMinutes = Number (input[3]);

//     const totalExamMin = examHour * 60 + examMinutes;
//     const totalArrivalMin =  arrivalhour * 60 + arrivalMinutes;

//     const differenceInTime = Math.abs(totalExamMin- totalArrivalMin);
//     const hourDiff = Math.floor(differenceInTime / 60);
//     let minDiff = differenceInTime % 60;
//     if (minDiff ===0 || (minDiff<10 && hourDiff>0)){
//         minDiff= `0${minDiff}`;
//     }
// if(totalArrivalMin === totalExamMin){
//     console.log("On time");
// }else if (totalArrivalMin > totalExamMin && differenceInTime <60 ){
//     console.log (`Late`);
//     console.log (`${minDiff} minutes after the start`)
// }else if (totalArrivalMin > totalExamMin && differenceInTime >=60){
//     console.log (`Late`);
//     console.log (`${hourDiff}:${minDiff} hours after the start`);
// } else if (differenceInTime<=30 ){
//     console.log (`On time`);
//     console.log (`${minDiff} minutes before the start`);
// }else if (differenceInTime > 30 && differenceInTime <60){
//     console.log (`Early`);
//     console.log (`${minDiff} minutes before the start`);
// }else{
//     console.log (`Early`);
//     console.log (`${hourDiff}:${minDiff} hours before the start`);
// }

// }
// onTimeForTheExam(["16","00","15","00"])



// function skiTrip (input){
//     const daysStay = Number (input[0]);
//     const roomType = input[1];
//     const rateing = input[2];
//     const roomFromOnePersonPrice = 18;
//     const apartmetnPrice = 25;
//     const presidentApartementPrice = 35;
//     let totalPrice = 0;

//     if(roomType ==="room for one person"){
//         totalPrice = (daysStay - 1)*roomFromOnePersonPrice

//     }else if (roomType === "apartment"){
//         totalPrice = (daysStay- 1)* apartmetnPrice;
//         if (daysStay< 10){
//             totalPrice = totalPrice * 0.7;
//         }else if (daysStay >= 10 && daysStay <=15){
//             totalPrice = totalPrice *0.65
//         }else {
//             totalPrice = totalPrice *0.5;
//         }
//     }else if (roomType === "president apartment"){
//         totalPrice =( daysStay -1)* presidentApartementPrice;
//         if (daysStay < 10){
//             totalPrice = totalPrice * 0.9;

//         }else if (daysStay >= 10 && daysStay <=15){
//             totalPrice = totalPrice * 0.85;

//         }else { 
//             totalPrice = totalPrice * 0.8;
//         }

//     }
// if (rateing === "positive"){
//     totalPrice   = (totalPrice * 1.25).toFixed(2);

// }else {
//     totalPrice = (totalPrice * 0.90).toFixed(2);
// }
// console.log(totalPrice)
// }
// skiTrip(["14","apartment","positive"])