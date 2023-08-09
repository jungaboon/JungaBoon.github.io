const welcomeMsg = 
[
    "A collection of past projects.",
    "Knowing the answer will always help you solve a problem.",
    "They say you can't buy happiness, but you can always buy a dog.",
    "There's more than one way to skin a cat.",
    "Who wins in a fight? Captain America or Mike Tyson?",
    "Who wins in a fight? Broly or Thor?",
    "Who wins in a fight? Shazam or Captain Marvel?",
    "Who wins in a fight? A potato or a broccoli?",
    "These funny dinos.",
    "Hey! What a wonderful kind of day!",
    "Hello! Is it me you're looking for?",
    "I ain't afraid of no ghost.",
    "Who wins in a fight? The Ninja Turtles or the Power Rangers?",
    "Which is heavier? A kilogram of steel or a kilogram of feathers?",
    "Do you believe in life after love?",
    "What is love? Baby don't hurt me!",
    "Where we're going, we don't need roads.",
    "You feeling lucky? Are you?",
    "Under construction."
]

var welcomeText = document.getElementById("welcomeMsg");

function load_welcome_msg()
{
    let i = welcomeMsg.length;
    let index = Math.floor(Math.random() * i);

    welcomeText.innerHTML = welcomeMsg[index];
}

load_welcome_msg();