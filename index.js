const express = require('express');
const { json } = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());

const shuvo =  {
    fullName : "Mohammd Hasibur Rahman Shuvo",
    firstName : "Hasibur Rahman",
    lastName : "Shuvo",
    shortName : "mhrshuvo",
    emailPrimary : "psnbshuvo@gmail.com",
    emailEdu: "18103361@iubat.edu",
    MobileNo : "+8801939261025",
}
mongoose.connect(process.env.MONGODB_URI ,{ useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('MongoDB connection successful');
})

const SmRoute= require('./routes/smlink');
app.use ('/socialMedia' ,  SmRoute );

app.get('/', (req, res) => {
    res.send(shuvo);
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});