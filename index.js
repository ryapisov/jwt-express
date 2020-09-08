require('dotenv').config()
const mongoose = require("mongoose")
const app = require("express")()

require("./app/models")

const config = require("./config")
config.express(app)
config.routes(app)

// database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) // app start
  .then(()=> config.start(app))
  .catch(()=> console.error(`Error DATABASE connecting`))
