import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});
import dictionary from "an-array-of-english-words" with { type: "json" };
//JELENLEG A !SHOW_ALL-RA NEM AZT CSINÁLJA, AMIT KÉNE - A TÖBBI JÓNAK TŰNIK.
//szó array
let words = [];
let word1;
let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCh = false;
let players;

//első szó:
console.clear();
console.log("Welcome to the Word Chain game!");
while (players !== "2" && players !== "1"){
    console.log(`How many players playing?\n(type in "!quit" to exit the game)`);
    players = prompt("1 / 2: ");
    if (players === "!quit"){
        console.clear();
        console.log("Thank you for playing! BYE!");
        process.exit();
    } else if (players !== "2" && players !== "1"){
        console.clear();
        console.log("Please choose between one and two!\n");
    }
}
let player1 = [];
let player2 = [];

while (!(dictionary.includes(word1))) {
    specialCh = false;
    if (players === "1") {
        console.clear();
        console.log("You choose a single-player game!");
    } else if (players === "2"){
        console.clear();
        console.log("You choose a multi-player game!");
    }
    console.log(`(To quit, type "!quit")`);
    if (players === "2"){
        console.log("\nPLAYER ONE");
    }
    console.log("\nPlease enter a starting word!");
    word1 = prompt("here:");
    word1 = word1.toLowerCase();
    for (let i = 0; i < word1.length; i++) {
        const element = word1[i];
        if (abc.includes(element)) {
        } else {
            specialCh = true;
        }
    }
    if (word1[0] === "!"){
        word1 = word1.substring(1);
        console.log(word1);
        if (word1 === "quit"){
            console.clear();
            console.log("Thank you for playing! BYE!");
            process.exit();
        } else if (word1.substring(0, 4) === "show"){
            word1 = word1.substring(5);
            if (word1 === "1" && players === "1"){
                console.clear();
                prompt(words);
            } else if (word1 === "1" && players === "2"){
                console.clear();
                console.log("PLAYER ONE's words so far: " + player1);
            } else if (word1 === "2" && players === "1"){
                console.clear();
                console.log("There is no second player!");
            } else if (word1 === "2" && players === "2"){
                console.clear();
                console.log("PLAYER TWO's words so far: " + player2);
            } else if (word1 === "all"){
                console.clear();
                console.log(words);
            }
        } else {
            console.clear();
            prompt(`"` + word1 + `" is not a valid command!`);
        }
    } else if (specialCh === true){
        console.clear();
        console.log("Please only use letters from the english alphabet!\n");
    } else if (word1 === undefined || isNaN(word1) !== true) {
        console.clear();
        console.log("Please, write a valid word!");
    } else if (!(dictionary.includes(word1))){
        console.clear();
        console.log("That is not an english word, please give me a valid english word!");
    } else {
        words.push(word1);
        console.clear();
    }
    // console.log(word1);
}
// console.log(words);


//következő szó / szavak; !quit; 
for (let i = 0; i < words.length; i++){
    word1 = "";
    let lastLetter = words[i][words[i].length - 1];
    while (specialCh === true || word1 === "" || word1[0] !== lastLetter || !(isNaN(word1)) || !(dictionary.includes(word1)) || words.includes(word1)){
        specialCh = false;
        // console.log("Your words so far are: " + words);
        console.log("The last word was: " + words[i]);
        // console.log(`(To quit, type "!quit")`);
        if (players === "2" && (i % 2) === 0){
            console.log("PLAYER TWO");
        } else if (players === "2"){
            console.log("PLAYER ONE");
        }
        console.log(`\nGive me the next word, starting with the letter "` + lastLetter + `"!`);
        word1 = prompt("here:");
        word1 = word1.toLowerCase();
        for (let i = 0; i < word1.length; i++) {
            const element = word1[i];
            if (abc.includes(element)) {
            } else {
                specialCh = true;
            }
        }
        if (word1[0] === "!"){
            word1 = word1.substring(1);
            console.log(word1);
            if (word1 === "quit"){
                console.clear();
                console.log("Thank you for playing! BYE!");
                process.exit();
            } else if (word1.substring(0, 4) === "show"){
                word1 = word1.substring(5);
                if (word1 === "1" && players === "1"){
                    console.clear();
                    prompt(words);
                } else if (word1 === "1" && players === "2"){
                    console.clear();
                    console.log("PLAYER ONE's words so far: " + player1);
                } else if (word1 === "2" && players === "1"){
                    console.clear();
                    console.log("There is no second player!");
                } else if (word1 === "2" && players === "2"){
                    console.clear();
                    console.log("PLAYER TWO's words so far: " + player2);
                } else if (word1 === "all"){
                    console.clear();
                    console.log("The words so far are: " + words);
                }
            } else {
                console.clear();
                prompt(`"` + word1 + `" is not a valid command!`)
            }
        } else if (word1 === undefined || isNaN(word1) !== true) {
            console.clear();
            console.log("Please, write a valid word!");
        } else if (specialCh === true){
            console.clear();
            console.log("Please only use letters from the english alphabet!")
        } else if (!(dictionary.includes(word1))){
            console.clear();
            console.log("That is not an english word, please give me a valid english word!");
        } else if (words.includes(word1)){
            console.clear();
            console.log("That word has already been used!");
            // console.log(words.includes(word1));
        } else if (word1[0] !== lastLetter){
            console.clear();
            console.log(`Please start with the letter "` + lastLetter + `"!`);
        } else {
            words.push(word1);
            if (players === "2" && (i % 2) === 0){
                player1.push(word1);
            } else if (players === "2" && (i % 2) > 0){
                player2.push(word1);
            }
            console.clear();
            break;
        }
    }
    // console.log(words);
}
