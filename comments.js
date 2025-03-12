// Create web server
// Create a web server that listens on port 3000. When you visit the root URL, it should display a list of comments from the comments array. 
// Each comment should display the comment, name of the author, and the date it was posted. 
// Use the same HTML you created in the previous exercise. 
// Do not use Express.

const http = require('http');
const fs = require('fs');

function renderHTML(fileName, res) {
    fs.readFile(fileName, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}

const comments = [
    {name: 'John Doe', comment: 'This is a comment', date: '2020-09-16'},
    {name: 'Jane Doe', comment: 'This is another comment', date: '2020-09-17'}
];