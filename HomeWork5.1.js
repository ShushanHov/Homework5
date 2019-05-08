/*1 Given an array. Write a recursive function that removes the
first element and returns the given array. (without using
arr.unshift(),assign second element to first, third element to
second...)*/

var i=0;
function removeFirstElement(array){
	if (i>array.length-2){
 		array=array.splice(0, array.length-1);
		console.log(array);
	}
	else {
		array[i]=array[i+1];
		i++;
		removeFirstElement(array);
	}
}

removeFirstElement([6,78,'n',0,1]);
removeFirstElement([5]);
removeFirstElement([]);
