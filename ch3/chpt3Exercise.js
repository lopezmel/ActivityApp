/**
 * Created by melissalopez on 7/7/17.
 */

//function
function dogYears(dogName, age) {
    var years = age * 7;
    console.log(dogName + "is" + years + " years old");
}

//variable
var myDog = "Fido";
dogYears(myDog, 4);

//function
function makeTea(cups, tea) {
    console.log("Brewing " + cups + "cups of " + tea);
}

//variable
var guests = 3;
makeTea(guests, "Earl Grey");


//function
function secret() {
    console.log("The secret of life is 42");
}

secret();


//function
function speak(kind) {
    var defaultSound = "";
    if (kind == "dog"){
        alert("woof");
    }
    else if(kind == "cat"){
        alert("Meow");
    }
    else {
        alert(defaultSound);
    }

}
//variable
var pet = prompt("Enter a type of pet: ");
speak(pet);