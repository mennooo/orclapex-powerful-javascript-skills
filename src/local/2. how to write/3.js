// How to write code

/*
  Example 3
  Creating an Instance Object: GradeRating

  GradeRating.addRatings
  GradeRating.setGrade
  GradeRating.rate
  GradeRating.output

*/

function GradeRating (grade, ratings) {
  // public properties
  this.grade
  this.ratings = []

  // execute on new instance
  this.addRatings(ratings)
  this.setGrade(grade)
}

GradeRating.prototype.setGrade = function (grade) {
  this.grade = grade
  this.rate()
}

GradeRating.prototype.addRatings = function (userRatings) {
  let self = this
  // private function
  function _addRating (userRating) {
    self.ratings[userRating.grade] = userRating.rating
  }
  // Add all definitions
  userRatings.forEach(_addRating)
}

GradeRating.prototype.rate = function () {
  this.rating = this.ratings[this.grade]
}

GradeRating.prototype.output = function () {
  if (this.rating) {
    console.log(`Your rating is ${this.rating}`)
  } else {
    console.error('Invalid grade')
  }
}

// Use this Object
let ratings = [
  {
    grade: 1,
    rating: 'bad'
  }, {
    grade: 2,
    rating: 'average'
  }, {
    grade: 3,
    rating: 'good'
  }, {
    grade: 4,
    rating: 'excellent!'
  }
]

// Create new instance
let myGradeRating = new GradeRating(3, ratings)
myGradeRating.output()

// It is stateful
myGradeRating.setGrade(myGradeRating.grade + 1)
myGradeRating.output()
