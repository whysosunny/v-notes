const express = require('express');
const app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
    console.log("Server is up at ", port);
});


