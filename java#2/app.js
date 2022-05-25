// Chapter3
// Question1 
var age = 15
alert("I am " + age + " years old");
// Question2 
var N = 14
alert("You have visited the site " + N + " times");
// Question3
document.write("My birth year is 1990")
document.write("<br>Data type of declared variable is number<br><br>")
document.write("<b>John Doe</b> ordered 5 <b>T-shirt</b>(s) on XYZ clothing store")
// Chapter4
// Question1 
var name, age, qualification;
// Question 2
// legal varaible
var myname = "Ibrahim Ahmed";
var myName = "Ibrahim Ahmed";
var my_name = "Ibrahim Ahmed";
var _my_name = "Ibrahim Ahmed";
var $my_name = "Ibrahim Ahmed";

// illegal variable
// var @myname = "Ibrahim Ahmed";
// var 123myName = "Ibrahim Ahmed";
// var my name = "Ibrahim Ahmed";
// var month&year = "Ibrahim Ahmed";
// var birth-year = "2004";
// Question 3
document.write("<h2>Rules for naming JS variables</h2>");
document.write("a) Variable names can only contain number,$,_. and letter <b> For example : $my_1stVariable.</b> <br>");
document.write("b) Variable must begin with a letter, $ or _. <b> For example : $name,_name or name.</b> <br>");
document.write("c) Variable names are case sensitive.<br>");
document.write("d) Variable names should not be JS keywords.");
// Chapter 5
// Question 1
var num1 = 34;
var num2 = 45;
var addNumbers = num1 + num2;
document.write("<br>");
document.write("<br>");
document.write("Sum of " + num1 + " and " + num2 + " is " + addNumbers);
// Question 2 



var num1 = 34;
var num2 = 45;
var subNumbers = num1 - num2;
var mulNumbers = num1 * num2;
var divNumbers = num1 / num2;
var Module = num1 % num2;

document.write("<br>");
document.write("<br>");
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subNumbers + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mulNumbers + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + divNumbers + "<br>");
document.write("Reminder of " + num1 + " and " + num2 + " is " + Module + "<br>");



// Question 3 



var number1;
document.write("<br>");
document.write("<br>");
document.write("Value after variable declaration is:" + number1 + "<br>");


number1 = 5;
document.write("Value after variable declaration is:" + number1 + "<br>");


number1++
document.write("Initial value: " + number1 + "<br>");


number1 = number1 + 7;
document.write("Value after addition is:" + number1 + "<br>");

number1--;
document.write("Value after decrement is:" + number1 + "<br>");

number1 = number1 % 3;
document.write("The remainder is : " + number1 + "<br>");
// Question 4



var ticketPrice = 600;
var numberOfTickets = 5;
var boughtTickets = ticketPrice * numberOfTickets;
document.write("<br>");
document.write("<br>");
document.write("Total cost to  " + numberOfTickets + " buy tickets to a movie  is " + boughtTickets + "PKR");

// Question 5



var tableNumber = 4;
document.write("<h2>Table of 4 </h2>")
document.write("4x1= " + 4 * 1 + "<br>" + "4x2= " + 4 * 2 + "<br>" + "4x3= " + 4 * 3 + "<br>" + "4x4= " + 4 * 4 + "<br>" + "4x5= " + 4 * 5 + "<br>" + "4x6= " + 4 * 6 + "<br>" + "4x7= " + 4 * 7 + "<br>" + "4x8= " + 4 * 8 + "<br>" + "4x9= " + 4 * 9 + "<br>" + "4x10= " + 4 * 10 + "<br>")
// Question 6

var Celsius = 25;
var fahrenheit = 70;

c = (fahrenheit - 32) * 5 / 9;
f = (Celsius * 9 / 5) + 32;

document.write("<br>");
document.write(Celsius + "<sup>o</sup>C is " + f + "<sup>o</sup>C");
document.write("<br>");
document.write(fahrenheit + "<sup>o</sup>F is " + c + "<sup>o</sup>C ");
// Question 7


var item1 = 4000;
var item2 = 2500;
var item1Qty = 5;
var item2Qty = 2;
var shippingCharges = 800;


var priceViaQtyItem1 = item1 * item1Qty;
var priceViaQtyItem2 = item2 * item2Qty;

var priceCal = priceViaQtyItem1 + priceViaQtyItem2;

var totalCost = priceViaQtyItem1 + priceViaQtyItem2 + shippingCharges;

document.write("<h2>Shopping Cart</h2>");

document.write("PRODUCT -----");
document.write("<br>");
document.write("AI Watch (item1)  × " + item1Qty + " ----------------- " + priceViaQtyItem1 + "PKR");
document.write("<br>");
document.write("Mac Book (item2)  × " + item2Qty + " ----------------- " + priceViaQtyItem2 + "PKR");
document.write("<br>");
document.write("Subtotal " + " ---------------------------------- " + priceCal + "PKR");
document.write("<br>");
document.write("Total cost of your order is :  " + " --------- " + totalCost + "PKR");
// Question 8


var totalMarks = 980;
var obtMarks = 804;
var per = obtMarks / totalMarks * 100;

document.write("<h2>Marks Sheet</h2>")
document.write("Total Marks : " + totalMarks + "<br>Obtained Marks : " + obtMarks + "<br>Percentage : " + per + "%");
//Question 9
var oneUSD = 193.65;
var oneRiyal = 51.63;


var PKR2USD = oneUSD * 10;
var PKR2Riyal = oneRiyal * 10;
var totalCost = PKR2USD + PKR2Riyal;
document.write("<h1>Currency In PKR</h1>");
document.write("Total Currency in PKR : " + totalCost);
//Question 10
var SingleExpression = 5 * 10 / 2;
    document.write("<br>")
    document.write("<br>")
    
    document.write("Single Expression calculation is : " + SingleExpression);
//Question11
var currentYear = 2022;
var birthYear = 1998;

var myAge = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>")
document.write("Current Year : " + currentYear + "<br>Birth Year is" + birthYear + "<br>My age is  : " + myAge);

// / Question 12


    var radius = 20;
    var pi = 3.142;
    var cf = 2 * pi * radius;
    var area = pi * radius * radius;

    document.write("<h1>The Geometrizer</h1>");
    document.write('Radius of Circle is : ' + radius);
    document.write("<br>");
    document.write('The Circumference of Circle is : ' + cf);
    document.write("<br>");
    document.write('The Area of Circle is : ' + pi);

//  Question 13


    var favsnack = "TUC";
    var currentAge = 24;
    var maxAge = 65;
    var snankPerDay = 2;
    var snankPerDay = 2;
    var ageCalculate = maxAge - currentAge;
    var totalSnaks = ageCalculate * snankPerDay;
    document.write("<h1>The Lifetime Supply Calculator</h1>");
    document.write("<br>");
    document.write("Favorite Snack:  " + favsnack);
    document.write("<br>");
    document.write("Current Age: " + currentAge);
    document.write("<br>");
    document.write("Estimated Maximum Age:  " + maxAge);
    document.write("<br>");
    document.write("Amount of Snacks per day:  " + snankPerDay);
    document.write("<br>");
    document.write("You will need " + totalSnaks + " " + favsnack + " to last you untill the ripe old age of " + maxAge);












