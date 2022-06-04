// function sumirane(input){
//     let firsttime = Number(input[0]);
//     let secondtime = Number(input[1]);
//     let thirdtime = Number(input[2]);
//     let totaltime = firsttime + secondtime + thirdtime;
//     let minutes = Math.floor(totaltime/60);
//     let seconds = totaltime % 60;
      
//     if (seconds <10){
//         console.log(`${minutes}:0${seconds}`)
//     }else{
//         console.log(`${minutes}:${seconds}`)

//     }

// }
// sumirane(["35","45","44"]);



function bonus(input){
    let number = Number(input[0]);
 let bonus = 0.0;


    if (number<=100 && number % 2 == 0){
        bonus = 6;
        console.log(bonus);
        console.log (number+bonus);
    } else if  (number<=100 && number% 10 == 5){
        bonus=7;
        console.log(bonus);
        console.log(number+bonus);
    }else if (number<=100 && number % 2 == 1){
        bonus = 5
        console.log(bonus)
        console.log(number+bonus)      //do 100
    }
    // nad 100
    if (number>100 && number % 2 ==0 && number <1000){
    bonus = number*0.2+1;
    console.log(bonus);
    console.log(number+bonus);
    }else if (number > 100 && number % 10 ==5 && number <1000){
        bonus =number*0.2 +2;
        console.log(bonus);
        console.log(number+bonus);
    }else if (number > 100 && number % 2 == 1 && number <1000){
        bonus = number * 0.2;
        console.log(bonus);
        console.log(number+bonus);
    }
    if (number>1000 && number % 2 ==0){
        bonus = number*0.1+1;
        console.log(bonus);
        console.log(number+bonus);
        }else if (number > 1000 && number % 10 ==5){
            bonus =number*0.1 +2;
            console.log(bonus);
            console.log(number+bonus);
        }else if (number > 1000 && number % 2 == 1){
            bonus = number * 0.1;
            console.log(bonus);
            console.log(number+bonus);
        }
}
bonus(["1020"])


// function bonusScore(input){
//     const number = Number(input[0]);
//     let bonus=0;
//     if (number<=100){
//         bonus = 5;
//     }else if (number>1000){
//         bonus = number * 0.1;
//     }else{
//         bonus = number * 0.2;
//     }
//     if(number % 2 === 0){ 
//         bonus +=1;
//     }else if (number % 10 === 5){ 
//         bonus += 2;
//     }
//     console.log(bonus);
//     console.log(number+bonus);
// }
// bonusScore(["27"]);


// function time(input){

//     let hours = Number(input[0]);
//     let minutes  = Number(input[1]);
   
//     minutes +=15;
  
//     if (minutes>=60){
//         hours +=1;
//         minutes -= 60;
//     }
//     if (hours>=24){
//         hours=0;
//     }
//     if (minutes<10){
//         console.log(`${hours}:0${minutes}`);     
//     }else{
//         console.log(`${hours}:${minutes}`);
//     }

// }
// time(["23","46"])


// function toys (input){
//  const puzel = 2.6;
//  const govorestakukla = 3;
//  const meche = 4.10;
//  const minion = 8.20
//  const kamionche = 2;

// let cenazaekskurziq = Number(input[0]);
// let broipuzeli = Number(input[1]);
// let broikukli = Number(input[2]);
// let broimecheta = Number(input[3]);
// let broiminioni = Number(input[4]);
// let broikamioni = Number(input[5]);
// let broiigracki = broipuzeli+broikukli+broimecheta+broiminioni+broikamioni
// let obstacena = broipuzeli*puzel+broikukli*govorestakukla+broimecheta*meche+broiminioni*minion+broikamioni*kamionche

// if (broiigracki>=50){
// obstacena = obstacena - obstacena*25/100;
//  pechalba =  obstacena - obstacena*0.1;
// }
//     pechalba =  obstacena - obstacena*0.1;
//     const razlica = Math.abs(pechalba - cenazaekskurziq);
//     if (pechalba>=cenazaekskurziq){
//         console.log(`Yes! ${razlica.toFixed(2)} lv left.`)
//     }else{
//         console.log(`Not enough money! ${razlica.toFixed(2)} lv needed.`)
//     }

// }
// toys(["320","8","2","5","5","1"]);

// function godzila(input){
//     const budget = Number(input[0]);
//     const statisti = Number(input[1]);
//     let cenazaobleklozaedin = Number(input[2]);
//     let cenazaobleklo =cenazaobleklozaedin*statisti
//     let decor = budget *10/100;
//     let  moneyleft = budget - cenazaobleklo+decor

//     if (statisti>=150){
//         cenazaobleklo = cenazaobleklo- cenazaobleklo *10/100;
//     }
//      moneyleft =Math.abs(cenazaobleklo+decor-budget);

//     if (budget>= cenazaobleklo+decor){
//         console.log(`Action!`)
//         console.log(`Wingard starts filming with ${moneyleft.toFixed(2)} leva left.`)

//     }else{
//         console.log(`Not enough money!`) 
//         console.log(`Wingard needs ${moneyleft.toFixed(2)} leva more.`)

//     }
// // console.log(cenazaobleklo);
// // console.log(decor)
// // console.log()

// }
// godzila(["9587.88","222","55.68"]);




// function swiming (input){
//     let record = Number(input[0]);
//     let distance = Number(input[1]);
//     let timeformeter = Number(input[2]);
//     let timeforivan = distance *timeformeter;
//     let resistancetime =Math.floor( distance /15)*12.5
//     let totaltime = timeforivan+resistancetime

//     if (record > totaltime){
//         console.log(`Yes, he succeeded! The new world record is ${totaltime.toFixed(2)} seconds.`);

//     }else{
//         console.log(`No, he failed! He was ${(totaltime-record).toFixed(2)} seconds slower.`)
//     }

// }
// swiming(["10464","1500","20"])



// function pazaruvane (input){
//     const buget = Number(input[0]);
//     const videocards = Number(input[1]);
//     const procesori = Number(input[2]);
//     const rampamet = Number(input[3]);
//     const pricepercard = 250;
//     let totalcostforcards = pricepercard*videocards
//     const priceperprocesor = totalcostforcards *35/100;
//     const priceperram = totalcostforcards *10 /100;
//     let costforparts = pricepercard*videocards+priceperprocesor*procesori+priceperram*rampamet

   
//     if(videocards>procesori){
//         costforparts = costforparts-costforparts*15/100;

//     }

//     if (buget>=costforparts){
//         console.log(`You have ${(buget-costforparts).toFixed(2)} leva left!`);
//     }else{
//         console.log(`Not enough money! You need ${(costforparts-buget).toFixed(2)} leva more!`);
//     }

// }
// pazaruvane(["920.45","3","1","1"]);



// function  obedna(input){
// let imenaserial = (input[0]);
// let produljitelnostnaepizod = Number(input[1]);
// let produljitelnostpochivka = Number(input[2]);
// let vremezaobqd = produljitelnostpochivka*1/8;
// let vremezaodtih = produljitelnostpochivka*1/4;
// let ostanalovreme = produljitelnostpochivka - vremezaobqd-vremezaodtih;

// if (ostanalovreme>=produljitelnostnaepizod){
//     console.log(`You have enough time to watch ${imenaserial} and left with ${Math.ceil(Math.abs(ostanalovreme-produljitelnostnaepizod))} minutes free time.`)
// }else{
//     console.log(`You don't have enough time to watch ${imenaserial}, you need ${Math.ceil(Math.abs(ostanalovreme-produljitelnostnaepizod))} more minutes.`)
// }

// }
// obedna(["Game of thrones","48","60"])


