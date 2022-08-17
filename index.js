const express = require('express')

const bodyParser = require('body-parser')

const app = express();

// Create appliation/json parser
var JsonParser = bodyParser.json();

// Create application/x-www-form-urlencoded parser
var UrlEncodedParser = bodyParser.urlencoded({ extended: false });

const port =  process.env.PORT || 5000;

const axios = require('axios').default;


const data = JSON.stringify({
    name: "airtable",
});

const expenses = [
    { name: "string", amount: 1500, file: "string.jpg" },
    { name: "string1", amount: 1500, file: "string1.jpg"} ];

app.use(express.json());





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



//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});




