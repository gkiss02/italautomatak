const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public', { 'extensions': ['css'] , 'index': false }));
app.set('view engine', 'ejs');

require('./route/index')(app);

app.listen(3000,function() {
    console.log("Running on port 3000");
})