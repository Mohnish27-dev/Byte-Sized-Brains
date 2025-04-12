const express = require('express')
const cors = require('cors');
const registerRoute = require('./routes/register');
const loginRoute= require('./routes/login');
const mongoose = require('mongoose')
const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(express.static('frontend'));
app.use(express.urlencoded({ extended: true }))


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registration', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB successfully")
});




// Routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);

app.get('/', (req, res) => {
  res.send('Hello Mohnish!')
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});