//Global Scope
let nameScore = 0;
let computerScore = 0;
let name;
const logo = "bplogo.png";


//Say Hi to the Player
//Listen for the click on the "Click Me" button
document.getElementById("name-button").addEventListener("click", function(){
  //get the value in the text box
  name = document.querySelector(".player-name").value;
  //say hello to the player using their stated name - use alert
  alert(name + ", WAKANDA FORVER. Are you ready to play?");
});

//Randomize the images
//A function is a recipe we can use over and over.
//Name a function based on what it is doing
function randomizeImage(){
  //An array of our images
  //Add a fourth image -- Claw
  const image = ["blackpanther.png", "killmonger.png", "shuri.png", "claw.png"];
  //Get a random number
  //Adjust the random number
  //What is math.floor?
  let imageNumber = Math.floor(Math.random() * 4);
  //Choose the image based on the random number
  let newImage = image[imageNumber]
  return (newImage);
}

//Find the winner
function findWinner(nameScore, computerScore){
    $("#text").text("Your score is: " + nameScore + ". The computer score is " + computerScore + ".");
  if (nameScore >= 20) {
      $("#text").text(name + ", Shaloooh, YOU WON.");
    } else if (computerScore >= 20) {
      $("#text").text("Wooop, " + name + " YOU LOST!");
    }
}

//Jquery instead of JS
//Click on a Card
$(".cards").on("click", ".face-card", function(){
  let randomImage = randomizeImage();
  //What is THIS?
  $(this).closest("img").attr("src", randomImage);
  if (randomImage === "blackpanther.png") {
    nameScore += 5;
    findWinner(nameScore, computerScore);
  }
  else if (randomImage === "claw.png") {
    computerScore += 20;
    findWinner(nameScore, computerScore);
  }
  else {
    computerScore += 5;
    findWinner(nameScore, computerScore);
      }
  $("#tryagain-button").on("click", () => {
    $(this).attr("src", logo);
  });
});
