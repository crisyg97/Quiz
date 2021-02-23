const express = require('express');
const router = express.Router();

const user = require('./user');

module.exports = app => {
  router.get('/', (req,res)=>{
    res.render('user.pug');
  });

  router.post('/', user.create);

  app.use(router);
};