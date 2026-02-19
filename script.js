function trailingZeros(n) {
  //your JS code here. If required.
	let fact = 1
	while(n > 0){
		fact = fact * n
		n--
	}
	let temp = toString(fact)
	let count = 0;
	for(let i = 0 ; i < temp ; i++){
		if(temp[i] === "0"){
			count++
		}
	}
	return count;
}

const input = Number(prompt("Enter a number"));
alert(trailingZeros(input));

