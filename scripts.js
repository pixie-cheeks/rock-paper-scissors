function getComputerChoice() {
	let randomInt = Math.ceil(Math.random() * 3);
	switch (randomInt) {
		case 1:
			return 'Rock';
			break;
		case 2:
			return 'Paper';
			break;
		case 3:
			return 'Scissors';
			break;
	}
}

function playRound(playerSelection, computerSelection) {
	let playerInput = playerSelection.charAt(0).toUpperCase() + 
		playerSelection.slice(1).toLowerCase();

	if (playerInput === computerSelection) {
		return 'It\'s a Draw. Nobody Wins.';
	} else if (playerInput === 'Rock') {
		if (computerSelection === 'Scissors') {
			return 'You Win! Rock beats Scissors'
		} else {
			return 'You Lose! Paper beats Rock'
		}
	} else if (playerInput === 'Paper') {
		if (computerSelection === 'Rock') {
			return 'You Win! Paper beats Rock'
		} else {
			return 'You Lose! Scissors beat Paper'
		}
	} else if (playerInput === 'Scissors') {
		if (computerSelection === 'Paper') {
			return 'You Win! Scissors beat Paper'
		} else {
			return 'You Lose! Rock beats Scissors'
		}
	}
}