const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const port =  process.env.PORT || 5000;

const axios = require('axios').default;

const data = JSON.stringify({
    name: "airtable",
});

const expenses = [
    { id: 1, name: "string", amount: 1500, file: "string.jpg" },
    { id: 2, name: "string1", amount: 1500, file: "string1.jpg"} ];

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the Devbase API Service',
    })
});


app.get('/api/expenses', (req, res) => {
    res.send(expenses);
});


app.post('/api/expenses', (req, res) => {
    const expense = {
        id: expenses.lenght + 1,
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




