// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = 3;
var add = num1 + 5;
document.write(`Sum of ${num1} & 5 is ${add}  </br> </br> </br>`);
console.log("Sum of 3 & 5 = " + add);
document.write("<hr>");


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

document.write(`Subtraction 8-5 = ${add - 5}  </br>`);
document.write(`Multiplication 8*5 = ${add * 5}  </br>`);
document.write(`Division 8/5 = ${add / 5}  </br>`);
document.write(`Modulus 8%5 = ${add % 5}  </br> </br> </br>`);
document.write("<hr>");

// 3. Do the following using JS1 Mathematic Expressions 
// a. Declare a variable.
var number;
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
document.write("Value after variable declaration is" + " " + number + "</br>");
console.log(number);
// c. Initialize the variable with some number. 
var number = 5;
// d. Show the value of variable in your browser like “Initial value: 5”. 
document.write(`Initial Value : ${number} </br>`);
console.log("Initial Value : " + " " + number);
// e. Increment the variable.
var number = 5;
number++;
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
document.write(`Value after increment is : ${number} </br>`);
console.log("Value after increment is :" + " " + number);
// g. Add 7 to the variable. 
number += 7;
// h. Show the value of variable in your browser like “Valu after addition is: 13”. 
document.write(`Value after addition is : ${number} </br>`);
console.log("Value after addition is :" + " " + number);
// i. Decrement the variable.
number--;
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
document.write(`Value after decrement is : ${number} </br>`);
console.log("Value after decrement is :" + " " + number);
// k. Show the remainder after dividing the variable’s value by 3.
var number = 12 % 3;
// l. Output : “The remainder is : 0”.
document.write(`The reminder is : ${number} </br> </br> </br>`);
console.log("The reminder is :" + " " + number);
document.write("<hr>");
// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600 * 5;
document.write(`Total cost of buy 5 tickets to a movie is ${ticketPrice}PKR </br> </br> </br> `);
console.log(ticketPrice);
document.write("<hr>");
// 5. Write a script to display multiplication table of any number in your browser. E.g

var table = prompt("Table of any number");
document.write(`<h3>Table of ${table}</h3>`);
document.write(`${table} x 1 = ${table*1} </br>`);
document.write(`${table} x 2 = ${table*2} </br>`);
document.write(`${table} x 3 = ${table*3} </br>`);
document.write(`${table} x 4 = ${table*4} </br>`);
document.write(`${table} x 5 = ${table*5} </br>`);
document.write(`${table} x 6 = ${table*6} </br>`);
document.write(`${table} x 7 = ${table*7} </br>`);
document.write(`${table} x 8 = ${table*8} </br>`);
document.write(`${table} x 9 = ${table*9} </br>`);
document.write(`${table} x 10 = ${table*10} </br> </br> </br> </br> `);

document.write("<hr>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

// a. Store a Celsius temperature into a variable.
var calsiusTemperature = 25;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheit = (calsiusTemperature * 9 / 5) + 32;
document.write(`${calsiusTemperature}°C is ${fahrenheit}°F </br>`);
console.log(`${calsiusTemperature}°C is ${fahrenheit}°F`);
// c. Now store a Fahrenheit temperature into a variable.
var fahrenheit = 70;
// d. Convert it to Celsius & output “NNoF is NNoC”.
var calsiusTemperature = (fahrenheit - 32) * 5 / 9;
document.write(`${fahrenheit}°F is ${calsiusTemperature}°C`);
console.log(`${fahrenheit}°F is ${calsiusTemperature}°C`);
document.write("<hr>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variable
var heading = "<h1>Shopping Cart</h1>";
document.write(heading);
// a. Price of item 1
var item1 = 650;
document.write(`Price of item 1 is ${item1} </br>`);
// c. Ordered quantity of item 
var quantity1 = 3;
var calculation1 = 650 * 3;
document.write(`Quantity of item 1 is ${quantity1} </br>`);
// b. Price of item 2 
var item2 = 100;
document.write(`Price of item 2 is ${item2} </br>`);
// d. Ordered Quantity of item 2 
var quantity2 = 7;
var calculation2 = 100 * 7;
document.write(`Quantity of item 2 is ${quantity2} </br> `);
// e. Shipping charges
var shippingCharges = 100;
document.write(`Shipping Charges ${shippingCharges} </br> </br>`);
var totalcost = calculation1 + calculation2 + shippingCharges;
// Compute the total cost & show the receipt in your browser.
document.write(`Total cost of your order is ${totalcost} </br>`);
console.log(`Total cost of your order is ${totalcost}`);
document.write("<hr>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var heading = "<h1>Marks Sheet</h1>";
document.write(heading);
var totalMarks = 980;
document.write(`Total marks : ${totalMarks} </br>`);
var marksObtain = 804;
document.write(`Obtain marks : ${marksObtain} </br>`);
var percentage = (marksObtain / totalMarks) * 100;
document.write(`Percentage : ${percentage}% </br>`);
console.log(`Percentage : ${percentage}% </br> </br>`);
document.write("<hr>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var currency = "<h1>Currency in PKR</h1>";
document.write(currency + "</br>");
var totalCurrencypakistanirupees = (10 * 104.80) + (25 * 28);
document.write(`Total Currency in PKR: ${totalCurrencypakistanirupees} </br> </br>`);
console.log(`Total Currency in PKR: ${totalCurrencypakistanirupees}`);
document.write("<hr>");


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5
// b. Multiply by 10 
// c. Divide the result by 2 Perform all calculations in a single expression
var result = ((4 + 5) * 10) / 2;
document.write(`Arithmetic in Following Sequence = ${result} </br> </br>`);
console.log(result);
document.write("<hr>");


// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
var age = "<h1>Age Calcuator </h1>"
document.write(age + "</br>");
var currentYear = 2016;
document.write(`Current Year: ${currentYear} </br>`);
console.log(`Current Year: ${currentYear}`);
// b. Store their birth year in a variable.
var birthYear = 1992;
document.write(`Birth Year: ${birthYear}</br> `);
console.log(`Birth Year: ${birthYear}`);
// c. Calculate their 2 possible ages based on the stored values.
var yourAge = 24;
document.write(`Your Age is: ${yourAge} </br>`);
console.log(`Your Age is: ${yourAge}`);
document.write("<hr>");
// Output them to the screen like so: “They are either NN or NN years old”.

// 12. The Geometrizer: Calculate properties of a circle.
var the = "<h1>The Geometrizer</h1>"
document.write(the);
// a.Store a radius into a variable.
var radius = 20;
// b.Calculate the circumference based on the radius, and output “The circumference is NN”
document.write(`Radius of a Circle: ${radius}</br>`);
console.log()
var pi = 3.142;
var circumference = 2 * pi * radius;
document.write(`The circumferene is: ${circumference} </br>`);
var area = pi * radius * radius;
document.write(`The area is: ${area}`);
console.log(`The area is: ${area}`);
document.write("<hr>");

// .(Hint: Circumference of a circle = 2 π r, π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”.
// (Hint: Area of a circle = π r2, π = 3.142)



// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
var supply = "<h1>The Lifetime Supply Calculator</h1>";
document.write(supply);
// a. Store your favorite snack into a variable 
var favouriteSnack = "chochlate chips";
document.write(`Favourite Snack: ${favouriteSnack} </br>`);
// b. Store your current age into a variable. 
var currentAge = 15;
document.write(`Current age: ${currentAge} </br>`);
// c. Store a maximum age into a variable. 
var maxAge = 65;
document.write(`Estimated Maximum age: ${maxAge} </br>`);
// d. Store an estimated amount per day (as a number). 
var amount = 3;
document.write(`Amount of snacks per day: ${amount} </br>`);
// e. Calculate how many would you eat total for the rest of your life.
var yearsLeft = maxAge - currentAge;
var totalDays = yearsLeft * 365;
var totalSupply = totalDays * amount;
document.write(`You will need ${totalSupply} ${favouriteSnack} to last you until the ripe old age of ${maxAge}`);
// Output the result to the screen like so: “You will need NNNN to las