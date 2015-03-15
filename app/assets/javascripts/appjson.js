// Get data from API
angular.module('bookReview')
  .controller('DisplayReviewController', function($http){
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
    $http({
      method: 'POST', 
      url: '/reviews/new.json', 
      data: book
    })
    }
  });