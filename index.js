require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

// models
require("./app/models/product")

const app = express()

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(bodyParser.json())
app.get('/', (req, res)=>res.send("Привет мир"))
app.listen(3000, ()=>console.log("start 3000"))
