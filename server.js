// Setup env
require('dotenv').config();

const express = require('express');
const compression = require('compression');

const app = express();

//Middleware
app.use(compression());


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.all('*', (req, res) => {
    res.status(404).send('Request Not Found')
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))