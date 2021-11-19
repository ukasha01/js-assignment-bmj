//cha 31 to 34
//1

// var a = new Date(2018 , 11, 2);
// console.log(a);


//2
// var b = a.getMonth();
// console.log(b);
// switch (b) {
//     case 0:
//         alert("jan")
//     case 1:
//         alert("feb")
//         break;
//     case 2:
//         alert("Mar")
//         break;
//     case 3:
//         alert("apr")
//         break;
//     case 4:
//         alert("may")
//         break;
//     case 5:
//         alert("jun")
//         break;
//     case 6:
//         alert("july")
//         break;
//     case 7:
//         alert("aug")
//         break;
//     case 8:
//         alert("sep")
//         break;
//     case 9:
//         alert("oct")
//         break;
//     case 10:
//         alert("nov")
//         break;
//     case 11:
//         alert("Dec")
//         break;


// }

// //3 and //4
// var b = a.getDay();
// switch (b) {
//     case 0:
//         alert("sun")
//     case 1:
//         alert("Mon")
//         break;
//     case 2:
//         alert("tue")
//         break;
//     case 3:
//         alert("wed")
//         break;
//     case 4:
//         alert("thur")
//         break;
//     case 5:
//         alert("fri")
//         break;
//     case 6:
//         alert("sat")
//         break;
// }
//5
// var b = a.getDate() ;
// console.log(b)
// if (b > 15) {
//     console.log("last days of month");
// }
// else {
//     alert("First Fifteen days")
// }





//6

// var a = new Date(2015, 11, 05, 22, 32, 23);
// console.log(a)
// var b = new Date(1970);
// console.log(b)

// var c = a - b
// console.log(c);
// var d = c / 60000;
// console.log(d);


//7
// var a = new Date();
// var b = a.getHours();
// console.log(b);
// if(b >= 12 ){
//     alert("PM")
// }
// else{
//     alert('AM')
// }
//8  and //9

// var a = new Date(2015, 6 - 1, 18);
// var b = new Date();
// var e = a.getTime();
// var f = b.getTime()
// var c = (-e + f) / (1000 * 3600 * 24);
// var d = Math.round(c)
// console.log(d + " days passed sice first Ramazan 2015")
// // console.log(a);
//10
// var a = new Date(2015, 6 - 1, 18);
// var b = a.getTime();
// var c = new Date(2015);
// var d = c.getTime();
// var f = (-c + b) / 1000
// console.log(f + " second pass in th bgnin of the year 2015");
//11
// var a = new Date(2021, 11 - 1, 17, 16, 25, 20);
// var b = new Date();
// var c = b.getHours()
// var f = a.getHours();
// var g = c -  f + " an hour ago it was " + (a) ;
// console.log(g); 


//13
// var w = +prompt("enter your age");
// var a = new Date().getFullYear();
// console.log(typeof (a));
// console.log(typeof (w));
// var d = a - w
// console.log( "your birth month is " + d)

//14
// var customerName = "ali";
// var currentMonth = new Date().getMonth();
// var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var monthName = month[currentMonth];
// var numbeOfUnits = 416;
// var chargesPerUnit = 16;
// var netAmount = numbeOfUnits * chargesPerUnit;
// var late_charges = 350;
// var late_amount = netAmount + late_charges;

// document.write("Name: " + customerName + " <br/>");
// document.write("month: " + monthName + " <br/>");
// document.write("no of units: " + numbeOfUnits + "<br/>");
// document.write("charges per units: " + chargesPerUnit + " <br/>");
// document.write("Net Amount Payable (within Due Date): " + netAmount + " <br/>");
// document.write("late charges: " + late_charges + " <br/>");
// document.write(" Gross Amount Payable (after Due Date): " + late_amount + " <br/>");
















