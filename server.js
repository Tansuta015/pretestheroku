var express = require('express');
var app = express();
var db = require('./database');
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',function(req,res){
    res.send('Express is running');
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log('App is running on http://localhost:' + port);
});