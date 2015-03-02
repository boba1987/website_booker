var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, '127.0.0.1', function(){
  console.log('node server started');
});

app.get('/', function(req, res){
    
});