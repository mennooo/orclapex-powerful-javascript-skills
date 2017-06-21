// How to write code

/*
  Example 1
  A lot of room for improvement

*/

function rateMyGrade (myGrade) {
  var rating

  if (myGrade === 1) {
    rating = 'bad'
  } else if (myGrade === 2) {
    rating = 'average'
  } else if (myGrade === 3) {
    rating = 'good'
  } else {
    console.error('Invalid grade')
  }

  if (rating) {
    console.log('My rating is ' + rating)
  }
}

rateMyGrade(4)
