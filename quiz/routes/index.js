const express = require('express');
const router = express.Router();
//import axios from "axios";
//import urlAPI from "../config/config.js"

const user = require('../controllers/user');
const question = require('../controllers/question');

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