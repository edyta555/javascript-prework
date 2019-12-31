function playGame(playerInput) {
	let playerMove = getMoveName(playerInput);
	clearMessages();
	function getMoveName(argMoveId){
		if(argMoveId == 1){
			return 'kamień';
		} else if(argMoveId == 2){
			return 'papier';
		} else if(argMoveId == 3){
			return 'nożyce';
		} else {
	    	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	    	return 'nieznany ruch';
	    }
	}

	function displayResult(argComputerMove, argPlayerMove) {
		console.log('moves:', argComputerMove, argPlayerMove);
		if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
			printMessage('Ty wygrywasz!');
		} else if((argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')){
			printMessage('Ja wygrywam!');
		} else if((argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') || (argComputerMove == 'kamień' && argPlayerMove == 'kamień')){
			printMessage('Remis!');
		} else if(argPlayerMove == 'nieznany ruch'){
			printMessage('Wpisz cyfrę 1,2 lub 3!');
		}
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);

	/*if(randomNumber == 1){
	  computerMove = 'kamień';
	} else if (randomNumber == 2){
		computerMove = 'papier';
	} else if (randomNumber == 3){
		computerMove = 'nożyce';
	}*/

	printMessage('Mój ruch to: ' + computerMove);

	/*let playerMove = getMoveName(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'));*/

	console.log('Gracz wpisał: ' + playerMove);

	/*if(playerInput == '1'){
	  playerMove = 'kamień';
	} else if (playerInput == '2'){
		playerMove = 'papier';
	} else if (playerInput == '3'){
		playerMove = 'nożyce';
	}*/

	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove);

	/*if((computerMove == 'kamień' && playerMove == 'papier') || ( computerMove == 'papier' && playerMove == 'nożyce') || ( computerMove == 'nożyce' && playerMove == 'kamień')){
	  printMessage('Ty wygrywasz!');
	} else if((computerMove == 'papier' && playerMove == 'kamień') || ( computerMove == 'nożyce' && playerMove == 'papier') || ( computerMove == 'kamień' && playerMove == 'nożyce')){
	  printMessage('Ja wygrywam!');
	} else if((computerMove == 'papier' && playerMove == 'papier') || ( computerMove == 'nożyce' && playerMove == 'nożyce') || ( computerMove == 'kamień' && playerMove == 'kamień')){
	  printMessage('Remis!');
	} else if( playerMove == 'nieznany ruch'){
	  printMessage('Wpisz cyfrę 1,2 lub 3!');
	}*/
}

document.getElementById('play-rock').addEventListener('click', function() {
	playGame(1)});
document.getElementById('play-paper').addEventListener('click', function() {
	playGame(2)});
document.getElementById('play-scissors').addEventListener('click', function() {
	playGame(3)}); 
