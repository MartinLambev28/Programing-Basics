// function daysoftheweek(input){
//      let day = Number(input[0]);
//      switch (day){
//          case 1: console.log("Monday"); break;
//          case 2: console.log("Tuesday"); break;
//          case 3: console.log("Wednesday"); break;
//          case 4: console.log("Thursday"); break;
//          case 5: console.log("Friday"); break;
//          case 6: console.log("Saturday"); break;
//          case 7: console.log("Sunday"); break;
//          default: console.log("Error"); break;
//      }
// }
// daysoftheweek(["2"])



// function workOrWeekend(input){
//     let day = input[0];
//     switch (day){
//         case "Monday": console.log("Working day"); break;
//         case "Tuesday": console.log("Working day"); break;
//         case "Wednesday": console.log("Working day"); break;
//         case "Thursday": console.log("Working day"); break;
//         case "Friday": console.log("Working day"); break;
//         case "Saturday": console.log("Weekend"); break;
//         case "Sunday": console.log("Weekend"); break;
//         default: console.log("Error"); break;
//     }
// }
// workOrWeekend(["Sunday"])




// function animals(input){
//     let animal = input[0];

//     switch (animal){
//         case "dog": console.log ("mammal"); break;
//         case "crocodile":console.log ("reptile"); break;
//         case "tortoise":console.log ("reptile"); break;
//         case "snake":console.log ("reptile"); break;
//         default :console.log ("unknown");break;
//     }
// }
// animals(["cat"]);



// function ageGender (input) {
//     let age = Number(input[0]);
//     let gender = (input[1]);

//     if (age >=16 && gender == "m"){
//         console.log ("Mr.");
//     }else if (age<=16 && gender == "m"){
//         console.log ("Master");

//     }else if (age >=16 && gender =="f"){
//         console.log ("Ms.");
//     }else{
//         console.log("Miss")
//     }

// }
// ageGender(["18","f"]);


// function titles (input){
//     const age = Number(input[0]);
//     const gender =(input[1]);

//     if (gender =="f"){
//         if (age >=16){
//             console.log("Ms.");
//         } else{
//         console.log("Miss")
//     }
// }else{
//     if(age >=16){
//         console.log("Mr.")
//     }
//     else{
//         console.log("Master")
//     }
// }
// }
// titles(["12","m"]);


// function shop(input){
//     const product = input[0];
//     const town = input[1];
//     const kolichestvo = Number(input[2]);
//     let price = 0;

//     switch(town){
//         case "Sofia":
//         switch(product){
//             case "coffee":price = kolichestvo *0.5;break;
//             case "water":price = kolichestvo *0.8;break;
//             case "beer":price = kolichestvo *1.20;break;
//             case "sweets":price = kolichestvo *1.45;break;
//             case "peanuts":price = kolichestvo *1.60;break;
//         }break;
//         case "Plovdiv":
//             switch(product){
//                 case "coffee":price = kolichestvo *0.4;break;
//                 case "water":price = kolichestvo *0.7;break;
//                 case "beer":price = kolichestvo *1.15;break;
//                 case "sweets":price = kolichestvo *1.30;break;
//                 case "peanuts":price = kolichestvo *1.50;break;
//             }break;
//         case "Varna":
//             switch(product){
//                 case "coffee":price = kolichestvo *0.45;break;
//                 case "water":price = kolichestvo *0.7;break;
//                 case "beer":price = kolichestvo *1.1;break;
//                 case "sweets":price = kolichestvo *1.35;break;
//                 case "peanuts":price = kolichestvo *1.55;break;
//             }break;
//     }
//     console.log(price)

// }
// shop(["coffee","Plovdiv","2"]);


// function numberInInterval (input){
//     const num = Number(input[0]);

//     if(num >= -100 &&  num <= 100 &&  num !==0){
//         console.log("Yes");
//     }else{
//         console.log("No")
//     }
  
// }
// numberInInterval(["100"])




// function numberInInterval (input){
//     const num = Number(input[0]);

//     if(num <0  ||  num >  0 ){
//         console.log("Yes");
//     }else{
//         console.log("No")
//     }
  
// }
// numberInInterval(["0"])


// function rabotnoVreme (input){
// let chas = Number(input[0]);
// let day = input[1];

// if (chas>=10 && chas<=18 ){
//     switch (day){
//         case "Monday":console.log("open");break;
//         case "Tuesday":console.log("open");break;
//         case "Wednesday":console.log("open");break;
//         case "Thursday":console.log("open");break;
//         case "Friday":console.log("open");break;
//         case "Saturday":console.log("open");break;
//         case "Sunday":console.log("closed");break;
//     }

// }else{
//     console.log("closed");
// }

// }
// rabotnoVreme(["11","Sunday"])




// function bilet (input){
// let cena = 0;
// let day = input[0];

// switch (day){
//     case "Monday": cena =12;break;
//     case "Tuesday": cena = 12;break;
//     case "Wednesday": cena = 14;break;
//     case "Thursday": cena = 14;break;
//     case "Friday": cena = 12;break;
//     case "Saturday": cena = 16;break;
//     case "Sunday": cena = 16;break;
// }
// console.log(cena);
// }
// bilet(["Sunday"])


// function plodZelenchuk (input){
//     let thing = input[0];
    
//     switch (thing){
//     case "banana":console.log("fruit");break;
//     case "apple":console.log("fruit");break;
//     case "kiwi":console.log("fruit");break;
//     case "cherry":console.log("fruit");break;
//     case "lemon":console.log("fruit");break;
//     case "grapes":console.log("fruit");break;
//     case "tomato":console.log("vegetable");break;
//     case "cucumber":console.log("vegetable");break;
//     case "pepper":console.log("vegetable");break;
//     case "carrot":console.log("vegetable");break;
//     default :console.log("unknown")
//     }


// }
// plodZelenchuk(["pepper"])

// function nevalidnoChislo (input){
//     let num = Number(input[0]);
//     let isValid = num >=100 && num <=200 || num == 0 ;


//     if (!isValid){
//         console.log("invalid")
//     // }else{
//     //     console.log (isValid);
//     }
    

// }
// nevalidnoChislo(["0"])

// function magazin (input){
// let fruit = input[0];
// let day = input [1];
// let numberoffruits = Number(input[2]);
// price = 0;
// let error = true;

// if (day === "Monday"|| day ==="Tuesday"|| day === "Wednesday" || day ==="Thursday" || day ==="Friday"){
//     switch(fruit){
//         case "banana":price= numberoffruits * 2.50 ;break;
//         case "apple":price= numberoffruits * 1.20 ;break;
//         case "orange":price= numberoffruits * 0.85 ;break;
//         case "grapefruit":price= numberoffruits * 1.45 ;break;
//         case "kiwi":price= numberoffruits * 2.70 ;break;
//         case "pineapple":price= numberoffruits * 5.50 ;break;
//         case "grapes":price= numberoffruits * 3.85 ;break;
//         default :error=false;break;
//     }
// }else if (day === "Sunday" || day ==="Saturday"){
//     switch(fruit){
//         case "banana":price= numberoffruits * 2.70;break;
//         case "apple":price= numberoffruits * 1.25;break;
//         case "orange":price= numberoffruits * 0.90 ;break;
//         case "grapefruit":price= numberoffruits * 1.60 ;break;
//         case "kiwi":price= numberoffruits * 3.00;break;
//         case "pineapple":price= numberoffruits * 5.60 ;break;
//         case "grapes":price= numberoffruits * 4.20 ;break;
//         default:error=false;break
//     }
// }else{
//     error=false;
// }
// if (!error){
//     console.log(price.toFixed(2));
// }else{
//     console.log("error");
// }

// }
// magazin(["grapes","Monda","6"])


// if (city =="Sofia"){
//     if(sales <=500){
//     sales= sales + sales*15/100
//     }else{
//         console.log("kur")
// }
// }

// }

// function trade (input){
// let city = input[0];
// let sales = Number(input[1]);

// if (city ==="Sofia"){
//     bonus1 =  sales* 5/100;
//     bonus2 =  sales* 7/100;
//     bonus3 =  sales* 8/100;
//     bonus4 =  sales* 12/100;
//     if (sales <= 500  &&  sales !== 0 && sales > 0 ){
//         console.log(bonus1.toFixed(2))
//     }else if (sales >=500 && sales <=1000 ) {
//         console.log(bonus2.toFixed(2))
//     }else if (sales >=1000 && sales <=10000){
//         console.log(bonus3.toFixed(2))
//     }else if (sales >10000){
//         console.log (bonus4.toFixed(2))
//     }else{
//         console.log("error")
//     }

// }else if (city == "Varna"){
//     bonus1 =  sales* 4.5/100;
//     bonus2 =  sales* 7.5/100;
//     bonus3 =  sales* 10/100;
//     bonus4 =  sales* 13/100;
//     if (sales <= 500  &&  sales !== 0 && sales > 0 ){
//         console.log(bonus1.toFixed(2))
//     }else if (sales >=500 && sales <=1000 ) {
//         console.log(bonus2.toFixed(2))
//     }else if (sales >=1000 && sales <=10000){
//         console.log(bonus3.toFixed(2))
//     }else if (sales >10000){
//         console.log (bonus4.toFixed(2))
//     }else{
//         console.log("error")
//     }

// }else if (city == "Plovdiv"){
//     bonus1 =  sales* 5.5/100;
//     bonus2 =  sales* 8/100;
//     bonus3 =  sales* 12/100;
//     bonus4 =  sales* 14.5/100;
//     if (sales <= 500  &&  sales !== 0 && sales > 0 ){
//         console.log(bonus1.toFixed(2))
//     }else if (sales >=500 && sales <=1000 ) {
//         console.log(bonus2.toFixed(2))
//     }else if (sales >=1000 && sales <=10000){
//         console.log(bonus3.toFixed(2))
//     }else if (sales >10000){
//         console.log (bonus4.toFixed(2))
//     }else{
//         console.log("error")
//     }

// }else{
//     console.log("error")
// }

// }
// trade (["Sofia","3874.5"])

