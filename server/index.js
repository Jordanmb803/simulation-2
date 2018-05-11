const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express()
const port = 3555

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})



app.listen(port, console.log(`Port ${port} is on and crackin`))