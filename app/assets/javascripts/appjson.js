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
   this.saveReview = function(book){
      $http({
      method: 'POST', 
      url: '/reviews.json', 
      headers: {'Content-Type' : 'application/json'},
      data: book
            })
                                  }
  });



/* Json format
{"starRating" : "5",
"desc" : "Awesome book",
"reviewedBy" : "dp"
}
*/