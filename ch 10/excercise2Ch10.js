/**
 * Created by melissalopez
 */


function compareName(colaA, colaB) {
    if(colaA.name > colaB.name){
        return 1;
    }
    else if (colaA.name === colaB.name){
        return 0;
    } else {
      return -1;
    }

}

function compareCalories(colaA, colaB) {
    if(colaA.calories > colaB.calories){
        return 1;
    } else if (colaA.calories === colaB.calories){
        return 0;
    } else {
        return -1;
    }

}

function compareColor(colaA, colaB) {
    if(colaA.color > colaB.color){
        return 1;
    } else if (colaA.color === colaB.color){
        return 0;
    } else {
        return -1;
    }

}



product.sort(compareName);
console.log("Products sorted by name: ");
printProducts(product);

products.sort(compareCalories);
console.log("Products sorted by calories: ");
printProducts(products);

products.sort(compareColor);
console.log("Products sorted by color: ");
printProducts(products);