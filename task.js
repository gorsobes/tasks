/**
palindrome

Input: x = 121
Output: true

Input: x = -121
Output: false

Input: x = 10
Output: false

**/

var isPalindrome = function(x) {
    revX=x.toFixed(0).split('').reverse().join('')-0;
    if (revX === x ){
        return true;
    }
    return false;

};
