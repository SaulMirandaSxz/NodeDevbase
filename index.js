
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
