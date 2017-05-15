'use strict';

var tally = 0;
var user = prompt('Hey, there! What\'s your name?');

function questions(entry, correct, response) {
  var answer = prompt(entry).toUpperCase();
  if (answer.charAt(0) !== correct ) {
    alert('Incorrect. ' + response);
    return 0;
  } else {
    alert('Correct! ' + response);
    return 1;
  }
}

var entries = [
  'Yes or no - Does Chris publish code to Github?',
  'Yes or no - Do you think Chris carries a security clearance?',
  'Yes or no - Chris prefers to work remotely.',
  'Yes or no - Does Chris wear braces?',
  'Yes or no - are you interested in contacting Chris for a conversation?',
  'Pick a number between zero and 100.',
  'Pick a letter.'
];
var correct = ['Y', 'Y', 'Y', 'N', 'Y',
['3', '7', '9', '23'],
['a', 'b', 'c', 'd', 'e']
];
var responses = [
  'You can find all of Chris\'s publicly available code here: https://github.com/taxpayer131.',
  'Chris carries a Dept. of Defense Top Secret clearance and can work in most any Federal govt environment.',
  'Chris prefers to work remotely only 1/3 of the time.',
  'Chris does not wear braces',
  'Send Chris an email at chris.stefan1844@gmail.com!  Thanks!'
];

for (var i = 0; i < 5; i++) {
  tally += questions(entries[i], correct[i], responses[i]);
}

// question 1
/*var gender = prompt('Yes or no - Does Chris publish code to Github?').toUpperCase();
console.log('gender:' + gender);


if (gender === 'N' || gender === 'NO') {
  alert('Incorrect.  You can find all of Chris\'s publicly available code here: https://github.com/taxpayer131.');
} else {
  alert('Correct! Find Chris\'s publicly available code here: https://github.com/taxpayer131.');
  tally++;
}

// question 2
var suit = prompt('Yes or no - Do you think Chris carries a security clearance?').toUpperCase();
console.log('suit:' + suit);

if (suit === 'N' || suit === 'NO') {
  alert('Incorrect.  Chris carries a Dept. of Defense Top Secret clearance and can work in most any Federal govt environment.');
} else {
  alert('Correct!  Chris carries a Dept. of Defense Top Secret clearance and can work in most any Federal govt environment.');
  tally++;
}

// question 3
var hair = prompt('Yes or no - Chris prefers to work remotely.').toUpperCase();
console.log('hair:' + hair);

if (hair === 'N' || hair === 'NO') {
  alert('Correct.  Chris prefers to work remotely only 1/3 of the time.');
} else {
  alert('Yes, but Chris prefers to work remotely only  1/3 of the time.');
  tally++;
}

// question 4
var braces = prompt('Yes or no - do you wear braces?').toUpperCase();
console.log('braces:' + braces);

if (braces === 'N' || braces === 'NO') {
  alert('You have nice teeth even without braces.');
  tally++;
} else {
  alert('Ouch.  I hope they come out soon.');
}
//

// question 5
var siblings = prompt('Yes or no - are you interested in contacting Chris for a conversation?').toUpperCase();
console.log('siblings:' + siblings);

if (siblings === 'N' || siblings === 'NO') {
  alert('Oh well, maybe next time.');
} else {
  alert('Great!  Send Chris an email at chris.stefan1844@gmail.com!  Thanks!');
  tally++;
}*/

// add ques67 to tally
function ques67(entry, correct, itr) {
  var answer;
  var flag = false;
  var count = 1;
  while (count <= itr && flag === false) {
    answer = prompt(entry);
    for (var i=0; i < entry.length; i++) {
    console.log('current:', correct[i]);

    if (answer === correct[i]) {
    alert('Correct!');
    tally++;
    flag = true;
    return 1;
          }
        }
    if (flag === false && count < itr) {
    alert('No, guess again.');
    count++;
  } else if (flag === false && count === itr){
    alert('You are out of guesses!');
    return 0;
    }
  }

}

/*  //Sixth Question
var number = ['3', '7', '9', '9', '23'];
var answer;
var flag = false;
var count = 1; // counts numberr of guesses

while (count <= 4 && flag === false) {
  answer = prompt('Pick a number between zero and 100.');
  for (var i=0; i < number.length; i++) {
  console.log('current number:', number[i]);

  if (answer === number[i]) {
  alert('Correct!');
  tally++;
  flag = true;
  break;
        }
      }
  if (flag === false && count < 4) {
  alert('No, guess again.');
  count++;
} else if (flag === false && count === 4){
  alert('You are out of guesses!');
  count++;
  }
}
*/
/*for (var i=0; i < number.length; i++) {
console.log('current number:', number[i]);

if (answer === number[i]) {
alert('Correct!');
flag = true;
break;
      }
    }
if (!flag) {
alert('No, guess again.');
    }*/


/*// question 7
    var letters = ['a', 'b', 'c', 'd', 'e'];
    var guess;
    var flag = false;
    var count = 1; // counts number of guesses

    while (count <= 6 && flag === false) {
      guess = prompt('Pick a letter.');
      for (var i=0; i < letters.length; i++) {
      console.log('current letter:', letters[i]);

      if (guess === letters[i]) {
      alert('Correct!');
      tally++;
      flag = true;
      break;
            }
          }
      if (flag === false && count < 6) {
      alert('No, guess again.');
      count++;
    } else if (flag === false && count === 6){
      alert('You are out of guesses!');
      count++;
      }
    }*/

for (var i = 5; i < 7; i++) {
  tally += ques67(entries[i], correct[i]);
}

alert('That was fun, ' + user + '. You got ' + tally + ' correct!');
console.log(tally);

  /*Seventh Question
  var project = prompt('Can you guess how many coding projects Chris has participated in (You get four guesses.').toUpperCase();
  console.log('project:' + project);

  if (project === 3) {
    alert('Correct! Lucky guess!');
  } else {
    alert('Incorrect!  Try again');
  */
