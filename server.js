'use strict'
const express = require('express');
const app = express();

/*
displaly the IP address, language and operating system for my browser

{
"ipaddress": "98.202.34.141",
"language": "en-US",
"software": "Macintosh; Intel Mac OS X 10_12_6"
}
*/

app.get('/', (req, res) => {
  res.json({
    ipaddress: req.headers['x-forwarded-for'].split(",")[0],
    language: req.headers['accept-language'].split(",")[0],
    software: req.headers['user-agent'].split(")")[0].split('(')[1]
  })
} );

app.listen(3000);
