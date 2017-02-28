module.exports = function getBase(number) {
	let copyNum = number;
	let base = 2;
	
	if (copyNum[0] == '1' && copyNum.split('').slice(1).every((currentValue) => currentValue == '0'))
		return '9'.repeat(copyNum.length - 1);
	
	while (copyNum) {
		if (copyNum % base == 1)
			copyNum = Math.floor(copyNum / base);
		else {
			copyNum = number;
			base++;
		}
	}
	return base;
}
