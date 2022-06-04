// function  numbers (){

//     for(let i = 7 ; i<= 997; i++){
//         if(i% 10 === 7 ){
//             console.log(i)
        
//     }

// }
// }
// numbers();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function umnojenie (input){
//     const num = Number(input[0])
   
    
//     for(let i = 1; i <=10 ; i++  ){
//         let res = i *num
//         console.log(`${i} * ${num} = ${res}`)

//     }

// }
// umnojenie(["5"]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function histograma (input){
//     let n = Number(input[0]);
//     let p1Counter = 0;
//     let p2Counter = 0;
//     let p3Counter = 0;
//     let p4Counter = 0;
//     let p5Counter = 0;

//     for(let i = 1; i <= n ; i ++){
//         // console.log(input[i])
//         let num = Number(input[i])

//         if (num<  200){
//             p1Counter++;
//         }else if (num>= 200&& num <= 399){
//             p2Counter++;
//         }else if (num>= 400 && num <= 599){
//             p3Counter++;
//         }else if (num>=600 && num<= 799){
//             p4Counter++;
//         }else{
//             p5Counter++;
//         }
//     }
//     let p1Procent = p1Counter /n *100;
//     let p2Procent = p2Counter /n *100;
//     let p3Procent = p3Counter /n *100;
//     let p4Procent = p4Counter /n *100;
//     let p5Procent = p5Counter /n *100;

// console.log(`${p1Procent.toFixed(2)}%`);
// console.log(`${p2Procent.toFixed(2)}%`);
// console.log(`${p3Procent.toFixed(2)}%`);
// console.log(`${p4Procent.toFixed(2)}%`);
// console.log(`${p5Procent.toFixed(2)}%`);



// }
// histograma(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function umnataLili(input){
// let age = Number(input[0]);
// let washingMachinePrice = Number(input[1]);
// let toyPrice = Number(input[2]);

// let money = 0;
// let toyCounter = 0;
// let tempMoney = 10;

// for(let i =1 ; i<=age; i++ ){
//     if( i% 2===0){
//         money +=  tempMoney;
//         tempMoney+= 10;
//         money -=1;
//     }else {
//         toyCounter++;
//     }

// }
// money += toyCounter * toyPrice;
// let diff =Math.abs(money - washingMachinePrice)

// if(money>= washingMachinePrice){
//     console.log(`Yes! ${diff.toFixed(2)}`);
// }else{
//     console.log(`No! ${diff.toFixed(2)}`);
// }

// }
// umnataLili(["10","170.00","6"])
////////////////////////////////////////////////////////////////////////////////////////////////////////

// function zaplata (input){
//     let index = 0;

//     let openTabs = Number(input[index]);
//     index++;

//     let money = Number(input[index]);
//     index ++;

//     let isHaveSalary= true;

//     for(let i = 0; i < openTabs ; i++){
//         let currentTab = input[index]
//         index++;
//         if(currentTab==="Facebook"){
//             money -= 150;
//         }else if (currentTab === "Instagram"){
//             money-= 100;

//         }else if (currentTab ==="Reddit"){
//             money -= 50;
//         }
//         if(money<=0) {
//             console.log(`You have lost your salary.`);
//             isHaveSalary = false;
//             break;
//         }

//     }
//     if (isHaveSalary){
//         console.log(money)
//     }

// }
// zaplata(["10",
// "750",
// "Facebook",
// "Dev.bg",
// "Instagram",
// "Facebook",
// "Reddit",
// "Facebook",
// "Facebook"])
// ;

// zaplata(["3",
// "500",
// "Github.com",
// "Stackoverflow.com",
// "softuni.bg"])

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function oscars (input){
//     let index = 0;
//     let nameActor =input[index];
//     index++;
//     let  points = Number(input[index])
//     index++;
//     let juryCount = Number(input[index])
//     index++;

//     let isNominee = false;

//     for(let i = 0 ; i<juryCount; i++){
//         let name= input[index];
//         index++;
//         let tempPoints = Number(input[index]) 
//         index++;

//         points += name.length * tempPoints /2;

//         if (points> 1250.5){
//             console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`)
//             isNominee = true;
//             break;

//         }
//     }

//     if(!isNominee){
//         let diff = Math.abs(points - 1250.5)
//         console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`)
//     }



// }
//  oscars(["Zahari Baharov",
// "205",
// "4",
// "Johnny Depp",
// "45",
// "Will Smith",
// "29",
// "Jet Lee",
// "10",
// "Matthew Mcconaughey",
// "39"])

// oscars(["Sandra Bullock",
// "340",
// "5",
// "Robert De Niro",
// "50",
// "Julia Roberts",
// "40.5",
// "Daniel Day-Lewis",
// "39.4",
// "Nicolas Cage",
// "29.9",
// "Stoyanka Mutafova",
// "33"])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function worldTennis (input){
//     const winnerPoints = 2000;
//     const finalistPoints = 1200;
//     const semiFinalistPoints = 720;
//     let index = 0;
// let numberOfTournaments = input[index];
// index++;
// let startingPoints = Number(input[index]);
// index++;
// let tempPoints = 0;
// let winCounter = 0;

// for(let i = 0; i< numberOfTournaments ; i++){
//     let score = input[index];
//     index++;

//     switch(score){
//         case "W":
//              tempPoints += winnerPoints;
//              winCounter++;
//              break;
//         case "F": tempPoints += finalistPoints;break;
//         case "SF": tempPoints += semiFinalistPoints;break;
//     }

// }

// let finaLPoints = tempPoints + startingPoints;
// let avgPoints = Math.floor(tempPoints/ numberOfTournaments);
// let winGameP = winCounter / numberOfTournaments * 100;


// console.log(`Final points: ${finaLPoints}`)

// console.log (`Average points: ${avgPoints}`)

// console.log (`${winGameP.toFixed(2)}%`)

// }
// worldTennis(["5","1400","F","SF","W","W","SF"]);



// function trekkingMania (input){
  
//     let totalGrpups = input[0]

//     let p1Musala = 0;
//     let p2Monblan = 0;
//     let p3Kilimandjaro = 0;
//     let p4K2 = 0;
//     let p5Everest = 0;
//     let allPeople = 0;
   
//     for(let i = 1; i <=totalGrpups  ; i ++){
//     let group = Number(input[i])
//     allPeople += group

//     if(group <= 5 ){
//         p1Musala+= group

//     }else if (group >= 6 && group <=12){
//         p2Monblan+= group
//     }else if (group >=13 && group <=25 ){
//         p3Kilimandjaro+= group
//     }else if(group >= 26 && group <= 40){
//         p4K2+= group
//     }else {
//         p5Everest+= group
//     }

// }
// let p1Procent = p1Musala / allPeople *100;
// let p2Procent = p2Monblan / allPeople *100;
// let p3Procent = p3Kilimandjaro / allPeople *100;
// let p4Procent = p4K2 / allPeople *100;
// let p5Procent = p5Everest /  allPeople *100;


// console.log(`${p1Procent.toFixed(2)}%`);
// console.log(`${p2Procent.toFixed(2)}%`);
// console.log(`${p3Procent.toFixed(2)}%`);
// console.log(`${p4Procent.toFixed(2)}%`);
// console.log(`${p5Procent.toFixed(2)}%`);

// }
// trekkingMania(["10",
// "10",
// "5",
// "1",
// "100",
// "12",
// "26",
// "17",
// "37",
// "40",
// "78"])
