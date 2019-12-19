// routes
const { movieRoute, loginRoute, registerRoute } = require('./router');

// server setup
const express = require('express');
const session = require('express-session'); // [1]
const app = express();
const port = 3000;
const Admin = require('./router').Admin

// ejs setup
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// set session
// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat'
}))

// home page
app.get('/', (req, res) => res.redirect('/movie'));

// routes to different pages
app.use('/movie', movieRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/admin', Admin)


app.listen(port, () => console.log(`Movie Review listening at port ${port}`));
