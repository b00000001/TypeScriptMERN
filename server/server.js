"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    //eslint-disable-next-line no-console
    console.log("App running at http://localhost:" + port);
});