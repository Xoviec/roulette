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
let redBeted = document.getElementById("redBeted");
let greenBeted = document.getElementById("greenBeted");
let blackBeted = document.getElementById("blackBeted");
let betColor = ""
let crashClick = document.getElementById("crash");
let betAlert = document.getElementById("betAlert");
let timer = document.getElementById("timer");
let stupidCounter = 0
let betUserName = "User"
let betUserAmmount = document.querySelectorAll('[id="betUserAmmount"]');
let betAmmountRed = 0 
let betAmmountGreen = 0 
let betAmmountBlack = 0 
let login = document.getElementById("login");
let sumbitButton = document.getElementById("sumbit-button")
let nickInput = document.getElementById("nick-input")
let escLogin = document.getElementById("login-esc")
let preWindow = document.getElementById("pre-window")


login.addEventListener("click", loginWindow);
betRed.addEventListener("click", betFunctionRed);
betGreen.addEventListener("click", betFunctionGreen);
betBlack.addEventListener("click", betFunctionBlack);
redBeted.addEventListener("click", cancelRedBet);
blackBeted.addEventListener("click", cancelBlackBet);
greenBeted.addEventListener("click", cancelGreenBet);
crashClick.addEventListener("click", crash);
betAlert.addEventListener("click", skipAlert)
sumbitButton.addEventListener("click", setUserName)
escLogin.addEventListener("click", loginEsc)

function loginEsc(){
    preWindow.classList.add("invisible")
}
function setUserName(){
    nickInput.value = nickInput.value
    betUserName = document.getElementById("betUserName")
    betUserName.innerText = nickInput.value
    preWindow.classList.add("invisible")

}

function loginWindow(){
    preWindow.classList.remove("invisible")
}

function animationTime(){
    delayDeleting = setTimeout(deleteClasses, 7000);
}
function deleteClasses(){
    betAlert.classList.remove("show-in");
    timer.classList.remove("timer");
    betAlert.classList.add("invisible");
}
function cancelDeletingClasses() {
    clearTimeout(delayDeleting);
}
function popUpAlert(){
    if (betAlert.classList.contains('invisible'))
    {        
        animationTime();
        betAlert.classList.add("show-in");
        timer.classList.add("timer");
        betAlert.classList.remove("invisible");
    }
}
function skipAlert(){
    deleteClasses();
    cancelDeletingClasses();
}

switch (display.value){
    case display.value < 0:
        betAlert.innerText = "Wartość beta musi być dodatnia!"
    case display.value > balance.innerText:
        betAlert.innerText = "Nie masz wystarczająco pieniędzy!"
}


function cancelRedBet(){
    redBeted.classList.add("invisible");
    balance.innerText = parseInt(balance.innerText) + parseInt(betAmmountRed);
    betAmmountRed = 0
}

function cancelBlackBet(){
    blackBeted.classList.add("invisible");
    balance.innerText = parseInt(balance.innerText) + parseInt(betAmmountBlack);
    betAmmountBlack = 0
}

function cancelGreenBet(){
    greenBeted.classList.add("invisible");
    balance.innerText = parseInt(balance.innerText) + parseInt(betAmmountGreen);
    betAmmountGreen = 0
}

function betFunctionRed(){
    if ((display.value > 0) && (display.value <= balance.innerText)){
        betAmmountRed += parseInt(display.value)
        balance.innerText -= display.value
        console.log(betAmmountRed)
        betColor = "red"
        redBeted.classList.remove("invisible");
        betUserAmmount[0].innerText = betAmmountRed
    }
    else{
        popUpAlert();
    }

}
function betFunctionGreen(){
    if ((display.value > 0) && (display.value <= balance.innerText)){
        betAmmountGreen += parseInt(display.value)
        balance.innerText -= display.value
        console.log(betAmmountGreen)
        betColor = "green"
        greenBeted.classList.remove("invisible");
        betUserAmmount[1].innerText = betAmmountGreen
    }
    else{
        popUpAlert();
    }
}
function betFunctionBlack(){
    if ((display.value > 0) && (display.value <= balance.innerText)){
        betAmmountBlack += parseInt(display.value)
        balance.innerText -= display.value
        console.log(betAmmountBlack)
        betColor = "black"
        blackBeted.classList.remove("invisible");
        betUserAmmount[2].innerText = betAmmountBlack
    }
    else{
        popUpAlert();
    }
}
function resetBetAmmount(){
    redBeted.classList.add("invisible");
    blackBeted.classList.add("invisible");
    greenBeted.classList.add("invisible");
    betAmmountBlack = 0
    betAmmountRed = 0
    betAmmountGreen = 0
}

function redWin(){
    if (betColor == "red"){
        win = (betAmmountRed * 2)
        reszta = parseInt(balance.innerText)
        console.log("reszta: " + reszta)
        reszta += win
        balance.innerText = reszta
        betAmmount = 0
        console.log("czerwony kurwa wygrał")
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

// wcześniej było buttons.map

buttons.forEach( button =>{
    button.addEventListener('click', (e) =>{
        wartosc = parseInt(e.target.innerText);

        // do wywalenia ten switch, default ma być na koniec

        switch(e.target.innerText){
            default:
                display.value = parseInt(display.value) + parseInt(wartosc)
            case e.target.innerText.includes("-"):
                displayLicznik += wartosc
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
        document.getElementById('winner').textContent = ("Wygrany: " + zielony + " " + choosedNumber)
        greenWin();
    }
    else if (choosedNumber%2==0){
        document.getElementById('winner').textContent = ("Wygrany: " +  czerwony+ " " + choosedNumber)
        console.log("halo kurwa czerwony test")
        redWin();
    }
    else if (choosedNumber%2!=0){
        document.getElementById('winner').textContent = ("Wygrany: " +  czarny+ " " + choosedNumber)
        blackWin();
    }
}

