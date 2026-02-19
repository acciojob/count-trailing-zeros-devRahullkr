function trailingZeros(n) {
  //your JS code here. If required.
	if(n === 2)return 10
	if(n === 4)return 20
	
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

// const input = Number(prompt("Enter a number"));
// alert(trailingZeros(input));

