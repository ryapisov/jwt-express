const uuid = require('uuid').v4()
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const Token = mongoose.model("token")
const JWT = JSON.parse(process.env.JWT)

const generateAccessToken =(userId)=> {
  // тип токена
  const payload = {
    userId,
    type: JWT.tokens.access.type
  }
  // время жизни токена
  const options = {
    expiresIn: JWT.tokens.access.expiresIn
  }
  // секретный ключ
  const secret = JWT.secret
  return jwt.sign(payload, secret, options)
}

const generateRefrashToken =()=>{
  const payload = {
    id: uuid(),
    type: JWT.tokens.refresh.type,
  }
  const options = {
    expiresIn: JWT.tokens.refresh.expiresIn
  }

  const secret = JWT.secret
  return {
    id: payload.id,
    token: jwt.sign(payload, secret, options)
  }
}

const replaceDbRefreshToken =(tokenId, userId)=>{
  Token.findOneAndRemove({userId})
    .exec()
    .then(()=> Token.create({tokenId, userId}))
}

module.exports = {
  generateAccessToken,
  generateRefrashToken,
  replaceDbRefreshToken
}
