const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// initialize our express app
const app = express();
const product = require('./routes/product.route'); // Imports routes 
let port = 1234;
let dev_db_url = 'mongodb://localhost/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



//mongoose.connect('mongodb://localhost/productstutorial', function(err, res) {
//  if (err) throw err;
//db = res;
//  console.log('Connected to Database');
//});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});