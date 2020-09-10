const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TokenSchema = new Schema({
  tokenId: String,
  userId: String
})

mongoose.model("token", TokenSchema)
