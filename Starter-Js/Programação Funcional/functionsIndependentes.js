const random = (number, Math) => {
	return Math.floor(Math.random() * number);
}

// recurse
// Find the factorial of a number

const factorial = x => {
	
	if (x === 1) {
		return 1;
	}	

	return x * factorial(x - 1)
}