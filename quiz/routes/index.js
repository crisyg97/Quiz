const express = require('express');
const router = express.Router();

const user = require('./controllers/user');
const question = require('./controllers/question');

module.exports = app => {
  router.get('/', (req,res)=>{
    res.render('user.pug');
  });
  router.post('/', user.create);
  
  router.get('/question', (req,res) => {
    res.render('question.pug');
  });
  router.get('/question', question.randomQuestion);

  app.use(router);
};