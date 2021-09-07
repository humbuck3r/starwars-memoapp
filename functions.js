document.addEventListener('DOMContentLoaded', () =>{
    const cardArray =[
        {
            name: 'alcon',
            img: './img/alcon.png',
        }
        ,
        {
            name: 'at',
            img: './img/at.png',
        }
        ,
        {
            name: 'bot',
            img: './img/bot.png',
        }
        ,
        {
            name: 'deat',
            img: './img/deathstar.png',
        }
        ,
        {
            name: 'tie',
            img: './img/tie.png',
        }
        ,
        {
            name: 'deat',
            img: './img/xwing.png',
        }
        ,
        {
            name: 'alcon',
            img: './img/alcon.png',
        }
        ,
        {
            name: 'at',
            img: './img/at.png',
        }
        ,
        {
            name: 'bot',
            img: './img/bot.png',
        }
        ,
        {
            name: 'deat',
            img: './img/deathstar.png',
        }
        ,
        {
            name: 'tie',
            img: './img/tie.png',
        }
        ,
        {
            name: 'deat',
            img: './img/xwing.png',
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	var cardsChosen = []
	var cardsChosenId = []
	const cardsWon = []
	const resultDisplay = document.querySelector('#score')

	function createBoard(){
		for(let i = 0; i<cardArray.length; i++){
			var card = 	document.createElement('img')
			card.setAttribute('src', 'img/logo.png')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
		}
	}
	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]

		if(optionOneId==optionTwoId){
			cards[optionOneId].setAttribute('src', 'img/logo.png')
			cards[optionTwoId].setAttribute('src', 'img/logo.png')
			alert('Hey! estas dandole click a la misma carta')
		}
		else if(cardsChosen[0]===cardsChosen[1]){
			
			cards[optionOneId].setAttribute('src', 'img/blanc.png')
			cards[optionTwoId].setAttribute('src', 'img/blanc.png')
			cards[optionOneId].removeEventListener('click', flipCard)
			cards[optionTwoId].removeEventListener('click', flipCard)
			cardsWon.push(cardsChosen)
		}
		else{
			cards[optionOneId].setAttribute('src', 'img/logo.png')
			cards[optionTwoId].setAttribute('src', 'img/logo.png')
			
		}
		cardsChosen=[]
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if(cardsWon.length===cardArray.length/2){
			resultDisplay.textContent = "GANASTE"
		}
	}
	function flipCard(){
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if(cardsChosen.length === 2){
			setTimeout(checkForMatch, 500)
		}
		
	}

	createBoard()


})
