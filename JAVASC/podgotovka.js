// function pazar (input1,input2,input3,input4,input5){
//     let cenaQgodi = input1
//     let kolichestvoBanani = input2
//     let kolichestvoPortokali = input3
//     let kolichestvoMalini = input4
//     let kolichestvoQgodi = input5

//     let cennaMalini = cenaQgodi /2;
//     let cenaPortokali = (cennaMalini -(cennaMalini*0.4))
//     let cenaBanani = (cennaMalini-(cennaMalini*0.8))

//     let sumaMalini =kolichestvoMalini*cennaMalini
//     let sumaPortokali = kolichestvoPortokali *cenaPortokali
//     let sumaBanani = kolichestvoBanani*cenaBanani
//     let sumaQgodi = kolichestvoQgodi*cenaQgodi
//     let krainacena = sumaBanani+sumaMalini+sumaQgodi+sumaPortokali


// console.log(krainacena.toFixed(2))


// }
// pazar(63.5,3.57, 6.35, 8.15,2.5)


// function semeinapochivka(input){
//     let budget = Number(input[0])
//     let broiNostuvku = Number(input[1])
//     let cenaZaNostuvka = Number(input[2])
//     let procentDopulnitelniRazhodi = Number(input[3] /100)



// if(broiNostuvku>7){
//     cenaZaNostuvka = cenaZaNostuvka*0.95
// }

// let totalPriceNight = broiNostuvku*cenaZaNostuvka
// let dopilniletnirazhodi = budget *procentDopulnitelniRazhodi
// let totalPrice = totalPriceNight+dopilniletnirazhodi

// if(totalPrice> budget){
//     moneyNeeded = totalPrice-budget
//     console.log(`${moneyNeeded .toFixed(2)} leva needed.`)
// }else{
//     moneyNeeded = budget - totalPrice
//     console.log(`Ivanovi will be left with ${moneyNeeded.toFixed(2)} leva after vacation.`)
// }

// }
// semeinapochivka([800.50,8,100,2])
// semeinapochivka([500,7,66,15])



// function  movie(input){

//     let  budget = Number(input[0])
//     let destination = input[1]
//     let season = input[2]
//     let broidni = Number(input[3])

//     let dubaiWinter=45000;
//     let dubaiSummer=40000;

//     let sofiaWinter = 17000;
//     let sofiaSummer = 12500;

//     let londonWinter = 24000;
//     let londonSummer = 20250;

//     totalPrice = 0;

//     if(season =="Winter"){
//         switch(destination){
//             case "Dubai": totalPrice += broidni *dubaiWinter - (broidni *dubaiWinter)*30/100 ;break;
//             case "Sofia": totalPrice += (broidni *sofiaWinter) + (broidni *sofiaWinter)*25/100 ;break;
//             case "London": totalPrice += broidni*londonWinter ;break;
        
//         }
       
//     }else{
//         switch(destination){
//             case "Dubai": totalPrice += (broidni * dubaiSummer) - (broidni *dubaiSummer)*30/100 ;break;
//             case "Sofia": totalPrice += (broidni * sofiaSummer) + (broidni*sofiaSummer)*25/100;break;
//             case "London": totalPrice += broidni *londonSummer;break;
//         }


//     }
//      let endsum1= budget - totalPrice
//      let endsum2 = totalPrice-budget

//     if(budget>totalPrice){
//         console.log(`The budget for the movie is enough! We have ${endsum1.toFixed(2)} leva left!`)

//     }else{
//         console.log(`The director needs ${endsum2.toFixed(2)} leva more!`)
//     }



// }
// movie(["2000000","Dubai","Winter","40"])




// function easterEggsBattle(input) {
//     let playerOne = Number(input[0]); // яйца на първи играч
//     let playerTwo = Number(input[1]); // яйца на втори играч
    
//     let index = 2; // започваш играта от индекс 2
//     let winner = input[index];
    
 
//     while (winner !== "End of battle") {
//         if (winner === 'one') { // ако победителят е първия играч
//         playerTwo -= 1; // вадиш 1 яйце от бройката на 2рия играч
//       } else if (winner === 'two') { // ако победителят е 2рия играч
//         playerOne -= 1; // вадиш 1 яйце от бройката на първия играч
//       }
      
//       if (playerOne === 0) { // ако първия играч свърши яйцата, край, победител е 2рия играч
//         console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
//         break;
//       }
//       if (playerTwo === 0) { // ако 2рия играч свърши яйцата, край, победител е първия играч
//         console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
//         break;
//       }
 
//         index++; // инкрементираш индекса
//         winner = input[index]; // // взимаш следващия победител
//     }
        
//     if (playerOne > 0 && playerTwo > 0) { // ако накрая и на двамата са им останали яйца, печаташ това:
//         console.log(`Player one has ${playerOne} eggs left.`);
//         console.log(`Player two has ${playerTwo} eggs left.`);
//     }
    
// }
 
// easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
// easterEggsBattle(["2", "6", "one", "two", "two"]);
// easterEggsBattle(["6", "3", "one", "two", "two", "one", "one"]);





//  function lubimci (input){
//    let index= 0;

//   let broidni = Number(input[index])
//   index++;
//   let obstakoli4estvohrana = Number(input[index])
//   index++;
  

    





//  }
//   lubimci(["3","1000","300","20","100","30","110","40"])






function trenirovka (input){

  let index = 0;

  let dni = Number(input[index])
  index++
  let kilometriPurviDen = Number(input[index])
  index++

   let obstikilometri = kilometriPurviDen
   let probqganiKilometri = kilometriPurviDen;
   

for(let i =0  ; i <=dni ;i++){
  let procent = Number(input[index]) /100
  probqganiKilometri += probqganiKilometri * procent
  obstikilometri += probqganiKilometri
  index++
}
let 



}
trenirovka(["5","30","10","15","20","5","12"])



// function solve(input) {
//   index = 0
//   const runningDays = Number(input[index]);//5
//   index++;
//   const firstDayKm = Number(input[index]);//30
//   index++;

//   let currentKm = firstDayKm;
//   let totalKm = firstDayKm;


//   for (let i = 1; i <= runningDays; i++) {
//       let dailyIncrease = Number(input[index]) / 100;
//       currentKm += (currentKm * dailyIncrease)
//       totalKm += currentKm
//       index++;
//   }

//   let result = Math.abs(1000 - totalKm);
//   if (totalKm >= 1000) {
//       console.log(`You've done a great job running ${Math.floor(result)} more
//   kilometers!`)
//   } else if (totalKm<1000) {
//       console.log(`Sorry Mrs. Ivanova, you need to run ${Math.floor(result)} more kilometers`)
//   }

// }
// solve(["5","30","10","15","20","5","12"])