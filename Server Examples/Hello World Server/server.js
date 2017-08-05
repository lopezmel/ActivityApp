/**
 * Created by melissalopez
 */

var http = require('http');
var hostname = 'localhost';
var port = 3000;
var fileSystem = require('fs');
var path = require('path');


var server = http.createServer(function (req, res) {


    //handel method
    console.log('Request for ' + req.url + ' by method ' + req.method);

    //check of request is get and if it is it will be handeled
    if (req.method == 'Get'){
        //construct the file url
        var fileUrl;

        //if the request ends with / that means its accessing the index file
        if (req.url == '/') fileUrl = 'index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./Public'+fileUrl);

        //check extension of file name
        var fileExsit = path.extname(filePath);
        if(fileExsit == '.html'){
            fs.exsists(filePath, function (exsists) {
                if (!exsists){
                    res.writeHead(404, {'Content': 'text/html'});
                    res.end('<h1>404 Error: ' + fileUrl + '</h1>');
                    return;
                }
                res.writeHead(200, {'Content Type': 'text/html'});
                fileSystem.createReadStream(filePath).pipe(res);
            });
        }
        else {
            res.writeHead(404, {'Content Type: ':'text/html'});
            res.end('<h1>404 Error not a Html file ' +fileUrl + '</h1> ')

        }
    }
    else {
        res.writeHead(404, { 'content type': 'text/html'});
        res.end('<h1>404 Error ' + req.method + '</h1>');
    }

})


server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);

})
