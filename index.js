function getCard() {
	let Pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

	const arrOfCards = [ '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A' ];
	const arrOfSuits = [ 'Clubs', 'Spades', 'Hearts', 'Diamonds' ];

	let card = {
		num: Pick(arrOfCards),
		suit: Pick(arrOfSuits)
	};

	return card;
}

console.log(getCard());
