require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
require("./app/models")

const config = require("./config")
const app = express()

const JWT = JSON.parse(process.env.JWT)

console.log( JWT )

// database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) // app start
  .then(()=>{
    config.express(app)
    config.routes(app)
    config.start(app)
    console.log('Connection database Ok')
  })
  .catch(()=> console.error(`Error DATABASE connecting`))
