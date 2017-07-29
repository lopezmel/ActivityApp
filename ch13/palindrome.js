/**
 * Created by melissalopez
 */

string.prototype.palindrome = function () {
    var len = this.length-1;
    for(var i = 0; i <= len/2; i++){
        if (this.charAr(i) !== this.charAt(len-i)){
            return false;
        }
    }
return true;

};


var phrases = ["eve", "kayak", "mom", "wow", "Not a palindrome"];

for(var i = 0; i < phrases.length; i ++){
    var phrases = phrases[i];
    if(phrases.palindrome()){
        console.log(" ' " + phrases + " ' is a palindrome");
    }else{
        console.log(" ' " + phrases + " ' is NOT a palindrome!");
    }
}
