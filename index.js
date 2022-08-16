
const express = require('express');

const app = express();

const port =  process.env.PORT || 5000;

const axios = require('axios');

const data = JSON.stringify({
    name: "airtable",
});

const options = {
    hostname: "localhost:5000",
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




axios.post("https://devbase-node.herokuapp.com/api/airtable", data).then(res => {
    console.log('Status Code : ${res.status}');
    conselog.log('Body : ${JSON.stringify(res.data)}');
}).catch(err => {
    console.log(err);
})
