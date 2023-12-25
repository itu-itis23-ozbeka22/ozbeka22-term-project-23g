document.addEventListener('DOMContentLoaded', () => {
    const gameSection = document.getElementById("game-section");
    const score = document.getElementById("score");
    const startBtn = document.getElementById("start-btn");
    const restartBtn = document.getElementById("restart-btn");
    const message = document.getElementById("message");
    var counter = 1;
    var shuffledOrder = [1,2,3,4,5]
    function startGame() 
    {
        console.log("Butona Tıklandı");
        counter = 1;
        score.innerHTML = 0
        message.innerHTML = "Let's Play"

        shuffledOrder = shuffleOrder();

        console.log(shuffledOrder);
        displayCards(shuffledOrder);
      
    }




    function shuffleOrder() {
        let cardOrder = [1, 2, 3, 4, 5];
        for (let i = cardOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardOrder[i], cardOrder[j]] = [cardOrder[j], cardOrder[i]];
        }
        return cardOrder; 
    }
    
    
    function displayCards(order) {
        gameSection.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            let divCard = document.createElement("div");
            divCard.classList.add("card");
            divCard.style.backgroundImage = `url('letters/${shuffledOrder[i]}.svg')`; 
            divCard.alt = `Card ${i}`;
            divCard.setAttribute("index",i);
            gameSection.appendChild(divCard);
        }
        setTimeout(() => {
            gameSection.innerHTML = "";

            for (let i = 0; i < 5; i++) {
                let divCard = document.createElement("div");
                divCard.classList.add("card");
                divCard.style.backgroundColor = "orange";
                divCard.alt = `Card ${i}`;
                divCard.addEventListener('click', gameController);
                divCard.setAttribute("index", i);
                gameSection.appendChild(divCard);
            }
        }, 2000);

    }

    function gameController(event) {
        const eventTarget = event.target
        const clickedCard = Number(eventTarget.getAttribute("index"));

        if (counter == shuffledOrder[clickedCard]){
            console.log("counter" + counter)
            console.log("tıklanan kart" + shuffledOrder[clickedCard])
            console.log("doğru")
            eventTarget.style.backgroundImage = `url('letters/${shuffledOrder[clickedCard]}.svg')`; 
            score.innerHTML = (counter)*20
            if(counter == 5){
                gameSection.innerHTML = "";

                message.innerHTML = "You Won"
                for (let i = 0; i < 5; i++) {
                    let divCard = document.createElement("div");
                    divCard.classList.add("card");
                    divCard.style.backgroundImage = `url('letters/${shuffledOrder[i]}.svg')`; 
                    divCard.alt = `Card ${i}`;
                    divCard.setAttribute("index",i);
                    gameSection.appendChild(divCard);
                }
            }
            counter++;
            

        }
        else{
            console.log("counter" + counter)
            console.log("tıklanan kart" + shuffledOrder[clickedCard])
            message.innerHTML = "You Lost"
            gameSection.innerHTML = "";

            for (let i = 0; i < 5; i++) {
                let divCard = document.createElement("div");
                divCard.classList.add("card");
                divCard.style.backgroundImage = `url('letters/${shuffledOrder[i]}.svg')`; 
                divCard.alt = `Card ${i}`;
                divCard.setAttribute("index",i);
                gameSection.appendChild(divCard);
            }
        }
        

    }
 

    startBtn.addEventListener('click', () => {
        startGame()
    });
    restartBtn.addEventListener('click', () => {
        startGame()
    });
});
