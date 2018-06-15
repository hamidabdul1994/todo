/******************************************************************************
 *  Execution       :   1. default node         cmd> node server.js
 *                      2. if nodemon installed cmd> nodemon server.js
 *
 *  Purpose         : Defines all the apis required for ToDo notes application along with signup and signin apis.
 *
 *  @description
 *
 *  @file           : server.js
 *  @overview       : server file creates a connection on port 3030 for the application to run on localhost.
 *  @author         : Hamid Raza Noori <noorihamid1994@gmail.com>
 *  @version        : 1.0
 *  @since          : 17-05-2018
 *
 ******************************************************************************/

/**
 * @description Dependencies require to be installed before the execution of this file.
 * @var {Class} express class instance of the express
 * @var {Class} morgan class instance of the morgan
 * @var {Class} cors class instance of the cors
 * @var {Class} bodyParser class instance of the body-parser
 * @var {Class} expressValidator class instance of the express-validator
 */
var fs = require('fs');
var http = require('http');
var https = require('https');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
var expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const model = require('./model/connection');
const passport = require('passport');
const app = express();

var privateKey  = fs.readFileSync('apache.key', 'utf8');
var certificate = fs.readFileSync('apache.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
/**
 * @description Constant Variable is declared to use to define PORT number for the connection.
 * @var {integer} PORT
 */
const PORT = process.env.PORT || 3030 ;
/**
 * @description middleware added to support cross origin platform sharing.
 */
app.use(cors());
/**
 * @description middleware added to parse the data coming from url request.
 */
app.use('/api',bodyParser.urlencoded({extended : true}));
app.use('/api',bodyParser.json());
/**
 * @description middleware added to log result of the operation on the console using morgan module.
 */
app.use(morgan('dev'));
/**
 * @description middleware added to validate data coming from request using express validator.
 */
var expressValidator = require('express-validator');
app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());
app.use('/api',routes);
app.use(express.static("public"));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


// httpServer.listen(PORT, () => {
//   model.createConnection();
//   console.log('Listening on Port '+PORT);
// });
httpsServer.listen(PORT,()=>{
    model.createConnection();
  console.log('Listening on Port '+ PORT);
});
// app.listen(PORT, () => {
//   model.createConnection();
//   console.log('Listening on Port '+PORT);
// });
