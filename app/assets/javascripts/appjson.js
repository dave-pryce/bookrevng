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
    controller.errors = null;
      $http({
      method: 'POST', 
      url: '/reviews.json', 
      data: book})
      .catch(function(book) {controller.errors = book.data.error})
     }

  });



//     headers: '{contentType : application/json}'
/* Json format
{"starRating" : "5",
"desc" : "Awesome book",
"reviewedBy" : "dp"
}
*/