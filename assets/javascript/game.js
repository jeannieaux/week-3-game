
    var randomNum = Math.floor((Math.random() * 20)+1);

    var count = 0;

function guessNum()
{
  // get info from the form
    var guess = document.forms["form"]["wholeNumber"].value;

// Just learned this function. This is to determine whether or not value is a number
isNaN(guess)
{
    document.getElementById("userGuess").innerHTML = "Please enter a number";//write message in guess line
}

// equals to
if (guess == randomNum)
{
  count ++;
  document.getElementById("userGuess").innerHTML = "You've guessed correctly!"
  document.getElementById("counter").innerHTML = "It took you " + 
    count + " guesses to win.";
}
//low
else if (guess < randomNum)
  {
  document.getElementById("userGuess").innerHTML = "Your guess is too low! Guess higher!";
  count ++;
  document.getElementById("counter").innerHTML = "Number of guesses: " + count;
}
//high
else if (guess > randomNum)
{
  document.getElementById("userGuess").innerHTML = "This is too high! Guess again!";
  count ++;
  document.getElementById("counter").innerHTML = "Number of guesses: " + count;
}

//reset the game, clear all fields 
function reset() {
    document.getElementById("form").reset();
    document.getElementById("userGuess").innerHTML = "";
    document.getElementById("counter").innerHTML = "";
    count = 0;
}
}