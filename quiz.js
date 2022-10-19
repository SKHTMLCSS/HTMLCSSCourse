function submitAnswers1() {
    var total = 4;
    var score = 0;
    
    //Get user input
    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.forms['quizForm']['q3'].value;
    var q4 = document.forms['quizForm']['q4'].value;

    // Set correct answers
    var answers = ["c","b","a","a"];
    
    for(var i = 1; i <= total; i++) {
      // Check answers
      if (eval('q' + i) == answers[i - 1]) {
        score++;
      }
    }
  
    // Display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>Tulemus <span>' + score + '</span> / <span>' + total + '</span></h3>';
    //alert('You scored ' + score + ' out of ' + total);
    
    return false;
  }

function submitAnswers2() {
  var total = 4;
  var score = 0;
  
  //Get user input
  var q1 = document.forms['quizForm2']['q1'].value;
  var q2 = document.forms['quizForm2']['q2'].value;
  var q3 = document.forms['quizForm2']['q3'].value;
  var q4 = document.forms['quizForm2']['q4'].value;

  // Set correct answers
  var answers = ["a","d","d","d"];
  
  for(var i = 1; i <= total; i++) {
    // Check answers
    if (eval('q' + i) == answers[i - 1]) {
      score++;
    }
  }

  // Display results
  var results2 = document.getElementById('results2');
  results2.innerHTML = '<h3>Tulemus <span>' + score + '</span> / <span>' + total + '</span></h3>';
  //alert('You scored ' + score + ' out of ' + total);
  
  return false;
}

function submitAnswers3() {
  var total = 4;
  var score = 0;
  
  //Get user input
  var q1 = document.forms['quizForm3']['q1'].value;
  var q2 = document.forms['quizForm3']['q2'].value;
  var q3 = document.forms['quizForm3']['q3'].value;
  var q4 = document.forms['quizForm3']['q4'].value;

  // Set correct answers
  var answers = ["a","c","b","c"];
  
  for(var i = 1; i <= total; i++) {
    // Check answers
    if (eval('q' + i) == answers[i - 1]) {
      score++;
    }
  }

  // Display results
  var results3 = document.getElementById('results3');
  results3.innerHTML = '<h3>Tulemus <span>' + score + '</span> / <span>' + total + '</span></h3>';
  //alert('You scored ' + score + ' out of ' + total);
  
  return false;
}