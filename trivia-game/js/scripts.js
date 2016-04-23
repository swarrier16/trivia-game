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
  var correctCounter = 0;
  var incorrectCounter = 0;
  var triesLeft = 3;


 $('.dashboard').hide();
  $('#q1').hide();
  $('#q2').hide();
  $('#question1').hide();
  $('#question2').hide();
  $('#next-question1').hide();
  $('#correct-msg1').hide();
  $('#correct-img1').hide();
  $('#incorrect-img1').hide();
  $('#incorrect-msg1').hide();
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
    setTimeout(removeWelcomeScreen, 1000);
  });

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
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      //$('#incorrect-img1').show().addClass('animated fadeIn');
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
    triesLeft--;
    $('#tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question').addClass('animated fadeOut');
      $('.question').detach();
      $('#lose-game-msg').show().addClass('animated fadeIn')
    };
  };

//submits answer for q2
	$('#question2-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database    
    playerAnswer2 = $('#input-question1').val().trim();
    console.log(playerAnswer2);
  });

	function answerCheck2() {
    if(playerAnswer2 === answer2) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated fadeIn');
      //$('#correct-img1').show().addClass('animated fadeIn');
      correctCounter++;
      $('.score').text(correctCounter);
      setTimeout(fadeOutQuestion1, 2500);

    }
    else {
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      //$('#incorrect-img1').show().addClass('animated fadeIn');
    }
  };





}); // ready function ends
