var  express = require('express')
    , hbs = require('hbs'),
    http = require('http');

var port = process.env.PORT || 5000;

var app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/friends.html', function (req, res) {
    res.render('friends', {friends: [{name:'Mike'}, {name:'Dan'}]});
})

app.listen(port);
console.log('Listening on port ' + port);

