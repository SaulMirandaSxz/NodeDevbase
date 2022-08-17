const express = require('express')

const bodyParser = require('body-parser')

const app = express();

// Create appliation/json parser
var JsonParser = bodyParser.json();

// Create application/x-www-form-urlencoded parser
var UrlEncodedParser = bodyParser.urlencoded({ extended: false });




const expenses = [
    { name: "string", amount: 1500, file: "string.jpg" },
    { name: "string1", amount: 1500, file: "string1.jpg"} ];


// parse application/json
app.use(bodyParser.json())


app.set('port', (process.env.PORT || 5000));




app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the Devbase API Service',
    })
});


app.get('/api/expenses', (req, res) => {
    res.send(expenses);
});


app.post('/api/expenses', JsonParser, function (req, res) {
    const expense = {
        name: req.body.name,
        amount: parseInt(req.body.amount),
        file: req.body.file,
    }
    
    expenses.push(expense);
    res.send(expense);
});






//For avoidong Heroku $PORT error
app.get('/', function(_request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
