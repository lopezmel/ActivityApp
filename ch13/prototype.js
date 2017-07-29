/**
 * Created by melissalopez
 */



function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
}

showing.prototype = new Dog();

ShowDog.prototype.league = "Webville";
showDog.prototype.stack = function () {
    console.log("Stack");
};

showDog.prototype.bait = function () {
    console.log("Bait");
};

showDog.prototype.gait = function () {
    console.log(kind + "ing");

};

showDog.prototype.groom = function () {
    console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var spotty = new ShowDog("Spotty", "Scottish Terrier", 15, "Cookies");
var beatrice = new ShowDog("Beautrice", "Pomeranian", 5, "Hamalton");

fido.bark();
fluffy.bark();
spot.bark();
spotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();
