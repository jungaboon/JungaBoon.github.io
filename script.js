var startTimer;
var def_startTimer = 10;
var minSpeed = 100;
var maxSpeed = 10;
var interval = window.setInterval(DecreaseTimer, GetRandomSpeed(minSpeed,maxSpeed));
var timerText = document.getElementById("timer");
var actionButton = document.getElementById("actionButton");

// Boolean for win/lose status
var lose = false;

startTimer = def_startTimer;

// Random lose messages
const loseMessages =
[
    "You lose!",
    "Good day sir!",
    "Nothing for you!",
    "You lost!",
    "Nada!",
    "Not your lucky day!"
]

let timer = ('000' + startTimer).slice(-3);
timerText.innerHTML = timer.toString();

function GetRandomSpeed(min, max)
{
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    console.log("Return " + rand);
    return rand;
}

function Fire()
{
    if(lose)
    {
        ResetGame();
    }
    else
    {
        let amount = Math.floor(Math.random()*6);
        startTimer += amount;
        let timer = ('000' + startTimer).slice(-3);
        timerText.innerHTML = timer.toString();

        for (let i = 0; i < amount; i++)
        {
            console.log("Fire");
            // Add some sort of visual element here
        }
    }
}

function DecreaseTimer()
{
    startTimer -= 1;
    let timer = ('000' + startTimer).slice(-3);
    timerText.innerHTML = timer.toString();

    if(startTimer <= 0) 
    {
        StopTimer();
        LoseGame();
    }
}

function StopTimer()
{
    clearInterval(interval);
}

function LoseGame()
{
    timerText.className = "timer loseScreen";
    randomText = loseMessages[Math.floor(Math.random()*loseMessages.length)];
    timerText.innerHTML = randomText;

    // Change the text on the action button
    actionButton.value = "TRY AGAIN!";

    lose = true;
}

function ResetGame()
{
    lose = false;
    timerText.classList.remove("loseScreen");
    let timer = ('000' + def_startTimer).slice(-3);
    timerText.innerHTML = timer.toString();
    actionButton.value = "DON'T LET IT GET TO ZERO!";
    startTimer = def_startTimer;

    interval = window.setInterval(DecreaseTimer, GetRandomSpeed(minSpeed,maxSpeed));
}