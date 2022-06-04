// function PcStore(input){

//     let cenaDolariCpu = Number(input[0])
//     let cenaDolariVideokarta = Number(input[1])
//     let cenaDolariRam = Number(input[2])
//     let broiRam = Number (input[3])
//     let otstupka = Number(input[4])

//     let cenalevaCpu = cenaDolariCpu *1.57
//     let cenalevaVideo = cenaDolariVideokarta *1.57
//     let cenalevaRam = cenaDolariRam *1.57

//     let krainacenaCpu = cenalevaCpu - cenalevaCpu *otstupka
//     let krainacenaVideo = cenalevaVideo - cenalevaVideo *otstupka
//     let krainacenaRam = cenalevaRam *broiRam

//     let moneyNeeded = krainacenaCpu+krainacenaRam+krainacenaVideo

//     console.log(`Money needed - ${moneyNeeded.toFixed(2)} leva.`)

// }
// PcStore(["500","200","80","2","0.05"])

// function maidenParty (input){

//     const lubovnoPoslanie = 0.60;
//     const vosuchnaroza = 7.20;
//     const kluchodurjatel = 3.60;
//     const karikatura = 18.20;
//     const kusmentIznenada = 22;

//     let cenaMominskoPraty = Number(input[0])
//     let broiLubovniPoslaniq = Number(input[1])
//     let broiVosuchnirozi = Number(input[2])
//     let broiKluchodurjateli = Number(input[3])
//     let broiKarikaturi = Number(input[4])
//     let broiKusmetiIznenada= Number(input[5])

//     let obstbroiArtikuli = broiLubovniPoslaniq +broiVosuchnirozi+broiKluchodurjateli+broiKarikaturi+broiKusmetiIznenada

//     let cenaLubovniposlaniq = broiLubovniPoslaniq*lubovnoPoslanie
//     let cenaVosuchnaroza = broiVosuchnirozi*vosuchnaroza
//     let cenaKluchodurjateli = broiKluchodurjateli *kluchodurjatel
//     let cenaKarikatura = broiKarikaturi *karikatura
//     let cenaKusmetIznenada = broiKusmetiIznenada*kusmentIznenada

//     let krainacena = cenaLubovniposlaniq+cenaVosuchnaroza+cenaKluchodurjateli+cenaKarikatura+cenaKusmetIznenada

//     if( obstbroiArtikuli>= 25){
//         krainacena = krainacena- krainacena *35/100
//     }

//     let krainacenaSOtstupka =krainacena-krainacena *10/100
//     let moneyLeft = krainacenaSOtstupka -cenaMominskoPraty
//     let moneyNeeded = cenaMominskoPraty-krainacenaSOtstupka

//     if(krainacena >= cenaMominskoPraty){

//         console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
//     }else{
//         console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
//     }

//     // console.log()
//     // console.log(krainacena)
//     // console.log(krainacenaSOtstupka)

// }
// maidenParty(["320","8" ,"2", "5", "5", "1"])

// if(season =="Winter"){
//     //         switch(destination){
//     //             case "Dubai": totalPrice += broidni *dubaiWinter - (broidni *dubaiWinter)*30/100 ;break;
//     //             case "Sofia": totalPrice += (broidni *sofiaWinter) + (broidni *sofiaWinter)*25/100 ;break;
//     //             case "London": totalPrice += broidni*londonWinter ;break;

// function finalCompetition (input){

//     let broiTanciori = Number(input[0])
//     let broiTochki = Number(input[1])
//     let season = input[2]
//     let place = input[3]
//     let parichnaNagrada = 0;
//     let pari = broiTanciori *broiTochki

// if(season === "summer"){
//     switch(place){
//         case "Bulgaria": parichnaNagrada += broiTanciori*broiTochki  - (broiTochki *broiTanciori) *5/100;break
//         case "Abroad": parichnaNagrada += broiTanciori * broiTochki  + pari * 50 /100;break

//     }
// }else{
//     switch(place){
//         case "Bulgaria": parichnaNagrada += broiTanciori*broiTochki  - (broiTochki *broiTanciori) *8/100;break
//         case "Abroad": parichnaNagrada += broiTanciori * broiTochki  + pari *50 /100;break

//     }

// }
// let moneyafterTax = parichnaNagrada -parichnaNagrada*10 /100
// let moneyforcharity = moneyafterTax *75/100
// let moneyPerdancer = moneyafterTax - moneyforcharity
// let finamoneyPerdancer =moneyPerdancer / broiTanciori

// console.log(`Charity - ${moneyforcharity.toFixed(2)}`)
// console.log(`Money per dancer - ${finamoneyPerdancer.toFixed(2)}`)

// }
// finalCompetition(["25","98","winter","Bulgaria"])

// function finalCompetition (input){

//         let broiTanciori = Number(input[0])
//         let broiTochki = Number(input[1])
//         let season = input[2]
//         let place = input[3]
//         let parichnaNagrada = broiTanciori *broiTochki;

//         if(season === 'summer'){

//             if(place === 'Bulgaria'){
//                 parichnaNagrada = parichnaNagrada - parichnaNagrada *5 /100

//             }else{

//                 parichnaNagrada = parichnaNagrada- parichnaNagrada *10 /100
//                 parichnaNagrada = parichnaNagrada + parichnaNagrada *50 /100

//             }
//         }else if(season === "winter"){
//             if(place === "Bulgaria"){
//                 parichnaNagrada = parichnaNagrada  - parichnaNagrada*8 /100

//             }else{
//                 parichnaNagrada =parichnaNagrada - parichnaNagrada *15 /100
//                 parichnaNagrada = parichnaNagrada  + parichnaNagrada*50 /100

//             }
//         }

//         let moneyforcharity = parichnaNagrada *75/100
//         let moneyAfterCharity =parichnaNagrada - parichnaNagrada *75 /100
//         let moneyPerdancer = moneyAfterCharity /broiTanciori

//         console.log(`Charity - ${moneyforcharity.toFixed(2)}`)
//         console.log(`Money per dancer - ${moneyPerdancer.toFixed(2)}`)

// // console.log(moneyforcharity)
// // console.log(parichnaNagrada)
// // console.log(moneyAfterCharity)
// // console.log(moneyPerdancer)
// }

//     finalCompetition(["1","89.5","summer","Abroad"])

//     function exam (input){

//         let index = 0;
//         let broiStudenti = Number(input[index])
//         index++

//         let counterFail = 0;
//         let counterBetween = 0
//         let counterBetween2 = 0;
//         let counterTop = 0;
//         let totalgrade =0;

//         for(let i = 0 ; i < broiStudenti ;i++ ){
//             totalgrade += Number(input[index])

//             if(input[index]>=2.00 && input[index]<=2.99 ){
//             counterFail ++

//             index++
//         }else if (input[index]>=3.00 && input[index]<=3.99 ){
//             counterBetween++
//             // console.log(input[index])
//             index++

//         }else if (input[index]>=4.00 && input[index]<=4.99 ){
//             counterBetween2++
//             // console.log(input[index])
//             index++
//         }else{
//             counterTop++
//             // console.log(input[index])
//             index++

//         }

//     }
//     let avarege = totalgrade / broiStudenti
//     let topStudents = counterTop/ broiStudenti*100
//     let Between2Students = counterBetween2 / broiStudenti *100
//     let BetweenStudens = counterBetween / broiStudenti *100
//     let failStudents = counterFail / broiStudenti *100

//      console.log(`Top students: ${topStudents.toFixed(2)}%`)
//      console.log(`Between 4.00 and 4.99: ${Between2Students.toFixed(2)}%`)
//      console.log(`Between 3.00 and 3.99: ${BetweenStudens.toFixed(2)}%`)
//      console.log(`Fail: ${failStudents.toFixed(2)}%`)
//      console.log(`Average: ${avarege.toFixed(2)}`)

//     // console.log(avarege.toFixed(2))
//     // console.log(counterFail / broiStudenti *100)

//     // console.log(counterBetween /broiStudenti *100)

//     // console.log(counterBetween2 /broiStudenti*100)

//     // console.log(counterTop /broiStudenti *100)
// }
//     exam (["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"])



// function solve(input) {
//   let N = Number(input[0]);

//   let startA = 1;

//   let startB = 9;

//   let startC = 0;

//   let startD = 9;

//   let endA = 9;

//   let endC = 9;

//   for (let a = startA; a <= endA; a++) {
//     for (let b = startB; b >= a; b--) {
//       for (let c = startC; c <= endC; c++) {
//         for (let d = startD; d >= c; d--) {
//           if (a + b + c + d == a * b * c * d && N % 10 == 5) {
//             console.log(` ${a}${b}${c}${d}`);

//             return;
//           } else if (
//             (a * b * c * d) / (a + b + c + d) > 2 &&
//             (a * b * c * d) / (a + b + c + d) < 4 &&
//             N % 3 == 0
//           ) {
//             console.log(`${d}${c}${b}${a}` );
//             return;
//           }
//         }
//       }
//     }
//   }

//   console.log(`Nothing found`);
// }

// solve(["123"]);



// function solve(input) {
//     let N = Number(input[0])
//     let startA = 1
//     let startB = 9
//     let startC = 0
//     let startD = 9
//     let endA = 9
//     let endC = 9
 
//     for (let a = startA; a <= endA; a++) {
//         for (let b = startB; b >= a; b--) {
//             for (let c = startC; c <= endC; c++) {
//                 for (let d = startD; d >= c; d--) {
//                     if ((a + b + c + d) == (a*b*c*d) && N % 10 == 5) {
//                         console.log(`${a}${b}${c}${d}`)
//                         return
//                     }else if (((a * b * c * d)/(a + b + c + d))>2&&((a * b * c * d)/(a + b + c + d))<4&&N%3==0){
//                         console.log(`${d}${c}${b}${a}`)
//                         return
//                     }
//                 }
//             }
//         }
//     }
// console.log(`Nothing found`)
// }


// solve(["123"]);





// function everest (input){
//     let bazovLager = 5364;
//     const vrux = 8848;
//     let index = 0;
//     let dayCounter = 0;
//     let goal= input[index]
//     let metersClimbed =0




// while(goa l!== "END"){
//     metersClimbed += bazovLager + Number(goal)

//     if(dayCounter>5){
//         if( metersClimbed )
        
//     }



// }
// console.log()
// }
// everest (["Yes","1254","Yes","1402","No","250","Yes","635"])



function solve(input) {
    index = 0
    let currentHeight = 5364;
    let goalHeight = 8848;
    let command = input[index];
    let daysCounter = 0;
    
    while (command !== 'END') {   
        if(currentHeight>=goalHeight){
            console.log(`Goal reached for ${daysCounter} days!`)
            return
        }
        index++;
        command = Number(input[index])                
        index++;
        daysCounter++;
        if(daysCounter>=5){
            console.log(`Failed!`)
            console.log(`${currentHeight}`)
            return
        }
        currentHeight += command                                    
        command = input[index];
    }
    if(currentHeight>=goalHeight){
        console.log(`Goal reached for ${daysCounter} days!`)
    }else{
        console.log(`Failed!`)
            console.log(`${currentHeight}`)
    }
    
 
}
solve (["Yes","1254","Yes","1402","No","250","Yes","635"])
solve (["Yes","1000" ,"Yes","945", "No", "1200", "END",])


