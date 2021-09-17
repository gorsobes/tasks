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
	/**  десятичные знаки после запятой отсутствуют x.toFixed()           
	( .split('').reverse().join('')-0 )
	из числа в массив . реверс . из массива в строку . и преврашаем в число ( -0 )
	*/
    revX=x.toFixed().split('').reverse().join('')-0;
    if (revX === x ){
        return true;
    }
    return false;
};

