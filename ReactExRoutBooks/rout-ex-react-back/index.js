var express = require("express")
var session = require('express-session');
var app = express();
var facade = require("./facade")
var bodyParser = require('body-parser');

app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/books', function(req,res) {
    facade.getBooks((msg) => {
        console.log(msg);
        res.json(msg)
    })
})


app.post('/api/addbook', (req,res) => {
    let book = req.body.book
    facade.addBook(book, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json("Book has been added" + book);
        }
    })
})


app.put('/api/editbook', (req,res) => {
    var book = req.body.book
    facade.updateBook(book, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            console.log(data)
            res.json({ updatedBook: data })
        }
    })
})


app.delete('/api/deletebook/:id', (req,res) => {
    var bookid = parseInt( req.params.id )
    facade.deleteBook(bookid, (err, data) => {
        if(err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
})

console.log("server has started on 3100")
module.exports = app;