module.exports =(app)=> {
  app.listen(process.env.EXPRESS_PORT, ()=> {
    console.log(`Server start: ${process.env.EXPRESS_PORT}`)
  })
}
