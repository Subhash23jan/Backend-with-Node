const express = require('express');
const geoip = require('geoip-lite');
const visitorHistroy = require('../file_management/files');
const { set } = require('mongoose');
// const fileOperation = require('../file_management/files');
const router = express.Router();
router.get('/', (req, res) => {
  // fileOperation();
  const ip = req.ip;
  const geo = geoip.lookup(ip);
  console.log('IP:', ip);
  console.log('Location:', geo);
  res.send('User page');
});

router.get('/profile', (req, res) => { 
  // res.send('User profile page');
  setTimeout(() => {  
    res.redirect('/users');
  }, 2000);
 // res.redirect('/users');
});

module.exports = router;