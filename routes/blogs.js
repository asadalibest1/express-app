const express = require('express');
const request = require('request-promise');
const cheerio = require('cheerio');
const json2csv = require('json2csv').Parser;
const fs = require('fs');

const router = express.Router();
/* GET home page. */
router.get('/', function (req, res1, next) {

  const news = 'https://www.saskatchewan.ca/government/news-and-media';

  const Data = [];

  (async () => {
    const res = await request({
      uri: news,
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9"
      },
      gzip: true,
    })

    const $ = cheerio.load(res);
    const _path = $('.results li');

    _path.each((ind, el)=>{
      const _date = $(`li:nth-child(${ind+1}) > time`).text();
      const paragraph = $(`li:nth-child(${ind+1}) > a`).text();
      Data.push({_date, paragraph});
    });
    // const para = $('#a-main-content > section > p').text().trim();

    const j2cp = new json2csv();
    const csv = j2cp.parse(Data);
    // console.log('csv', csv);
  
    fs.writeFileSync("./list.csv", csv, "utf-8");
   

  })()
});



module.exports = router;
