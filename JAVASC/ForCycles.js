// function forcycle (input){
//     let num = Number(input[0])
   
//     for(let i = num; i >=1 ; i --){
//         console.log(i)
//     }

// }
// forcycle(["125"]);

// function cycle (input){
//     let  num = Number(input[0]);
//     for (let i = 1 ; i<=num ;  i +=3 ){
//         console.log(i)
//     }

// }
// cycle(["25"]);



// function evenPowers (input){
//     let n = Number(input[0]);

//     for (let i = 0; i <=n; i += 2){
//         console.log(Math.pow(2,i))
//     }

// }
// evenPowers(["10"]);


// function charSeq(input){
//     let text = input[0];
    
//     for (let i = 0 ; i< text.length; i++){
//         console.log(text.charAt(i));
//     }

// }
// charSeq(["Softuni"])



// function vowels (input){
//     let text = input[0];
//     let sum = 0;

//     for ( let i  = 0; i <text.length; i ++){
//     let ch = text[i];
//     switch(ch){
//         case "a": sum += 1 ;break;
//         case "e": sum += 2 ;break;
//         case "i": sum += 3 ;break;
//         case "o": sum += 4 ;break;
//         case "u": sum += 5 ;break;

//     }
//     }
//     console.log(sum)
// }
// vowels(["aaaaaaaaaaaaa"])



// function sum (input){

//     // let num =Number(input[0]);
//     let textNum = "" + input[0];
//     let sum = 0
//     for(let i = 0 ; i < textNum.length; i ++){
//         let num = Number(textNum[i]);
//         sum += num
//     }
//     console.log(`The sum of the digits is:${sum}`)

// }
// sum(["12345"])


// function numberDevidedByNine (input){
//     let startNum = Number(input[0]);
//     let endNum = Number(input[1]);
//     let sum = 0;

//     for(let i = startNum; i <= endNum; i ++){
//         if( i % 9 === 0 ){
//             sum+=i;
//         }

//     }
// console.log("The sum: "+ sum);

// for(let i = startNum; i <= endNum ; i ++ ){
//     if(i %9 ===0){
//         console.log(i)
//     }
// }


// }
// numberDevidedByNine(["100","200"])