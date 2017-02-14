// grab the test model we just created
var Test = require('./models/test');

module.exports = function (app) {
  // server routes ====================================================================================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/api/tests', function (req, res) {
    // use mongoose to get all tests in the database
    Test.find(function (err, tests) {
      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err) res.send(err);
      res.json(tests); // return all tests in JSON format
    });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)
  // etc..
  // etc..

  // frontend routes ==================================================================================================================
  app.get('*', function (req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
  });
};