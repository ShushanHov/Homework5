/*2 Given an array of nested arrays. Write a recursive function
that flattens it. (Hint create function that concats arrays).*/
var result=[];
function flattingArray(array){
	for(let i=0;i<array.length;i++){
		if(Array.isArray(array[i])==true){
			flattingArray(array[i]);
		}
		else{
			result=result.concat(array[i]);
		}
	}
}
function	printFlattArray(array){
	flattingArray(array);
	console.log(result);
}
printFlattArray([1,[3,4,[1,2]],10])
printFlattArray([14,[1,[[[3,[]]],1],0]])
