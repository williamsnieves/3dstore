var http = require('http'),
    express = require('express'),
    path = require('path'),
    cors = require('cors'),
    app = require('./app');


var server = http.createServer(app);
server.listen(process.env.PORT || 3000);
console.log("listen in port 3000");