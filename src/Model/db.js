
// Bring Mongoose into the app
var mongoose = require( 'mongoose' );

// Build the connection string
var dbURI = 'mongodb://mvance:mvance43776@ds153980.mlab.com:53980/whale_watch';

// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});


// BRING IN YOUR SCHEMAS & MODELS
// For example
require('./team');
const Token = mongoose.model('TokenSchema');
exports.index = function (req, res) {  
  Token.find({ "token": 'walton'
   }, function(err, token) { 
     var strOutput; 
     res.writeHead(200, { 
       'Content-Type': 'text/plain'
     }); 
     if (err) { 
       console.log(err); 
       strOutput = 'Oh dear, we\'ve got an error'; 
     } else { 
       console.log('Team created: ' + token); 
       strOutput = token + ' created in Group ' + token + '\nat ' + token.tokenHolders; 
     } 
     res.write(strOutput); 
     res.end(); 
   }); 
 };