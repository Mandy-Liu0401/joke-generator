// Array containing some light-hearted jokes with authors
const jokesArray = [
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
        "author": "Anonymous"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
        "author": "Nature Lover"
    },
    {
        "joke": "Why was the fish's grades bad? They were below sea level",
        "author": "John Doe"
    },
    {
        "joke": "Where do polar bears keep their money? In a snowbank.",
        "author": "John Doe"
    },
    {
        "joke": "What do you get from a pampered cow? Spoiled milk!",
        "author": "John Doe"
    },
    {
        "joke": "What does a baby computer call his father? Data!",
        "author": "John Doe"
    },
    {
        "joke": "What kind of car does an egg drive? A yolkswagen.",
        "author": "John Doe"
    }
];

//const btn = document.getElementById("btn");  //locate the node of button
const textDiv = document.getElementById("text");
const authorDiv = document.getElementById("author");


function generateRandomJoke() {

    const random = Math.floor(jokesArray.length * Math.random());
    textDiv.innerText = jokesArray[random].joke;
    authorDiv.innerText = jokesArray[random].author;
    }

//btn.addEventListener ('click',  generateRandomJoke);
