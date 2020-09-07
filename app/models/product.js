const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  id: Number,
  name: String,
  price: mongoose.Schema.Types.Decimal128
})

mongoose.model("Product", ProductSchema)
