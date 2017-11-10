
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3002);
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
   res.redirect('./');
});


// ����404 ҳ��
app.use(function(req, res){
    res.type('text/html');
    res.status(404);
    res.send(' <span style="color:red">404 - Not Found</span>');
});

// ����500 ҳ��
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});