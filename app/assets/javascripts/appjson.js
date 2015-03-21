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
        url: '/reviews.json', 
        data : this.book
        })

     .success(function(){controller.push(this.book)});
     this.book = {}; // clear form
     }


  });



