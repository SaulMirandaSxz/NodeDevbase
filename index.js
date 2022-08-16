
const express = require('express');

const app = express();

const port =  process.env.PORT || 5000;

const axios = require('axios');

const data = JSON.stringify({
    name: "airtable",
});

const options = {
    hostname: "devbase-node.herokuapp.com",
    path: '/api/airtable',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};




app.get('/api/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the Devbase API Service',
    })
});






//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});


axios.post("https://devbase-node.herokuapp.com/api/airtable", data).then(res => {
    console.log('Status Code : ${res.status}');
    conselog.log('Body : ${JSON.stringify(res.data)}');
}).catch(err => {
    console.log(err);
})
