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
	if (playerSelection === null) {
		return 'The player cancelled the game.'
	}

	if (playerSelection === computerSelection) {
		return 'It\'s a Draw. Nobody Wins';
	} else if (playerSelection === 'Rock') {
		if (computerSelection === 'Scissors') {
			return 'You Win! Rock beats Scissors'
		} else {
			return 'You Lose! Paper beats Rock'
		}
	} else if (playerSelection === 'Paper') {
		if (computerSelection === 'Rock') {
			return 'You Win! Paper beats Rock'
		} else {
			return 'You Lose! Scissors beat Paper'
		}
	} else if (playerSelection === 'Scissors') {
		if (computerSelection === 'Paper') {
			return 'You Win! Scissors beat Paper'
		} else {
			return 'You Lose! Rock beats Scissors'
		}
	}
}

function getPlayerChoice() {
	let input = prompt('Type your weapon.');
	if (input === null) {
		return input;
	}
	let standardInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
	switch (standardInput) {
		case 'Rock':
		case 'Paper':
		case 'Scissors':
			return standardInput;
		default:
			console.log(`There is a misinput. The input was: ${input}.`);
			return getPlayerChoice();
	}
}

function game() {
	let computerScore = 0;
	let playerScore = 0;
	for (i = 0; i < 5; i++) {
		let outcome = playRound(getPlayerChoice(), getComputerChoice());
		if (outcome.includes('You Win!')) {
			playerScore++;
		} else if (outcome.includes('You Lose!')) {
			computerScore++;
		} else if (outcome.includes('cancelled')) {
			console.log(outcome);
			return false;
		}
		console.log(outcome);
	}

	if (playerScore > computerScore) {
		let scoreDifference = playerScore - computerScore;
		console.log(`The player has Won by ${scoreDifference}\
		 round${scoreDifference > 1 ? 's' : ''}!`);
		return true;
	} else if (playerScore < computerScore) {
		let scoreDifference = computerScore - playerScore;
		console.log(`The computer Wins by ${scoreDifference}\
		round${scoreDifference > 1 ? 's' : ''}!`);
		return true;
	} else {
		console.log('It was a Draw!');
		return true;
	}
 }