const products = require("../app/controllers/products")
// const users = require("../app/controllers/users")

module.exports =(app)=> {
  app.get('/products', products.getAll)
  app.post('/products', products.create)
  app.put('/products/:id', products.update)
  app.delete('/products/:id', products.remove)
}
