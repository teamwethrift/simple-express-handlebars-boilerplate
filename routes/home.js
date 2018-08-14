const routeHome = (req, res, next) => {
  const context = {
    name: 'Nick',
    date: new Date()
  }
  res.render('home', context)
}

module.exports = routeHome
