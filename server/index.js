const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express()
const port = 3555

app.use(bodyParser.json())

app.use(express.static(`./build`))

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})



// ENDPOINTS
app.get('/api/properties', controller.getAllProps)
app.post('/api/property', controller.createProperty)
app.delete('/api/property/:id', controller.deleteProperty)

app.listen(port, console.log(`Port ${port} is on and crackin`))