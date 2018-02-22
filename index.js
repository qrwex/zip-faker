'use strict';

const express = require('express');
const app = express();
const zip = require('./src/ZipFaker');

app.get('/generate/:country', (req, res) => {
    let code = zip.generate(req.params.country);
    res.send({code});
});

app.listen(3003);