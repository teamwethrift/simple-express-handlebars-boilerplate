const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const helpers = require('./helpers')

// require routes
const routeHome = require('./routes/home')
const routeAbout = require('./routes/about')

const app = express()

// use express-handlebars view engine and set views template directory
const hbs = exphbs.create({
  partialsDir: __dirname + '/views/partials',
  helpers: helpers()
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// serve static files form /public
app.use(express.static(path.resolve(__dirname, 'public'))) // serve static files

// Set your routes here
app.get('/', (req, res, next) => routeHome(req, res, next))
app.get('/about', (req, res, next) => routeAbout(req, res, next))

// Start the server
app.listen(process.env.PORT || 3000, () => console.log(`Express server listening on port ${process.env.PORT || 3000}!`))
