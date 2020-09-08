const products = require("../app/controllers/products")
const auth = require("../app/controllers/auth")

module.exports =(app)=> {
  // product
  app.get('/products', products.getAll)
  app.post('/products', products.create)
  app.put('/products/:id', products.update)
  app.delete('/products/:id', products.remove)
  // auth
  app.all('/signin', auth.signIn)
}
