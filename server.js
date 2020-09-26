const express = require('express');
const app = express();
const cors = require('cors');
require('./models');
const bodyparser = require('body-parser');
const fileUpload = require('express-fileupload');
const path =require('path');

app.use(fileUpload());

app.use(cors());

app.use(bodyparser.json());

app.use(express.urlencoded({extended:false}));

app.use(express.json({extended:false}));


app.use(express.static(path.join(__dirname, 'public')));
const postMessages = require('./routes/tutorial.routes');

app.use('/api/postmessage', postMessages);

const Port = 5000;

app.listen( Port, () =>{
    console.log("Server Started");
})