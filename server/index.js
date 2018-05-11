const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express()
const port = 3555

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})

// ENDPOINTS
app.get('/api/properties', controller.getAllProps)


app.listen(port, console.log(`Port ${port} is on and crackin`))