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
 //var controller = this;
     this.saveReview = function(book){
    //  controller.errors = null;
        $http({
        method: 'POST', 
        url: '/reviews.json', 
        data : this.book
        })
       //   .catch(function(book) {controller.errors = book.data.error})
      // console.log(this.book)
     
     }


  });



