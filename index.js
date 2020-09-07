require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.get('/', (req, res)=>res.send("Привет мир"))
app.listen(3000, ()=>console.log("start 3000"))
