const express = require('express')
const mongoose = require('mongoose')

const items = require('./routes/api/items')

const app = express()

app.use(express.json())


const db = require('./config/keys').mongoURI
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err))

app.use('/api/items', items)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => `Connected on port: ${PORT}`)
