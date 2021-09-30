
// ADD A "YOU WIN!" OR "YOU LOSE!" POP-UP WITH FADE IN TRANSITION WHEN A PLAYER WINS OR LOSES
// ADD HANGMAN PICTURES FOR EACH STAGE

// letter buttons
const allLetters = document.querySelectorAll(".letter");
const allButtons = document.querySelectorAll(".btn");
const resetButton = document.querySelector("#reset");
const letterA = document.querySelector("#btnA");
const letterB = document.querySelector("#btnB");
const letterC = document.querySelector("#btnC");
const letterD = document.querySelector("#btnD");
const letterE = document.querySelector("#btnE");
const letterF = document.querySelector("#btnF");
const letterG = document.querySelector("#btnG");
const letterH = document.querySelector("#btnH");
const letterI = document.querySelector("#btnI");
const letterJ = document.querySelector("#btnJ");
const letterK = document.querySelector("#btnK");
const letterL = document.querySelector("#btnL");
const letterM = document.querySelector("#btnM");
const letterN = document.querySelector("#btnN");
const letterO = document.querySelector("#btnO");
const letterP = document.querySelector("#btnP");
const letterQ = document.querySelector("#btnQ");
const letterR = document.querySelector("#btnR");
const letterS = document.querySelector("#btnS");
const letterT = document.querySelector("#btnT");
const letterU = document.querySelector("#btnU");
const letterV = document.querySelector("#btnV");
const letterW = document.querySelector("#btnW");
const letterX = document.querySelector("#btnX");
const letterY = document.querySelector("#btnY");
const letterZ = document.querySelector("#btnZ");

// theme buttons
const themeMovies = document.querySelector("#btnMovies");
const themeMusic = document.querySelector("#btnMusic");
const themeGames = document.querySelector("#btnGames");
const themeTelevision = document.querySelector("#btnTelevision");

// guess related elements
const incorrectAnswers = document.querySelector(".incorrect-answers");
const correctAnswers = document.querySelector(".correct-answers")
const defaultTemplate = document.querySelector(".default-template");
const correctList = document.querySelector(".correct-list");
const guessCounter = document.querySelector(".guess-counter");

// page elements
const introductionTitle = document.querySelector(".introduction-title");
const fadedElements = document.querySelectorAll(".fademe");
const hangmanPicture = document.querySelector(".hangman-picture")

// words list
const words = ["Waterfall", "Jungle", "Airport", "King", "Mouse", "Dog", "Cat", "Lion", "Tiger", "Earth"]

const movieWords = ["Inception", "Avengers", "Jaws", "Alien", "Frozen", "Titanic", "Psycho", "Saw", "Avatar"
    , "Brave", "Creed", "Deadpool", "Elf", "Godzilla", "Incredibles", "Joker", "Midsommar",
    "Megamind", "Rudy", "Pocahontas", "Ratatouille", "Tenet", "Shrek", "Minions", "Spaceballs",
    "TMNT", "Traffik", "Moana", "Cruella", "Zoolander", "Venom" , "Matrix" , "Neo" , "Vader"]

const musicWords = ["Skrillex", "Beyonce", "Prince", "Bieber", "Eminem", "Logic", "Pink", "Bastille", 
    "Drake", "Kanye", "BTS", "Halsey", "Queen", "Shakira", "Zedd", "Disturbed", "Sia", "Rihanna", "Coldplay", 
    "ACDC", "Metallica", "Tupac", "Adelle", "Nirvana", "Future", "Diddy", "Shinedown", "Marshmello", "Evanescence", 
    "Lord", "Pitbull", "Gorillaz", "Paramore", "Slipknot" , "Weezer", "Outkast"]

const gameWords = ["Overwatch", "Valorant", "Bioshock", "Pokemon", "Mario", "Halo", "Zelda", "Pacman", "Spawn", "Portal"
    , "Doom", "Kirby", "Bowser", "Peach", "Toad", "Link", "Tracer", "Dishonored", "Farcry", "Sonic", "Forza",
    "GTA", "Battlefield", "Borderlands", "Diablo", "Cuphead", "Celeste", "Hades", "Kratos", "Joel", "Ellie",
    "SuperHot", "Minecraft", "Battlefront", "Undertale"]

const tvWords = ["Haikyu", "Chuck", "Dexter", "NCIS", "Lost", "Dragonball" , "Simpsons" , "Friends" , "Supernatural" , "Office"
    , "Sherlock" , "Scrubs", "Smallville" , "Firefly" , "Castlevania" , "Heroes" , "Highlander" , "Thundercats" , "Stargate" , "StarTrek" , "Lassy" , "Akira"
    , "Berzerk" , "Bleach" , "Naruto" , "Hellsing" , "Trigun" , "Inuyasha" , "Shining" , "Alucard" , "Goku" , "Homer" , "Spock"]

// theme buttons
const originalTheme = document.querySelector("#originalTheme")
const moviesTheme = document.querySelector("#movieTheme");
const musicTheme = document.querySelector("#musicTheme");
const gamesTheme = document.querySelector("#gamesTheme");
const televisionTheme = document.querySelector("#televisionTheme");
const allThemes = document.querySelector(".btnThemes")

// the user guess limit before failure
const guessLimit = 6;
// the running total of guesses
var userGuesses = 0;

// displays this tally on webpage
guessCounter.innerHTML = (`${userGuesses} of ${guessLimit}`);

// an array that will store incorrect guesses then display on webpage
var incorrectGuesses = [];

// randomizes a word from the list of words
var chosenWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

function pickedTheme() {
    if (this.value === "original") {
        location.reload();
    }
    if (this.value === "movies") {
        // randomizes a word from the list of words
        chosenWord = movieWords[Math.floor(Math.random() * movieWords.length)].toUpperCase();
        // creates string of dashes and applys it to the page
        guessedWord = wordCreator();
        // displays the starting dashes
        defaultTemplate.innerHTML = guessedWord.join("");
        // the running total of guesses
        userGuesses = 0;
        // TESTING
        console.log(`USER GUESSES: ${userGuesses}`)
        // displays this tally on webpage
        guessCounter.innerHTML = (`${userGuesses} of ${guessLimit}`);
        // an array that will store incorrect guesses then display on webpage
        incorrectGuesses = [];
        incorrectAnswers.innerHTML = "";
        // reenables buttons
        for (letters of allLetters) {
            letters.style.backgroundColor = "white";
            letters.style.color = "black";
            letters.disabled = false;
        }
        // changes correct answer color back to normal
        correctAnswers.style.color = "white";
        // theme changes
        document.body.style.background = "linear-gradient(90deg, rgba(214,64,69,1) 14%, rgba(191,35,61,1) 35%, rgba(70,117,153,1) 66%, rgba(29,51,84,1) 86%)"
        introductionTitle.innerHTML = "Hangman - Movies!"
        hangmanPicture.src = "photos/hangman-game-0.png"

    }
    if (this.value === "music") {
        // randomizes a word from the list of words
        chosenWord = musicWords[Math.floor(Math.random() * musicWords.length)].toUpperCase();
        // creates string of dashes
        guessedWord = wordCreator();
        // displays the starting dashes
        defaultTemplate.innerHTML = guessedWord.join("");
        // the running total of guesses
        userGuesses = 0;
        // TESTING
        console.log(`USER GUESSES: ${userGuesses}`)
        // displays this tally on webpage
        guessCounter.innerHTML = (`${userGuesses} of ${guessLimit}`);
        // an array that will store incorrect guesses then display on webpage
        incorrectGuesses = [];
        incorrectAnswers.innerHTML = "";
        // reenables buttons
        for (letters of allLetters) {
            letters.style.backgroundColor = "white";
            letters.style.color = "black";
            letters.disabled = false;
        }
        // changes correct answer color back to normal
        correctAnswers.style.color = "white";
        // theme changes
        document.body.style.background = "linear-gradient(90deg, rgba(234,122,244,1) 14%, rgba(180,62,143,1) 32%, rgba(98,0,179,1) 50%, rgba(91,47,147,1) 68%, rgba(105,19,102,1) 86%)"
        introductionTitle.innerHTML = "Hangman - Music!"
        hangmanPicture.src = "photos/hangman-game-0.png"
    }
    if (this.value === "games") {
        // randomizes a word from the list of words
        chosenWord = gameWords[Math.floor(Math.random() * gameWords.length)].toUpperCase();
        // creates string of dashes and applys it to the page
        guessedWord = wordCreator();
        // displays the starting dashes
        defaultTemplate.innerHTML = guessedWord.join("");
        // the running total of guesses
        userGuesses = 0;
        // TESTING
        console.log(`USER GUESSES: ${userGuesses}`)
        // displays this tally on webpage
        guessCounter.innerHTML = (`${userGuesses} of ${guessLimit}`);
        // an array that will store incorrect guesses then display on webpage
        incorrectGuesses = [];
        incorrectAnswers.innerHTML = "";
        // reenables buttons
        for (letters of allLetters) {
            letters.style.backgroundColor = "white";
            letters.style.color = "black";
            letters.disabled = false;
        }
        // changes correct answer color back to normal
        correctAnswers.style.color = "white";
        // theme changes
        document.body.style.background = "linear-gradient(90deg, rgba(3,181,170,1) 14%, rgba(3,121,113,1) 32%, rgba(2,52,54,1) 50%, rgba(0,191,179,1) 68%, rgba(4,154,143,1) 86%)"
        introductionTitle.innerHTML = "Hangman - Games!"
        hangmanPicture.src = "photos/hangman-game-0.png"
    }
    if (this.value === "television") {
        // randomizes a word from the list of words
        chosenWord = tvWords[Math.floor(Math.random() * tvWords.length)].toUpperCase();
        // creates string of dashes and applys it to the page
        guessedWord = wordCreator();
        // displays the starting dashes
        defaultTemplate.innerHTML = guessedWord.join("");
        // the running total of guesses
        userGuesses = 0;
        // TESTING
        console.log(`USER GUESSES: ${userGuesses}`)
        // displays this tally on webpage
        guessCounter.innerHTML = (`${userGuesses} of ${guessLimit}`);
        // an array that will store incorrect guesses then display on webpage
        incorrectGuesses = [];
        incorrectAnswers.innerHTML = "";
        // reenables buttons
        for (letters of allLetters) {
            letters.style.backgroundColor = "white";
            letters.style.color = "black";
            letters.disabled = false;
        }
        // changes correct answer color back to normal
        correctAnswers.style.color = "white";
        // theme changes
        document.body.style.background = "linear-gradient(90deg, rgba(46,110,196,1) 14%, rgba(41,39,187,1) 35%, rgba(0,75,164,1) 66%, rgba(4,17,154,1) 86%)"
        introductionTitle.innerHTML = "Hangman - Television!"
        hangmanPicture.src = "photos/hangman-game-0.png"
    }
}

// creates the dashed word that is built upon chosen word
const wordCreator = () => {
    var finalWord = [];
    for (letters in chosenWord) {
        finalWord.push("_");
    }
    return finalWord;
}

// creates string of dashes and applys it to the page
var guessedWord = wordCreator();

// displays the starting dashes
defaultTemplate.innerHTML = guessedWord.join("");

// function for changing hangman picture
function pictureChanger() {
    if (userGuesses === 1) {
        hangmanPicture.src = "photos/hangman-game-1.png"
    }
    if (userGuesses === 2) {
        hangmanPicture.src = "photos/hangman-game-2.png"
    }
    if (userGuesses === 3) {
        hangmanPicture.src = "photos/hangman-game-3.png"
    }
    if (userGuesses === 4) {
        hangmanPicture.src = "photos/hangman-game-4.png"
    }
    if (userGuesses === 5) {
        hangmanPicture.src = "photos/hangman-game-5.png"
    }
}

// main function
function guess() {

    // main value for what is pressed
    var guessValue = this.value;

    // code that runs if the button pressed is found in the the word
    if (chosenWord.includes(guessValue) === true) {

        // for each letter in the chosen word, if the guessed letter is found, take that index and replace the index of the "_"
        // found in the list of it.
        for (i = 0; i < chosenWord.length; i++) {
            if (guessValue === chosenWord[i]) {
                guessedWord[i] = chosenWord[i];
                // display the result on the webpage and take away the spaces where the commas seperating list elements is.
                defaultTemplate.innerHTML = guessedWord.join("");
            }
        }

        // disabled styles
        this.style.backgroundColor = "#6d6a75";
        this.style.color = "white";
        this.disabled = true;
    }

    // code that runs in the case of a winning scenrio
    if (guessedWord.join("") === chosenWord) {
        // turns the final answer green
        defaultTemplate.style.color = "#09e85e";
        for (letters of allLetters) {
            letters.style.backgroundColor = "#6d6a75";
            letters.style.color = "white";
            letters.disabled = true;
        }
        hangmanPicture.src = "photos/hangman-game-win.png"
    }

    // code that runs if the button pressed is NOT found in the word
    if (chosenWord.includes(guessValue) === false) {

        // adds the value onto the array
        incorrectGuesses.push(guessValue);
        // displays the new array on the webpage
        incorrectAnswers.innerHTML = incorrectGuesses.join("");

        // adds a tally to incorrect guesses and displays it
        userGuesses += 1;
        guessCounter.innerHTML = (`${userGuesses} of ${guessLimit}`);

        // disabled styles
        this.style.backgroundColor = "#6d6a75";
        this.style.color = "white";
        this.disabled = true;

        // CHANGES PICTURE DEPENDING ON USERGUESS COUNT
        pictureChanger();
    }

    // code that runs if the user runs out of guesses
    if (userGuesses === guessLimit) {
        defaultTemplate.innerHTML = chosenWord;
        defaultTemplate.style.color = "#f40000";
        for (letters of allLetters) {
            letters.style.backgroundColor = "#6d6a75";
            letters.style.color = "white";
            letters.disabled = true;
        }
        hangmanPicture.src = "photos/hangman-game-loss.png"
    }
}

letterA.addEventListener("click", guess)
letterB.addEventListener("click", guess)
letterC.addEventListener("click", guess)
letterD.addEventListener("click", guess)
letterE.addEventListener("click", guess)
letterF.addEventListener("click", guess)
letterG.addEventListener("click", guess)
letterH.addEventListener("click", guess)
letterI.addEventListener("click", guess)
letterJ.addEventListener("click", guess)
letterK.addEventListener("click", guess)
letterL.addEventListener("click", guess)
letterM.addEventListener("click", guess)
letterN.addEventListener("click", guess)
letterO.addEventListener("click", guess)
letterP.addEventListener("click", guess)
letterQ.addEventListener("click", guess)
letterR.addEventListener("click", guess)
letterS.addEventListener("click", guess)
letterT.addEventListener("click", guess)
letterU.addEventListener("click", guess)
letterV.addEventListener("click", guess)
letterW.addEventListener("click", guess)
letterX.addEventListener("click", guess)
letterY.addEventListener("click", guess)
letterZ.addEventListener("click", guess)

originalTheme.addEventListener("click", pickedTheme)
movieTheme.addEventListener("click", pickedTheme)
musicTheme.addEventListener("click", pickedTheme)
gamesTheme.addEventListener("click", pickedTheme)
televisionTheme.addEventListener("click", pickedTheme)
