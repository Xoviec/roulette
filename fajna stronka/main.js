let container = document.querySelector(".game-cointainer");
let btn = document.getElementById('spin');
let obrot = Math.floor(Math.random() * 359)+1;
let licznik = obrot
let number = obrot + 3240;
let liczba = 0
let winings= [5,4,3,2,1,0,14,13,12,11,10,9,8,7,6,5]
let messageWinner = document.getElementById('winner');
let czerwony = "czerwony"
let czarny = "czarny"
let zielony = "zielony"
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('change-box'));
let displayLicznik = 0
let betSet = document.getElementById("bet-set")
let betRed = document.getElementById("bet-Red")
let betGreen = document.getElementById("bet-Green")
let betBlack = document.getElementById("bet-Black")
let balance = document.getElementById("balance")
let betAmmountRed = 0 
let betAmmountGreen = 0 
let betAmmountBlack = 0 

betRed.addEventListener("click", betFunctionRed);
betGreen.addEventListener("click", betFunctionGreen);
betBlack.addEventListener("click", betFunctionBlack);

function betFunctionRed(){
    betAmmountRed += parseInt(display.value)
    balance.innerText -= display.value
    console.log(betAmmountRed)
    betColor = "red"
}
function betFunctionGreen(){
    betAmmountGreen += parseInt(display.value)
    balance.innerText -= display.value
    console.log(betAmmountGreen)
    betColor = "green"
}
function betFunctionBlack(){
    betAmmountBlack += parseInt(display.value)
    balance.innerText -= display.value
    console.log(betAmmountBlack)
    betColor = "black"
}
function resetBetAmmount(){
    betAmmountBlack = 0
    betAmmountRed = 0
    betAmmountGreen = 0

    
}
function redWin(){
    if (betColor == "red"){
        win = (betAmmountRed * 2)
        reszta = parseInt(balance.innerText)
        console.log(reszta)
        reszta += win
        balance.innerText = reszta
        betAmmountRed = 0        
    }
    resetBetAmmount();
}
function greenWin(){
    if (betColor == "green"){
        win = (betAmmountGreen * 14)
        reszta = parseInt(balance.innerText)
        console.log(reszta)
        reszta += win
        balance.innerText = reszta
        betAmmount = 0
    }
    resetBetAmmount();
}
function blackWin(){
    if (betColor == "black"){
        win = (betAmmountBlack * 2)
        reszta = parseInt(balance.innerText)
        console.log(reszta)
        reszta += win
        balance.innerText = reszta
        betAmmount = 0
    }
    resetBetAmmount();
}

buttons.map( button =>{
    button.addEventListener('click', (e) =>{
        // console.log("clicked");
        // console.log(e.target);
        console.log(parseInt(e.target.innerText));
        wartosc = parseInt(e.target.innerText);
        switch(e.target.innerText){
            default:
                displayLicznik += wartosc 
                display.value = displayLicznik;
            case e.target.innerText.includes("-"):
                displayLicznik -= wartosc.slice(-1,0);
                display.value = displayLicznik;
        }
    })
})

function spin()
{
    document.querySelector(".game-cointainer").style.transform = "rotate("+ number + "deg)";
    wygrana();
    newRandom();    
}
function wygrana(){
    obrotReset();
    liczba= (Math.round(licznik/24)) 
    
    
    // console.log("liczba wygrana to: "+ winings[liczba])
    setTimeout(() => {
        console.log("stopnie obrotu: " + licznik)
        console.log("która liczba?: " + liczba )
        console.log('wygrała liczba'+ winings[liczba]);
        choosedNumber = winings[liczba]
        console.log(messageWinner)
        winnerUpdate();
      }, 12000);

}

function newRandom(){
    obrot = Math.floor(Math.random() * 359)+1;
    number += obrot+3240
    licznik += obrot
}
function obrotReset(){
    if (licznik > 360){
        licznik = licznik - 360
    }
}
function winnerUpdate(){
    if (choosedNumber == 0){
        greenWin();
        document.getElementById('winner').textContent = "Wygrany: " + zielony + " " + choosedNumber
    }
    else if (choosedNumber%2==0){
        document.getElementById('winner').textContent = "Wygrany: " +  czerwony+ " " + choosedNumber
        redWin();
    }
    else if (choosedNumber%2!=0){
        blackWin();
        document.getElementById('winner').textContent = "Wygrany: " +  czarny+ " " + choosedNumber
    }
}