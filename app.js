const express = require('express')
require('dotenv').config()
const app = express()

app.use('/', require('./routes/spotify'))

let port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))
