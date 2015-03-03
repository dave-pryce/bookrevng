angular.module('bookReview',[]);


// Get data from bookrevs object below
angular.module('bookReview')  
  .controller('JsController', function(){
    this.bookreviews = bookreviews;
  });


// push object
angular.module('bookReview')
    .controller('ReviewController', function() {
    this.book = {};
     // push this book on to the bookrevs array 
    this.addReview = function(book) {
    bookreviews.push(this.book);
    this.book = {};
    };
  });


  var bookreviews =
  [
  {starRating: '3', title: 'The Game Changer', author: 'Fox',  review: 'About games and gaming - blah, blah, blah'},
  {starRating: '4', title: 'Workout', author: 'Apello' , review: 'Cool management workouts'},
  {starRating: '2', title: 'Visual Mojo', author: 'Cazaly',  review: 'Amazing Pictures'}
  ];



//////////////////////// old syntax //////////////////////////////////////////////////
// Get data from API
angular.module('bookReview')
  .controller('DisplayBooksController', function($http){
    var self = this;
    self.books = [];
    $http.get('/reviews.json').success(function(data){
    self.books = data;
    });
  });  



// Post data to API
angular.module('bookReview')
.controller('AddReviewController', function($http) {
  var controller = this;
  this.saveReview = function(book){
    $http({method: 'POST', url: '/reviews/new.json', data: book})
  };
});



       
