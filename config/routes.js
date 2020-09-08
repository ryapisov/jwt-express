const products = require("../app/controllers/products")
const auth = require("../app/controllers/auth")
const authMiddleware = require("../app/middleware/auth")

module.exports =(app)=> {
  // product
  app.get('/products', authMiddleware, products.getAll)
  app.post('/products', authMiddleware, products.create)
  app.put('/products/:id', authMiddleware, products.update)
  app.delete('/products/:id', authMiddleware, products.remove)
  // auth
  app.all('/signin', auth.signIn)
}
