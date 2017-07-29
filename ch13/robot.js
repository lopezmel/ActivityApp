/**
 * Created by melissalopez
 */

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function () {

    alert("Warning!");
};

Robot.prototype.makeCoffee = function () {
    alert("Making coffee!");
};


Robot.prototype.blinkLights = function () {
    alert("Blink!");
};

var robby = new Robot("Robby", 1956, "Dr.Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function () {
    alert("Fetching a coffee from starbucks")
};

rosie.cleanHouse = function () {
    alert("Cleaning! Spic and Span Soon!")
};

console.log(robby.name + " and is ownd by " + robbie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);


robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);