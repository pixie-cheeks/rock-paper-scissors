function getComputerChoice() {
	let randomInt = Math.ceil(Math.random() * 3);
	switch (randomInt) {
		case 1:
			console.log('Rock');
			break;
		case 2:
			console.log('Paper');
			break;
		case 3:
			console.log('Scissors')
			break;
	}
}

getComputerChoice();