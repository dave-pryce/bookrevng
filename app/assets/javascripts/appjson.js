// Get data from API
angular.module('bookReview')
  .controller('DisplayReviewController', function($http){
    var controller = this;
    controller.books = [];
    
              $http({ 
                method: 'GET', 
                url: '/reviews.json'}).success(function(data){
                controller.books = data;
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
      console.log(book.data)
     }

  });