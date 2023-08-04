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


function getPlayerChoice(event) {
	let playerChoice = event.target.textContent;
	let outcome = playRound(playerChoice, getComputerChoice());

	output.textContent = outcome;
}

function setScore(computerScore, playerScore) {
	scoreBoard.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
}

function game() {
	if (resetCondition) {
		endResult.textContent = '';
		setScore(0, 0);
		resetCondition = false;
	}
	let computerScore = parseInt(scoreBoard.textContent.split(' ')[1]);
	let playerScore = parseInt(scoreBoard.textContent.split(' ')[3]);
	if (output.textContent.includes('You Win!')) {
		playerScore++;
	} else if (output.textContent.includes('You Lose!')) {
		computerScore++;
	}
	setScore(computerScore, playerScore);

	if (playerScore === 5 || computerScore === 5) {
		if (playerScore > computerScore) {
			endResult.textContent = 'The player has won the game!';
		} else if (playerScore < computerScore) {
			endResult.textContent = 'The player has lost the game.';
		} else {
			endResult.textContent = 'It\'s a draw.';
		}
		resetCondition = true;
	}
}

const output = document.querySelector('.output');
const buttons = document.querySelectorAll('button');
const endResult = document.querySelector('.endresult');
const scoreBoard = document.querySelector('.scores');

let resetCondition = false;

buttons.forEach(element => element.addEventListener('click', getPlayerChoice));
buttons.forEach(element => element.addEventListener('click', game));
