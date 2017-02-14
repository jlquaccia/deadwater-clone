// grab the mongoose module
var mongoose = require('mongoose');

// define our tests model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Test', {
  name: {type: String, default: ''}
});