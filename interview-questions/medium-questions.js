// =============================================================

/* QUESTION NOTE INCOMPLETE
Given a random string of numbers (e.g. '123453824333422228594999'),
find the length of the maximum run of consecutive digits
(so in the case of the example: 4)
*/

function maximumLengthOfStr() {
  let str = '123453824333422228594999';

  let arr = str.split('');

  let max = 1;
  let count = 1;

  for (let i=1; i < arr.length; i++) {
    // if the current one doesn't equal the last one
    if (arr[i-1] !== arr[i]) {
      // reset the max value
      count = 1;
    } else {
      // otherwise increase the max value by one
      count++;
    }

    if (count > max) {
      max = count;
    }

  }

  console.log("Max: " + max);
}

maximumLengthOfStr();
// =============================================================

/* QUESTION NOTE INCOMPLETE
Write a regex (regular expression) to validate if a string is
a valid email (i.e. is alphanumeric, contains an at followed
by a domain at a valid top level domain
[greater than 2 characters])
*/


// =============================================================

/* QUESTION NOTE INCOMPLETE
If asked to explain prototypal inheritance on an interview,
what's the most succinct way to answer?
*/

// =============================================================

/* QUESTION NOTE INCOMPLETE
Two minions of an evil overlord are passing secret letters back and forth
to each other. There code takes every lowercase letter and translates it
to the letter at the opposite side of the alphabet (i.e. 'a' becomes 'z',
'b' becomes 'y', etc.). All uppercase letters, punctuations, and
whitespace stay the same. Write a function that takes a coded string in
 and outputs the decoded message.

BONUS: The letters are now being passed back and forth so fast you
only have time to loop over them once before they explode.

// =============================================================
