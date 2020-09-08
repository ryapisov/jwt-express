const jwt = require("jsonwebtoken")

module.exports =(req, res, next)=> {
  const authHeader = req.get('Authorization')
  if(!authHeader){
    res.status(401).json({message:'Token not provided!'})
  }

  const token = authHeader.replace('Bearer ', '')
  try{
    jwt.verify(token, process.env.JWT_SECRET)
  } catch (err){
    if(err instanceof jwt.JsonWebTokenError){
      res.status(401).json({message: 'Invalid token'})
    }
  }

  next()
}
