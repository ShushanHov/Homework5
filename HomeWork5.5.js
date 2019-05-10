/*5. Given an object. Invert it (keys become values and values
become keys). If there is more than key for that given value
create an array.*/

var originalObject=new Object();
originalObject={
	a: 1,
	b: 2,
	c:3
};
var newObject=new Object();
for (let key in originalObject){
	newObject[String(originalObject[key])]=key;
}
console.log(originalObject);
console.log(newObject);
