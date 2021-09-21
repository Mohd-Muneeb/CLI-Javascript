var readlineSync = require('readline-sync')

var userName = readlineSync.question("May I know your name? ");

console.log("Welcome to the quiz " + userName)

var score = 0; 

function quiz(question , answer){

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

questionOne={
  question : "Who is the protagonist of the show `One Piece`",
  answer : "Monkey D. Luffy" ,
}

questionTwo = {
  question : "How many seasons does the show Breaking Bad have? ",
  answer : 5,
}

questionThree = {
  question : "Does Iron man die in Avengers : END GAME",
  answer : "yes",
}

var questionList = [questionOne,questionTwo,questionThree]

for(i=0;i<=2;i++){
  quiz(questionList[i].question , questionList[i].answer)
}

console.log("Your final score was " + score);