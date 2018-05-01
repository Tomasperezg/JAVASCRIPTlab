
let wins = 0;//variables always in the top

let grant = 10;//

let userinput = 40;//

let user = prompt("What is your name?");//always store userinput in a variable
//one variable can only storage one input from user

var answer = prompt("would you like to play with two characters?");
//prompt user for input and store that in a variable "always"

if (answer == "yes"){//<--if statement starts here
//if user wants to play run the while loop
//wrap the while loop in the if statement

while (userinput >= 0 && grant >= 0) {//we put our conditions first

  let damage = (Math.floor(Math.random() * 2) + 1);//this variable is in here because
  //it will be use within the while loop

//this is for user
  (userinput -= damage);//-= it means subtract the random damage from user
  console.log( user + " has " + userinput);//points you has left

//this is for grant
  (grant -= damage);//-= it means subtract the random damage from grant
  console.log( "grant has " + grant);//points grant has left

//all of these is for user
  if (userinput <= 0) {//if user points reach 0
    console.log("username looses!!!!");// you die

//all of these is for grant
} else if (grant <= 0) {// if grant points reach 0
    console.log("grant looses!!!!");// grant dies
    console.log(user + " won")//you won the game
    grant = 10;//return grants life to 10 eveytime he looses
    wins++;//wins count increase by 1

}else if (wins == "3") {//the max amount of win is 3
    console.log( user + " you killed him, grant is dead");//when you reach 3 wins grant is dead
    break;//the while loop ends and game is over
}else {
  continue;//<--continue the loop as long grant is not dead
}
}//<---it means the end of the while loop
}else if (answer == "no"){//if player dont want to play will not run the code, "if" statement finish in the "}" before the "else if"
}
