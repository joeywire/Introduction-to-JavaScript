/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
const age = 30;

if(age > votingAge) {
    console.log(true);
} else {
    console.log(false);
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let mood = "Happy";
let situation = "Busy";

if(situation === "Good") {
    mood = 'Happy';
}else if(situation === 'Busy') {
    mood = 'Rushed';
}

console.log(mood);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const str = "1999";
const int = Number(str);
// Test --
console.log(int, typeof(int));



//Task d: Write a function to multiply a*b 

function multiply(a, b) {
    return a * b; 
}
// Test --
console.log(multiply(2, 4));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const dogYears = (a) => {
    return a * 7;
}

//Test--
console.log("Your age in dog years is:", dogYears(30), "years");


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

function dog_feeder(age, weight) {
    let feed = null;
    if(age >= 1){
        if(weight <= 5){
            feed = weight * .05;
        }else if(weight <= 10){
            feed = weight * .04;
        }else if(weight <= 15){
            feed = weight * .03;
        }else{
            feed = weight * .02;
        }
    }else{
        if(age <= .4){
            feed = weight * .1;
        }else if(age <= .7){
            feed = weight * .05;
        }else{
            feed = weight * .04;
        }
    }
    return feed;
}

//Test --
console.log(dog_feeder(1, 15));
// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function RPS(play) {
    let hand = null; 
    let result = null;
    // Math.floor rounds down to nearest whole number - Math.random returns a random value between 0 and 1 (inclusive of 0 but not 1). Math.random() * 3 will return a value between 0 and 2.97 so the probability isn't perfect but we're calling it good enough. 
    // Hand Abstraction: Rock === 1, Paper === 2, Scissors === 3
    const bot_hand = Math.floor(Math.random() * 3);
    if(play === 'Rock') {
        if(bot_hand === 0) {
            result = 'Tie';
        } else if(bot_hand === 1) {
            result = 'Lose';
        } else {
            result = 'Win';
        }
    } else if(play === 'Paper') {
        if(bot_hand === 0){
            result = 'Win';
        } else if(bot_hand === 1) {
            result = 'Tie';
        } else {
            result = 'Lose';
        }
    } else {
        if(bot_hand === 0){
            result = 'Lose';
        } else if(bot_hand === 1) {
            result = 'Win';
        } else {
            result = 'Tie';
        }
    }
    return result;
}

console.log(RPS('Rock'));



  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function km_miles(km){
    return km * .621371;
}

const miles = km_miles(5);
console.log(miles);


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feet_cm(feet){
    return feet * 30.48;
}

console.log(feet_cm(10));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(number) {
    for(let i = number; i > 0; i--) {
        console.log(i, "bottles of soda on the wall,", i, "bottles of soda, take one down pass it around,", i - 1, "bottles of soda on the wall");
    }
}

annoyingSong(5);
  



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

const letter_grade = (score) => {
    let grade = null;
    if(score > 100) {
        console.log('There is no extra credit!')
    }else if(score >= 90) {
        grade = 'A';
    }else if(score >= 80) {
        grade = 'B';
    }else if(score >= 70) {
        grade = 'C';
    }else if(score >= 60) {
        grade = 'D';
    }else {
        grade = 'F';
    }
    return grade;
}

console.log(letter_grade(10));
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

const name = "Joe LaSatA";
const vowels = ["a", "e", "i", "o", "u"]

function count_vowels(string) {
    // initate count
    let count = 0;
    // convert 'string' argument to lowercase
    let text = string.toLowerCase();
    // iterate through each letter of text variable and use .includes array method to check agains vowels array. If match +1 to count 
    for(let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }
    console.log("Number of vowels:", count);
}

count_vowels(name);


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function RPS2(play) {
    let result = null;
    // Math.floor rounds down to nearest whole number - Math.random returns a random value between 0 and 1 (inclusive of 0 but not 1). Math.random() * 3 will return a value between 0 and 2.97 so the probability isn't perfect but we're calling it good enough. 
    // Hand Abstraction: Rock === 1, Paper === 2, Scissors === 3
    const bot_hand = Math.floor(Math.random() * 3);
    if(play === 'Rock') {
        if(bot_hand === 0) {
            result = 'Tie';
        } else if(bot_hand === 1) {
            result = 'Lose';
        } else {
            result = 'Win';
        }
    } else if(play === 'Paper') {
        if(bot_hand === 0){
            result = 'Win';
        } else if(bot_hand === 1) {
            result = 'Tie';
        } else {
            result = 'Lose';
        }
    } else {
        if(bot_hand === 0){
            result = 'Lose';
        } else if(bot_hand === 1) {
            result = 'Win';
        } else {
            result = 'Tie';
        }
    }
    return result;
}

let hand = window.prompt("Enter your move - Rock, Paper or Scissors:"); 
let game_result = RPS2(hand); 
console.log(game_result);



