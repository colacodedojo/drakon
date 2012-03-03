var app = require('express').createServer();

app.get('/', function(req, res){
    //need to server up login page
    res.send('hello world');
});

app.post('/post', function(req, res) {
    //req should have the cred's
    //response with the allowed
});

app.get('/games', function(req, res) {
    //req needs to auth the user, retrieve games they are in
});

app.post('/game/join', function(req, res) {
    //need to auth user, add them to the game if it exists
});

app.get('/game', function(req, res) {
    //auth user is in game, retrieve game state
});

app.listen(3000);
