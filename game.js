import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});
import dictionary from "an-array-of-english-words" with { type: "json" };

//szó array
let words = [];
let word1;
//első szó:
console.clear();
console.log("Welcome to the Word Chain game!");
while (!(dictionary.includes(word1))) {
    console.log(`(To quit, type "!quit")`);
    word1 = prompt("Please enter a starting word: ");
    word1 = word1.toLowerCase();
    if (word1 === "!quit"){
        console.log("\nThank you for playing! BYE!");
        process.exit();
    } else if (word1 === undefined || isNaN(word1) !== true) {
        console.log("\nPlease, write a valid word!");
    } else if (!(dictionary.includes(word1))){
        console.log("\nThat is not an english word, please give me a valid english word.")
    } else {
        words.push(word1);
    }
    console.log(word1);
}
console.log(words);
//

//

//következő szó / szavak; !quit; 
for (let i = 0; i < words.length; i++){
    word1 = "";
    let lastLetter = words[i][words[i].length - 1];
    while (word1 === "" || word1[0] !== lastLetter || !(isNaN(word1)) || !(dictionary.includes(word1)) || words.includes(word1)){
        console.log("\nYour previous word is: " + words[i]);
        console.log(`(To quit, type "!quit")`);
        console.log(`\nGive me the next word, starting with the letter "` + lastLetter + `"`);
        word1 = prompt("here:");
        word1 = word1.toLowerCase();
        if (word1 === "!quit"){
            console.log("\nThank you for playing! BYE!");
            process.exit();
        } else if (word1 === undefined || isNaN(word1) !== true) {
            console.log("\nPlease, write a valid word!");
        } else if (!(dictionary.includes(word1))){
            console.log("\nThat is not an english word, please give me a valid english word.");
        } else if (words.includes(word1)){
            console.log("\n!!! - That word has already been used!");
            console.log(words.includes(word1));
        } else if (word1[0] !== lastLetter){
            console.log(`\nPlease start with the letter "` + lastLetter + `"`);
        } else {
            words.push(word1);
            break
        }
    }
    console.log(words);
}
