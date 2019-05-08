
function sumOfDigits(number){
	while(number<10&&number>0){
		myStringNumber=String(number).split('');
		number=0;
		for(let i=0;i<myStringNumber.length;i++){
			number=number+(+myStringNumber[i]);
		}
	}
	console.log(number);
}
sumOfDigits(14)
sumOfDigits(29)
sumOfDigits(999999999999)


