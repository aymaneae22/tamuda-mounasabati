const express = require('express')
const session = require("express-session");
const path = require('path')
const flash = require("connect-flash");
const homeRouter = require('./routes/home.route');
const userRouter = require('./routes/auth.route')
const passport = require('passport');

require('./controllers/passport')(passport)
require('dotenv').config()


const app = express()

app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'images')))
app.use(flash())
// SESSION MIDDLEWARE 
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    /*cookie: { secure: true }, // THIS WON'T WORK WITHOUT HTTPS
    // store: new MongoStore({ mongooseConnection: mongoose.connection }) */
}));

// PASSPORT MIDDLEWARE 
app.use(passport.initialize());
app.use(passport.session());


app.set('view engine', 'ejs')
app.set("views", "views")

app.get("/", homeRouter)
app.use("/auth", userRouter)


app.listen(7000, () => console.log('server is listen on port 7000'))