/**
 * Created by melissalopez
 */


function multN(n) {
    return function multBy(m) {
        return n*m;

    };

}

var multBy3 = multN(3);

console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 3: " + multBy3(3));



function makecounter() {
    var count = 0;

    return {
        increment: function () {
            count++;
            return count;

        }
    };

}

var counter = makecounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());