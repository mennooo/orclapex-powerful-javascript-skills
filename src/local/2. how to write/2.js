// How to write code

/*
  Example 2
  Decomposing code into functions:

  addGradeRating
  rateMyGrade

*/

let gradeRatings = []

function addGradeRating (grade, rating) {
  gradeRatings[grade] = rating
}

function rateMyGrade (myGrade) {
  let rating = gradeRatings[myGrade]
  if (rating) {
    console.log('My rating is ' + rating)
  } else {
    console.error('Invalid grade')
  }
}

addGradeRating(1, 'bad')
addGradeRating(2, 'average')
addGradeRating(3, 'good')
addGradeRating(4, 'excellent')

rateMyGrade(4)
