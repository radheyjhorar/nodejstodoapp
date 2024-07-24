const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// route imports
const todoRoute = require('./routes/todo.route');
const aboutRoute = require('./routes/about.route');

// Set up Express app
const app = express();
app.use(express.json());

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.mongoDBURI

// connect to MongoDB 
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB connected successfully");
} catch (error) {
  console.error("MongoDB connection error", error);
}


app.use('/', todoRoute);
app.use('/about', aboutRoute);
app.use('/login', (req, res) => {
  res.render('pages/login');
});
app.use('/signup', (req, res) => {
  res.render('pages/signup');
});
app.use('*', (req, res) => {
  res.render('pages/404');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});