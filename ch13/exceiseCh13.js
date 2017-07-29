/**
 * Created by melissalopez
 */


function SpaceRobot(name, year, owner, homePlanet) {

    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function () {
    alert(this.name + " says Sir, If I say venture an opnion...");
}

SpaceRobot.prototype.pilot = function () {
    alert(this.name + " says Thrusters? Are they important?");
}

var c3po = new SpaceRobot("c3po", 1977, "Luke Skywalker", "Tatoonie");

c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);


var simon = new SpaceRobot("Simon", 2009, "Varla diana", "Earth");
simon.makeCoffe();
simon.blinkLights();
simon.speak();