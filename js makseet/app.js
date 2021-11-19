var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
document.write("Name: " + firstName + " " + lastName + "<br>");
var Roll_no = prompt("Enter Your roll Number");
document.write("Roll No: " + Roll_no + "<br>");
var institute = prompt("Your Institute");
document.write("Institute: " + institute + "<br>");
var Eng = +prompt("enter your Eng number");
var urdu = +prompt("enter your urdu number");
var maths = +prompt("enter your maths number");
var phy = +prompt("enter your phy number");
var chem = +prompt("enter your chem number");
var obtMarks = Eng + urdu + maths + phy + chem;
var totalMarks = 500;
document.write("Eng: " + Eng + "<br>");
document.write("urdu: " + urdu + "<br>");
document.write("maths: " + maths + "<br>");
document.write("phy: " + phy + "<br>");
document.write("chem: " + chem + "<br>");
document.write("obatined Marks: " + obtMarks + "<br>");
document.write("total marks: " + totalMarks + "<br>")
var percentage = obtMarks / totalMarks * 100;
document.write("percentage: " + percentage + "<br>")
// var a=10;
// var c = a++;

