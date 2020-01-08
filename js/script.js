{
	const playGame = function(playerInput) {
		clearMessages();

		const getMoveName = function(argMoveId){
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
		const playerMove = getMoveName(playerInput);

		const randomNumber = Math.floor(Math.random() * 3 + 1);
		const computerMove = getMoveName(randomNumber);

		printMessage('Mój ruch to: ' + computerMove);
		printMessage('Twój ruch to: ' + playerMove);

		const displayResult = function(argComputerMove, argPlayerMove) {
			if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
				printMessage('Ty wygrywasz!');
			} else if((argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')){
				printMessage('Ja wygrywam!');
			} else if((argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') || (argComputerMove == 'kamień' && argPlayerMove == 'kamień')){
				printMessage('Remis!');
			} else if(argPlayerMove == 'nieznany ruch'){
				printMessage('Wpisz cyfrę 1,2 lub 3!');
			}
		};

		displayResult(computerMove, playerMove);
	}

	document.getElementById('play-rock').addEventListener('click', function() {
		playGame(1)});
	document.getElementById('play-paper').addEventListener('click', function() {
		playGame(2)});
	document.getElementById('play-scissors').addEventListener('click', function() {
		playGame(3)}); 
}