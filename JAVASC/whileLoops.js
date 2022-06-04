// function cheteneNaDumi (input){

//     let index = 0;

//     while(true){
//         let str = input[index];
//         index++;
//         if(str === "Stop"){
//             break;
//         }
//         console.log(str)
//     }
    

// }
// cheteneNaDumi((["Stop",
// "SoftUni",
// "Sofia",
// "Bulgaria",
// "SomeText",
// "Stop",
// "AfterStop",
// "Europe",
// "HelloWorld"])
// );



// function password (input){
//     let index = 0 ;
//     let username = input[index];
//     index++;
//     let password = input[index];
//     index++;
//     let tempPass = input[index];
//     index++;

//     while(password !== tempPass){
//         tempPass=input[index]
//         index++;
//     }
    
// console.log(`Welcome ${username}!`)

// }
// password(["Nakov",
// "1234",
// "Pass",
// "1324",
// "1234"])
// ;



// function sumOfNumbers (input){
//     let index = 0;
//     let sum =Number (input[index])
//     index++;
//     let tempSum =Number (input[index])
//     index++;

//     while(tempSum < sum){
//         tempSum += Number( input[index])
//         index++;
//     }

// console.log(tempSum)

// }
// // sumOfNumbers(["100",
// // "10",
// // "20",
// // "30",
// // "40"])
// // ;
// sumOfNumbers(["20",
// "1",
// "2",
// "3",
// "4",
// "5",
// "6"])



// function sequence (input){

//     let n = Number (input[0]);
//     let k = 1;

//     while(n >= k){
//         console.log(k);
//         k = k * 2 +1;
        

//     }

// }
// sequence(["17"]);

// function accBalance (input){
//     let index = 0;
//     let account = 0;
//     let command = input[index]  ///input 0
//     index++;
  

//     while(command !== "NoMoreMoney"){
//         let money = Number(command)

//         if (money <0){
//           console.log("Invalid operation!")
//           break;
//         }
//         account += money;
//         console.log(`Increase: ${money.toFixed(2)}`) 
    
//         command = input[index]
//         index++;
//     }
//     console.log(`Total: ${account.toFixed(2)}`)
// }
// accBalance(["5.51", 
// "69.42",
// "100",
// "NoMoreMoney"])
// ;


// function maxNumber (input){
//   let index = 0;
//   let command = input[index]
//   index++;
//   let maxNumber=Number.MIN_SAFE_INTEGER;

//   while(command !=="Stop"){
//     let num = Number(command)

//     if(maxNumber<num){
//       maxNumber=num
//     }
//     command= input[index];
//     index++;

//   }
// console.log(maxNumber)
// }
// maxNumber(["100",
// "99",
// "80",
// "70",
// "Stop"])
// ;



// function  graduation (input){
//   let index = 0;

//   let name = input[index];
//   index++;

//   let i = 1;
//   let counter = 0;
//   let  sumGrade = 0;
//   let  isExcluded = false;

//   while(i<=12){
//     let grade = Number(input[index]);
//     index++;
//     if (grade<4.00){
//       counter++;
//       if(counter >1){
//         isExcluded =true;
//         console.log(`${name} has been excluded at ${i} grade`)
//         break;
//       }
//       continue;
//     }
//     sumGrade += grade
//     i++
    
//   }
//   if(!isExcluded){
//   let avgGrade =sumGrade /12
//   console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
//   }
// }
// graduation (["Gosho", 
// "5",
// "5.5",
// "6",
// "5.43",
// "5.5",
// "6",
// "5.55",
// "5",
// "6",
// "6",
// "5.43",
// "5"])




