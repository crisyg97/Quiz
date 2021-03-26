const express = require('express');
const router = express.Router();
//import axios from "axios";
//import urlAPI from "../config/config.js"

const user = require('../controllers/user');
const question = require('../controllers/question');

module.exports = app => {
  router.get('/', (req,res) => {
    res.render('user.pug');
  });
  router.post('/', (req,res) => {
    console.log("api funcionando");
    console.log(req);
  });
  //router.post('/', user.create);
  
  router.get('/question', (req,res) => {
    res.render('question.pug');
  });
  router.get('/question', question.randomQuestion);

  /*router.get('/ranking', (req,res) => {
    res.render('ranking.pug');
  })*/
  //router.get('/ranking', user.index);
  router.get('/ranking', (req,res) => {
    User.find((err, user) =>{
        if(err) {console.log(err)}
        console.log("datos", user);
        let jsonData = JSON.parse(user);
        console.log(jsonData);
        res.render('ranking.pug', {title: 'users list', data: jsonData});
    });
  });

  router.get('/about', (req, res) => {
    res.render('about.pug');
  })

  app.use(router);
};