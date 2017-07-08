/**
 * Created by melissalopez
 */

var products = ["choo choo Chocolate", "Icy Mint", "Cale Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];

var i = 0;
while (i < hasBubbleGum.length){
    if (hasBubbleGum[i]){
        console.log(products[i] + "contans bubble gum");
    }
    i = i + 1;
}
