/**
 * Created by melissalopez
 */


var price = 28.99; //assigning a varible to price
var discount = 10; //assigning a variable to discount
var total = price - (price* (discount/100)); // equation to find the total price

//once the total equation runs  if its over $25 give free shipping
if (total > 25) {

    freeShipping();
}




var count = 10; //assigning a variable to price

//if the count is greater than 0 juggle and decrement the count each time
while (count > 0) {
    juggle();
    count = count - 1;
}




var dog = {name: "Rover", weight: 35}; //assigning a name and weight to the variable

//if the dob is over 30 its a Woof and if not its woof
if (dog.weight > 30) {

    alert("Woof Woof");

} else {
    alert("woof woof");
}



var circleRadius = 20;//assigning a number to the variable
var circleArea = Math.PI * (circleRadius*circleRadius); //doing the equation