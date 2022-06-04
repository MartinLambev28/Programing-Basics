// function ocenki(input){
//     let grade = Number(input[0]);
//     if (grade>=5.50){
//         console.log("Excellent!");
//     // }else{ (console.log("graet"))
//     }

//     }

// ocenki(["5.50"]);

// function Smetalo (input){
//     let a= 5;
//     let b = 2;
//     let  result = a/b;
//     console.log(result);
// }
// Smetalo();


// function sravnenie(input){
//     let purvo = Number(input[0]);
//     let vtori = Number(input[1]);
//     if (purvo>vtori){
//         console.log(purvo);
//     }else{(console.log(vtori));

//     }

// }
// sravnenie(["11","2"]);

// function chetnonechetno(input){
//     let num = Number(input[0]);
//     if (num % 2 == 0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }
// chetnonechetno(["5"])


// function Password(input){
//     let pass = (input);
//     if (pass=="s3cr3t!P@ssw0rd"){
//         console.log("Welcome");
//     }else{
//         console.log("Wrong password!");

//     }

// }
// Password(["s3cr3t!P@ssw0rd"])





// function chislo(input){
//     let num = (input[0]);
//     if (num <100 ){
//         console.log("Less than 100");
//     }else if (num>=100 && num<=200 ){
//         console.log("Between 100 and 200")
//     }else {
//         console.log("Greater than 200")
//     }
// }
// chislo([""]);


// function solve (input){
//     console.log(Math.PI)
// }
// solve(); 


// function speed(input){
//     let num = Number(input[0]);
//     if (num<=10){
//         console.log("slow");
//     }else if(num>=10 && num <= 50){
//         console.log("average");
//     }else if(num>=50 && num <=150){
//         console.log("fast");
//     }else if(num>=150 && num <=1000){
//         console.log("ultra fast");
//     }else{
//         console.log("extremely fast");
//     }
// }
// speed(["1001"]);


// function figures (input){
//     let figuretype = (input[0]);
      
//     if (figuretype ==="square"){
//         let side = Number(input[1]);
//         let squareArea = side * side
//         console.log(squareArea.toFixed(3));
//       }else if (figuretype === "rectangle"){
//           let longside = Number(input[1]);
//           let shortside = Number(input[2]);
//           let rectangleface = longside*shortside
//           console.log(rectangleface.toFixed(3));
//       }else if (figuretype === "circle"){
//           let radius = Number(input[1]);
//           let circleface = radius*radius*Math.PI
//           console.log(circleface.toFixed(3))
//       }else{(figuretype === "triangle")
//           let side = Number(input[1]);
//           let visochina =Number(input[2]);
//           let triangleface= side*visochina / 2
//           console.log(triangleface.toFixed(3))

//       }
// }
// figures(["triangle","4.5","20"]);