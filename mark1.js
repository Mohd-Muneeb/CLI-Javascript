var readlineSync = require('readline-sync');
var name = readlineSync.question('May I know your name? ');
var score = 0,sum = 10;
console.log('welcome ' + name);

var age = readlineSync.question("Are you 25 yo? ")

if(true)
  {
    console.log("you are over 25");
  }
else
  console.log("you are not 25");

function calc( a , b ){
  var sum = a + b;
  return sum;
}

calc(10 , 20)

function play(question , answer){

  var userAnswer = readlineSync.question(question);

  if ( userAnswer == answer ){
    console.log("You are right!");
    score = score + 1;
    console.log(score);
  }

  else{
    console.log("OOPS! you are wrong!");
    console.log(score);
  }
}

play("What is my full name? ","Mohd Muneeb");

play("Where do I live? ","Hyderabad");

play("How old am I?", 19);

for( i = 0 ; i<= 4 ; i++){
  console.log("Muneeb" + i + "'th print");
}

var groceryList = ["Bread","Eggs","Milk" , "Nuts" , "Jam"];

for(i=0 ; i<=4;i++){
  console.log(groceryList[i]);
}

//ex12

var superman= {
  name : "Superman",
  power  : 10000,
  stealth : 0,
  ability : "Flight",
  health : 1000,
}

var batman= { 
  name : "batman",
  power : 100,
  stealth :  1000,
  ability : "Martial arts",
  health : 100,
}

console.log("Power Level Of batman : " + batman.power);

var questionOne = {
  question : "Who my fav artist? ",
  answer : "NF",
}

var questionTwo = {
  question : "What is my fav flavour?",
  answer : "chocolate",
}

var questionThree = {
  question : "What is my fav genre in movies?",
  answer : "science fiction",
}

var questionList = [questionOne , questionTwo , questionThree];

play(questionList[1].question,questionList[1].answer);
play(questionList[2].question,questionList[2].answer);
play(questionList[3].question,questionList[3].answer);
