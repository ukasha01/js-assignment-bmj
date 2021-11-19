// //array
// //1
// var studentArray = [];
// //2
// var student = new Array();
// //3
// var carArr = ["corolla", "HONDA", "MEHRAN"];
// //4
// var numArr = [2, 3, 4, 5];
// //5
// var boleanArr = [true, false];
// //6
// var mixedArr = ["corolla", "HONDA", "MEHRAN", 2, 3, 4, 5, true, false];
// //7
// var educationArr = ["SSC", "HSC", "BCS",
//     "BS", " BCOM", "MS", "M.Phil.", "PhD"];
// for (var i = 0; i < educationArr.length; i++) {

//     document.write(educationArr[i])
// }
// //8
// studentArray = ["ali", "farhan", "asif"];
// var marksArr = [230, 300, 425];
// console.log("Score of " + studentArray[0] + " is " + marksArr[0] + " and percentage is " + marksArr[0] / 500 * 100 );
// console.log("Score of " + studentArray[1] + " is " + marksArr[1] + " and percentage is " + marksArr[1] / 500 * 100 )
// console.log("Score of " + studentArray[2] + " is " + marksArr[2] + " and percentage is " + marksArr[2] / 500 * 100 )

//9
// var colorArr = ["red", "green", "blue"];
// console.log("arr " + colorArr)
// var userColor1 = +prompt("enter Your index");
// var userColor2 = +prompt("enter Your count");

// colorArr.unshift(userColor);
// console.log("updated arr " + colorArr)
// colorArr.push(userColor);
// colorArr.splice(0 , 0 , userColor1 , userColor2 );
// colorArr.shift();
// colorArr.pop();
// colorArr.splice(userColor2 , 0 , userColor1)
// colorArr.splice(userColor2 , 0 , userColor1)
// colorArr.splice(userColor2 , userColor2 )

// console.log("updated arr " + colorArr);

//10

// var scoreOfStudentArr = [320, 120, 450, 50, 46, 20];
// scoreOfStudentArr.sort(function (a, b) { return a - b });
// console.log(scoreOfStudentArr);
//11
// var citiesArr = ["karachi", "islamabd ", "lahore", "multan"];
// var d = citiesArr.slice(1, 3);
// console.log(d);
//12
// var arr = ["This", "is", "my", "cat"];
//  var a = arr.join(" ");
// console.log(a);

//13
// var deviceArr = ["keyboard" ,"Mouse" ,"printer" , "Monitor"];
// console.log(deviceArr[0]);
// console.log(deviceArr[1]);
// console.log(deviceArr[2]);
// console.log(deviceArr[3]);
// //14
// var deviceArr = ["keyboard", "Mouse", "printer", "Monitor"];
// console.log(deviceArr[3]);
// console.log(deviceArr[2]);
// console.log(deviceArr[1]);
// console.log(deviceArr[0]);
//Array and loop
//1
//  var arr = [
//      [], [] ,[]
//  ]
//2
// var numArr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ]
// document.write(numArr[0][0]);
// document.write(numArr[0][1]);
// document.write(numArr[0][2]);
// document.write(numArr[0][3] + "<br>");
// document.write(numArr[1][0]);
// document.write(numArr[1][1]);
// document.write(numArr[1][2]);
// document.write(numArr[2][0] + "<br>");
// document.write(numArr[1][3]);
// document.write(numArr[2][1]);
// document.write(numArr[2][2]);
// document.write(numArr[2][3]);
// //3
// for (var i = 0; i <= 10; i++){
//     console.log(i)
// }
//4
// var tableNum = +prompt("enter table no");
// var tablelength = +prompt("enter your no");
// for (i = 1; i <= tablelength; i++) {
//     document.write(tableNum + " x " + i + " = " +  i* tableNum + "<br>");
//5
// var fruitsArr = ["apple" , "banana" , "cherry" , "lolipop"];
// for(var i = 0 ; i < fruitsArr.length; i++){
//     document.write("element is " + i + " at index is " + fruitsArr[i] + "<br/>")
// }
//6
// for (var i = 10; i >= 1; i--) {
//     console.log("reverse Counting " + i)
// }
// //odd
// for (var i = 2; i <= 12; i = i + 2) {
//     console.log("even counting " + i)
// }
// for (var i = 1; i <= 12; i = i + 2) {
//     console.log("even counting " + i)
// }
// //SERIES
// for (var i = 2; i <= 12; i = i + 2) {
//     console.log(i + "K")
// }
//7
// var userColor = prompt("enter your frits")
// var fruitsArr = ["apple", "banana", "cherry", "lolipop"];
// var flage = false;
// for(var i= 0 ; i <= fruitsArr.length ; i++){
//     if(userColor === fruitsArr[i]){
//         document.write(userColor + " availible at inedx  " + i + " in our store")
//         flage = true
//     }
//     // break;
// }
// if(flage === false){
//     document.write(userColor + " not found in our store")
// }
//8


var arr1 = [25 , 45 ,12 , 36, 89, 21]
var lrgestNum = 0;
for (i= 0 ; i < arr1.length; i++){
    if(lrgestNum > arr1[i]){
        lrgestNum = arr1[i];
        console.log(lrgestNum)
    }
}

//9

// for(i = 5 ; i <= 100; i = i+5){
//     console.log(i)
// }
