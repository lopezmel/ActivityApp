/**
 * Created by melissalopez
 */

var passenger = [{name: "Jane Doloop", paid: true, ticket: "coach" },
    {name: "Dr.Evel", paid: true, ticket: "firstClass"},
    {name: "Sue Property", paid: false, ticket: "firstclass"},
    {name: "Jown Funcall", paid: true, ticket: "premium"}

];


function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass"){
        orderFunction = function () {
            alert("Would you like a cocktail or wine?");
        };
    }else if (passenger.ticket === "premium"){
        orderFunction = function () {
            alert("Would you like wine, cola, or water?");

        };
    }else {
        orderFunction = function () {
            alert("Your choise is cola or water.");

        };
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass"){
        orderFunction = function () {
            alert("would you like chicken or pasta?")

        };
    }else if (passenger.ticket === "premium"){
        orderFunction= function () {
            alert("Would you like a snack box or cheese plate?");

        };
    } else {
        orderFunction = function () {
            alert("Would you like peanuts or pretzels?");

        };
    }
    return orderFunction;
}


function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDinnerOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);

    getDinnerOrderFunction();

    getDinnerOrderFunction();

    getDrinkOrderFunction();

    getDrinkOrderFunction();

    getDrinkOrderFunction();


}
    function ServePassengers(passengers) {
    for(var i = 0; i < passenger.length; i++){
        serveCustomer(passenger[i]);
    }

    }





