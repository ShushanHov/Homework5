/*4. Given an array and a number N.  Write a recursive
function that rotates an array N places to the left. (Hint: to
add element to the beginning use arr.unshift())
*/
let movedElement;
function rotateArray(array,number){
	if(number<0)number=array.length+number;
	if (number>0){
		movedElement=array.shift();;
		array.push(movedElement);
		number--;
    	rotateArray(array,number);
	}
	else {
    console.log(array);
	}
}  
rotateArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3)
rotateArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2)
