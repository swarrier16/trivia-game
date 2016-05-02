// Trivia game Psuedo Code

// Welcome Page with msg "Welcome to Disney Trivia"
// Directions?
// Three strikes and you lose.
// The user should type their name.
// When user clicks button to submit their name the first question appears

$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

$(document).ready(function() {

  var playerName = '';
  var playerAnswer1 = '';
  var answer1 = 'snow white';
  var playerAnswer2 = '';
  var answer2 = 'mulan';
  var answer3 = 'pluto';
  var playerAnswer3 = '';
  var playerAnswer4 = '';
  var answer4 = 'olaf';
  var playerAnswer5 = '';
  var answer5 = 'zazu';
  var correctCounter = 0;
  var incorrectCounter = 0;
  var triesLeft = 3;


 $('.dashboard').hide();
  $('#q1').hide();
  $('#q2').hide();
  $('#q3').hide();
  $('#q4').hide();
  $('#q5').hide();
  $('#question1').hide();
  $('#question2').hide();
  $('#question3').hide();
  $('#question4').hide();
  $('#question5').hide();
  $('#correct-msg1').hide();
  $('#incorrect-msg1').hide();
  $('#lose-game-msg').hide();
  $('#end').hide();
  //Allow user to type name immediately on page load

  $('#player-name').focus();
  $('#input-question1').focus();
  // Store player name

  
   function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#q1').show().addClass('animated fadeIn');
    $('#question1').show().addClass('animated fadeIn');
    $('.dashboard').show().addClass('animated fadeIn');

  };

  //submit name

  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerName = $('#player-name').val();
    $('.show-player-name').text(playerName);
    $('#welcome-screen').addClass('animated fadeOutUp');
    $('.tries-left').text(triesLeft);
    setTimeout(removeWelcomeScreen, 1000);
  });

/*********************************************************************
QUESTION 1
*********************************************************************/
//Store answer 1

 $('#question1-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database    
    playerAnswer1 = $('#input-question1').val().trim().toLowerCase ();
    showPlayerAnswer1();
    answerCheck1 ();    
  });


//show answers
function showPlayerAnswer1() {
		$('#show-player-answer1').text(playerAnswer1);
		$('#correct-answer1').text(answer1);
	};

//check if answer in right or wrong
function answerCheck1() {
    if(playerAnswer1 === answer1) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated fadeIn');
      //$('#correct-img1').show().addClass('animated fadeIn');
      correctCounter++;
      $('.score').text(correctCounter);
      setTimeout(fadeOutQuestion1, 2500);

    }
    else {
      console.log("Player's answer is incorrect!");
      $('#input-question1').val('');
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      $('#incorrect-msg1').addClass('animated fadeOut');
      triesLeftCountdown ();
      $('.tries-left').text(triesLeft);
    }
  };

//removes question 1 and puts in question 2
function fadeOutQuestion1() {
    $('#question1').detach();
    $('#q1').detach();
    $('#question1').addClass('animated fadeOut');
    $('#q1').addClass('animated fadeOut');
    setTimeout($('#question1').detach(), 2500);
    $('#q2').show().addClass('animated fadeIn');
    $('#question2').show().addClass('animated fadeIn');
    $('#correct-msg1').hide();
    $('#correct-img1').hide();
    $('#incorrect-msg1').hide();
    $('#incorrect-img1').hide();
    $('.dashboard').show().addClass('animated fadeIn');
    console.log (playerName, correctCounter);
  };

//three strikes and youre out counter
 function triesLeftCountdown() {
    triesLeft --;
    $('.tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question').addClass('animated fadeOut');
      $('.question').detach();
      $('#lose-game-msg').show().addClass('animated fadeIn');
    };
  };

  

/*******************************************************************
QUESTION 2
********************************************************************/
//Store answer 2

 $('#question2-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database    
    playerAnswer2 = $('#input-question2').val().trim().toLowerCase ();
    showPlayerAnswer2();
    answerCheck2 ();    
  });


//show answers
function showPlayerAnswer2() {
    $('#show-player-answer2').text(playerAnswer1);
    $('#correct-answer2').text(answer1);
  };

//check if answer in right or wrong
function answerCheck2() {
    if(playerAnswer2=== answer2) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated fadeIn');
      //$('#correct-img1').show().addClass('animated fadeIn');
      correctCounter++;
      $('.score').text(correctCounter);
      setTimeout(fadeOutQuestion2, 2500);

    }
    else {
      console.log("Player's answer is incorrect!");
      $('#input-question2').val('');
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      $('#incorrect-msg1').addClass('animated fadeOut');
      triesLeftCountdown ();
      $('.tries-left').text(triesLeft);
    }
  };
//removes question 1 and puts in question 2
function fadeOutQuestion2() {
    $('#question2').detach();
    $('#q2').detach();
    //$('#question2').addClass('animated fadeOut');
    $('#q2').addClass('animated fadeOut');
    setTimeout($('#question2').detach(), 2500);
    $('#correct-msg1').hide();
    $('#incorrect-msg1').hide();
    $('#q3').show().addClass('animated fadeIn');
    $('#question3').show().addClass('animated fadeIn');
    $('.dashboard').show().addClass('animated fadeIn');
    console.log (playerName, correctCounter);
  };

/*******************************************************************
QUESTION 3
********************************************************************/
//Store answer 3

 $('#question3-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database    
    playerAnswer3 = $('#input-question3').val().trim().toLowerCase ();
    showPlayerAnswer3();
    answerCheck3 ();    
  });


//show answers
function showPlayerAnswer3() {
    $('#show-player-answer3').text(playerAnswer1);
    $('#correct-answer3').text(answer1);
  };

//check if answer in right or wrong
function answerCheck3() {
    if(playerAnswer3 === answer3) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated fadeIn');
      //$('#correct-img1').show().addClass('animated fadeIn');
      correctCounter++;
      $('.score').text(correctCounter);
      setTimeout(fadeOutQuestion3, 2500);

    }
    else {
      console.log("Player's answer is incorrect!");
      $('#input-question3').val('');
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      $('#incorrect-msg1').addClass('animated fadeOut');
      triesLeftCountdown ();
      $('.tries-left').text(triesLeft);
    }
  };
//removes question 1 and puts in question 2
function fadeOutQuestion3() {
    $('#question3').detach();
    $('#q3').detach();
    $('#question3').addClass('animated fadeOut');
    $('#q3').addClass('animated fadeOut');
    setTimeout($('#question3').detach(), 2500);
    $('#q4').show().addClass('animated fadeIn');
    $('#question4').show().addClass('animated fadeIn');
    $('#correct-msg1').hide();
    $('#incorrect-msg1').hide();
    $('.dashboard').show().addClass('animated fadeIn');
    console.log (playerName, correctCounter);
  };



/*******************************************************************
QUESTION 4
********************************************************************/
//Store answer 4

 $('#question4-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database    
    playerAnswer4 = $('#input-question4').val().trim().toLowerCase ();
    showPlayerAnswer4();
    answerCheck4 ();    
  });


//show answers
function showPlayerAnswer4() {
    $('#show-player-answer4').text(playerAnswer1);
    $('#correct-answer4').text(answer1);
  };

//check if answer in right or wrong
function answerCheck4() {
    if(playerAnswer4 === answer4) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated fadeIn');
      //$('#correct-img1').show().addClass('animated fadeIn');
      correctCounter++;
      $('.score').text(correctCounter);
      setTimeout(fadeOutQuestion4, 2500);

    }
    else {
      console.log("Player's answer is incorrect!");
      $('#input-question4').val('');
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      $('#incorrect-msg1').addClass('animated fadeOut');
      triesLeftCountdown ();
      $('.tries-left').text(triesLeft);
    }
  };

//removes question 4 and puts in question 5
function fadeOutQuestion4() {
    $('#question4').detach();
    $('#q4').detach();
    $('#question4').addClass('animated fadeOut');
    $('#q4').addClass('animated fadeOut');
    setTimeout($('#question4').detach(), 2500);
    $('#q5').show().addClass('animated fadeIn');
    $('#question5').show().addClass('animated fadeIn');
    $('#correct-msg1').hide();
    $('#incorrect-msg1').hide();
    $('.dashboard').show().addClass('animated fadeIn');
    console.log ('this function works');
  };



/*******************************************************************
QUESTION 5
********************************************************************/
//Store answer 5

 $('#question5-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database    
    playerAnswer5 = $('#input-question5').val().trim().toLowerCase ();
    showPlayerAnswer5();
    answerCheck5 ();    
  });


//show answers
function showPlayerAnswer5() {
    $('#show-player-answer5').text(playerAnswer1);
    $('#correct-answer5').text(answer1);
  };

//check if answer in right or wrong
function answerCheck5() {
    if(playerAnswer5 === answer5) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated fadeIn');
      //$('#correct-img1').show().addClass('animated fadeIn');
      correctCounter++;
      $('.score').text(correctCounter);
      setTimeout(fadeOutQuestion5, 2500);

    }
    else {
      console.log("Player's answer is incorrect!");
      $('#input-question5').val('');
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      $('#incorrect-msg1').addClass('animated fadeOut');
      triesLeftCountdown ();
      $('.tries-left').text(triesLeft);
    }
  };

//removes question 1 and puts in question 2
function fadeOutQuestion5() {
    $('#question5').detach();
    $('#q5').detach();
    $('#question5').addClass('animated fadeOut');
    $('#q5').addClass('animated fadeOut');
    setTimeout($('#question5').detach(), 2500);
    $('#end').show().addClass('animated fadeIn');
    $('#correct-msg1').hide();
    $('#incorrect-msg1').hide();
    $('.dashboard').show().addClass('animated fadeIn');
  };

/**************************************************************
Replay
**************************************************************/

$('.replay-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database    
    location.reload();  
  }); 

}); // ready function ends
