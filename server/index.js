const express = require("express");
const bodyParser = require("body-parser");
const pino = require('express-pino-logger')();
const moment = require('moment');
const child = require("child_process");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/deploy/', (req, res) => {
    const site_id = req.query.site_id;
    const fortigate_sn = req.query.fortigate_sn;
    const fortiswitch_sn = req.query.fortiswitch_sn;

    const now = moment().format('YYYYMMDDHHmmssSS');

    const command = child.spawn("find", ["/usr/bin"]);

    command.stdout.on('data', (data) => {
        res.write('' + data);
    })

    command.stdout.on('error', (data) => {
        res.write('' + data);
    })
})

app.listen(5000, () => {
    console.log('Express server running on localhost:5000');
})
