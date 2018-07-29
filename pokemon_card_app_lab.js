//not asking for us to create an actual working game, just a framework

//create a player object and a game object

//given an array of cards given, game is split into rounds, each round given 3 cards and fight them against each other, until deck is out of cards (when lenght of deck array < 6, then the game ends because not enough for the next round)

//cards

//player object
const player = {
	playersCurrentScore : 0,
	roundsWon : 0,
	playerHand : [],
	playerScore: 0,
	playersCard:'',
	playerCardSelect(){
		this.playersCard = player.playerHand.splice(Math.floor(Math.random() * this.playerHand.length), 1)[0];
		console.log(this.playersCard);
		return this.playersCard;
		}
	} 

//interactivity -- 
// let chosenCard = prompt("what card you want");
// console.log

// computer object

const computer = {
	computersCurrentScore : 0,
	roundsWon : 0,
	computerHand : [],
	computersCard : '',
	computerCardSelect(){
		this.computersCard = computer.computerHand.splice(Math.floor(Math.random() * this.computerHand.length), 1)[0];
		console.log(this.computersCard);
		}
	} 


//gameObject
const game = {
	library : [{name: "Bulbasaur", damage:60}, 
		 {name: "Caterpie", damage:40},
		 {name: "Charmander", damage:60},
		 {name: "Clefairy", damage:50},
		 {name: "Jigglypuff", damage:60},
		 {name: "Mankey", damage:30},
		 {name: "Meowth", damage:60},
		 {name: "Nidoran - female", damage:60},
		 {name: "Nidoran - male", damage:50},
		 {name: "Oddish", damage:40},
		 {name: "Pidgey", damage:50},
		 {name: "Pikachu", damage:50},
		 {name: "Poliwag", damage:50},
		 {name: "Psyduck", damage:60},
		 {name: "Rattata", damage:30}, 
		 {name: "Squirtle", damage:60}, 
		 {name: "Vulpix", damage:50}, 
		 {name: "Weedle", damage:40}],
	round : 0,
	playedCards : [],
	dealPlayer(){
		//distribute 3 cards
		for (let i = 0; i < 3 ; i++){
		draw = Math.floor(Math.random() * this.library.length);
		randomCard = this.library.splice(this.draw, 1)[0];
		 //.splice will return an array and we want the value, not the array. .splice is = this.library.splice(draw, 1) is essentially replaced with the array it is splicing (card 1,2,3,). Use bracket [0] because we want the value, from the returned array
		player.playerHand.push(randomCard);
		this.playedCards.push(randomCard);
		}
	},
	dealComputer(){
		//distribute 3 cards
		for (let i = 0; i < 3 ; i++){
		draw = Math.floor(Math.random() * this.library.length);
		randomCard = this.library.splice(draw, 1)[0];
		computer.computerHand.push(randomCard);
		this.playedCards.push(randomCard);
		}
	},
	totalCardsLeft(){
		return this.library.length - this.playedCards.length
	},
	
	dealCards(){
		this.dealPlayer();
		console.log(player.playerHand[0])
			console.log(computer.computerHand[0])
		this.dealComputer();
	},

	// need to add player.playerCard();
	
	playRound(){
		this.dealCards();

		for(let i = 0; i < 3; i ++){
			this.battle();
			console.log(`End of fight ${i+1}!`)
		}
		player.playerHand = [];
		computer.computerHand = [];
	},
	// computerCardSelect(){
	// 	i = Math.floor(Math.random() * 3);
	// 	computerCard = this.cards[i];
	// 	},
	battle(){

		if(player.playersCard.damage > computer.computersCard.damage){
			player.playersCurrentScore ++;
			console.log('player wins this fight!')
		}else if(player.playersCard.damage > computer.computersCard.damage){
			computer.computersCurrentScore ++;
			console.log('computer won this fight!')
		}else{
			console.log('looks like a draw! no points are awarded')
		}

	},
	playGame(){
		for(let i = 0; i < 3; i ++){
			this.playRound()
			this.roundWinner();
			};
		this.gameWinner()		
	},
	roundWinner(){
		if(player.playersCurrentScore > computer.computersCurrentScore){
			console.log("Player wins this round!")
		} else if (player.playersCurrentScore < computer.computersCurrentScore){
			console.log("Computer wins this round!")
		}
	},
	gameWinner(){
		if(player.playersCurrentScore > computer.computersCurrentScore){
			console.log("Player wins the game!")
		} else if (player.playersCurrentScore < computer.computersCurrentScore){
			console.log("Computer wins the game!")
		}
	}
}
game.playGame();

