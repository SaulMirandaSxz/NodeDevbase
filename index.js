
const express = require('express');

const app = express();

const port =  process.env.PORT || 5000;

const axios = require('axios').default;

const data = JSON.stringify({
    name: "airtable",
});



axios.post("https://devbase-node.herokuapp.com/api/airtable", data).then(res => {
    console.log(`Status Code : ${res.status}`);
    console.log(`Body : ${JSON.stringify(res.data)}`);
}).catch(err => {
    console.log(err);
})


app.get('/api/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the Devbase API Service',
    })
});


const options = {
    hostname: "localhost",
    port: port,
    path: '/api/airtable',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};



//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});




