//Q1a
let ages = [3,9,23,64,2,8,28,93];
console.log("Ages:", ages);
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);

//Q1b
ages.push(100);
console.log ("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);

//Q1c
let sumOfAges = 0;
for (let i = 0; i < ages.length; i++){
   // console.log(i, "Test");
    sumOfAges += ages[i]
    console.log("index:", i, "sumOfAges");
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length
console.log("Average", average)

//Q2a
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
let totalChars =0;
for (let i = 0; i < names.length; i++){
    // console.log(i, "Test");
    totalChars += names[i].length
    console.log("index:",i,"name:", names[i], "totalChars:",totalChars);
}
let averageName = totalChars / names.length
console.log("Avergae of Names:", averageName);

//Q2b
let concatNames = "";
for (let i = 0; i < names.length; i++){
   // console.log(i, "test");
    concatNames = concatNames.concat(names[i] + " ");
    console.log(i, "Names concatenated", concatNames);
}

//Q3
console.log("Last element of ages array:", ages[ages.length - 1]);

//Q4
console.log("First element of ages array:", ages[0]);

//Q5
let nameLengths = [];
for (let i = 0; i < names.length; i++){
  //  console.log(i, "Test");
    nameLengths.push(names[i].length);
    console.log("Name lengths array:", nameLengths);
}

//Q6
let charsTotal = 0;
for (let i =0; i < nameLengths.length; i++){
    // console.log(i, "Test");
    charsTotal += nameLengths[i];
    console.log("ChatsTotal:", charsTotal);
}

//Q7
function concatWords(word, n) {
    console.log("Word Par:", word, "n Par:", n);
    let concat = word.repeat(n);
    console.log(concat);
}
concatWords("Hello", 3);

//Q8
function fullName(firstName, lastName){
    let fullName = (firstName + " " + lastName)
    console.log(fullName)
}
fullName("Tiny","Tim")

//Q9
let numbers1 = [100,200,300,400]
let numbers2 = [1,2,3,4]

function sumNumbersArray(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
       // console.log(i, "Test");
        total =+ array[i];
        console.log("Total:", total);
    }
}
sumNumbersArray(numbers1);

//Q10
function calculateNumbersAverage(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        // console.log(i, "Test");
        total += array[i];
        console.log("calculate Function, total:", total);
    }
    let average = total / array.length;
    console.log("Average of numbers:", average);
    return average;
}
calculateNumbersAverage(numbers1);

//Q11
let firstArray =[8,8,8,8]
let secondArray =[7,7,7,7]
function isItGreaterThan(firstArray,secondArray){
    let sum1 = 0;
    firstArray.forEach(element =>{
        sum1+=element;
    });
    let firstAverage = (sum1/firstArray.length);
    let sum2 = 0;
    secondArray.forEach(element =>{
        sum2+=element;
    });
    let secondAverage = (sum2/secondArray.length);
    if (firstAverage > secondAverage){
        console.log(true);
        return(true);
    }
}
isItGreaterThan(firstArray,secondArray);

//Q12
function willBuyDrink(){
    let isHotOutside = true;
    let moneyInPocket = 10;
    if (isHotOutside && moneyInPocket > 10.50){
        console.log(true)
        return true;
    } else {
        console.log(false)
        return false;
    }
}
willBuyDrink()
function canWePlay(){
    let timeAvailable = 30;
    let isTheWeatherNice = true;
    if ( isTheWeatherNice && timeAvailable > 20){
        console.log(true)
        return true;
    } else {
        console.log(false)
        return false;
    }
}
canWePlay()