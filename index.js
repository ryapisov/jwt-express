require('dotenv').config()
const express = require("express")

const mongoose = require("mongoose")

// models
require("./app/models/product")

// config
require("./app/config/express")(app)

const app = express()

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.get('/', (req, res)=>res.send("Привет мир"))
app.listen(3000, ()=>console.log("start 3000"))
