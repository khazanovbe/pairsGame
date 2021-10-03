(function(){
    function shuffle(arr){
        var j, temp;
        for(var i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    function createGameTitle(title){
        const gameTitle = document.createElement('h2');
        gameTitle.innerHTML = title;
        return gameTitle;
    }
    function createGameCard(){
        const cardWrapper = document.createElement('div');
        const card = document.createElement('div');
        let cardValue = document.createElement('p');
        let cardButton = document.createElement('a');

        cardWrapper.classList.add('card', 'text-center');
        cardWrapper.style = "width: 25%; height: 200px;";
        card.classList.add('card-body');
        cardValue.classList.add('card-text');
        cardButton.classList.add('btn', 'btn-primary');

        cardWrapper.append(card);
        card.append(cardValue);
        card.append(cardButton);

        return {
            cardWrapper,
            card,
            cardValue,
            cardButton
        };
    }
    let compare = [];
    function createGameField(size){
        const field = document.createElement('div');
        const arrOfNumbers = shuffle([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8])

        field.classList.add("game-field");
        for (let i=0;i<size*size;i++){
            let newCard = createGameCard();
            newCard.cardValue.innerText = arrOfNumbers[i];
            newCard.cardValue.classList.toggle('hide')
            newCard.cardButton.innerText = "Open card";
            newCard.cardButton.addEventListener('click',function(){
                newCard.cardValue.classList.toggle('hide');
                newCard.cardButton.classList.toggle('hide');
                newCard.card.classList.toggle('opened');
                compare.push(newCard.cardValue.innerText);
                setTimeout(function(){
                    if (compare.length === 2 & compare[0]==compare[1]){
                        alert("Yes! Another pair is finded!");
                        let openedCards = document.querySelectorAll(".opened");
                        console.log(openedCards);
                        for (card of openedCards){
                            card.classList.toggle("opened");
                        }
                        compare = [];
                    }
                    else if (compare.length === 2 & compare[0]!=compare[1]){
                        alert("Try again, is not pair");
                        let openedCards = document.querySelectorAll(".opened");
                        console.log(openedCards);
                        for (card of openedCards){
                            card.querySelector(".card-text").classList.toggle('hide');
                            card.querySelector(".btn").classList.toggle('hide');
                            card.classList.toggle("opened");
                        }
                        compare = [];
                    }
                },300)
                
            })
            field.append(newCard.cardWrapper);
        }
        return field;
    } 
    function createPairsGame(container){
        const gameTitle = createGameTitle("Pairs Game");
        const gameField = createGameField(4);


        container.append(gameTitle);
        container.append(gameField);
    }
    window.createPairsGame = createPairsGame;
})();