/**
 * Created by melissalopez
 */


function dogCatcher(obj) {

}


function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

var meow = new Cat("Mewo", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);

var fido = {name: "Fido", breed: "Mixed", weight: 38};

function Dog(name, breed, weight) {

    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if(this.weight > 25){
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!")
        }

    };
}

var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, whiskers, fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++){
    if(dogCatcher(dog[i])){
        console.log(dog[i].name + " is a dog!");
    }
}