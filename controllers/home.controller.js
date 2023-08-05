const homeModel = require('../models/home.model')

exports.getHome = (req, res, next) => {

      res.render("index");
  
}