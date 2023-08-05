const express = require('express')
const router = express.Router()
const passport = require('passport')
const userController = require('../controllers/auth.controller')

router.get('/', (req, res, next) => {
  res.render('user')
})




router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

module.exports = router