const express = require('express');
const request = require('request-promise');
const cheerio = require('cheerio');
const json2csv = require('json2csv').Parser;
const fs = require('fs');

const router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {

  const Data = [{
    title: 'news',
    paragraph: 'today news is here!!',
  }];
  res.send(Data)
});

module.exports = router;
