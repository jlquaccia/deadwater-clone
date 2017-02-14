angular.module('deadwater').factory('Test', ['$http', function ($http) {
  return {
    // call to get all tests
    get: function () {
      return $http.get('/api/tests');
    },
    // these will work when more API routes are defined on the Node side of things
    // call to POST and create a new test
    create: function (testData) {
      return $http.post('/api/tests/' + testData);
    },
    // call to DELETE a nerd
    delete: function (id) {
      return $http.delete('/api/tests/' + id);
    }
  };
}]);