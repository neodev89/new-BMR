"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var cors_1 = require("cors");
var mysql2_1 = require("mysql2");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
var port = 5500;
var password = 'mysqlmattiagiorgio14';
var percorso = path_1.default.join(__dirname, 'public');
var database = 'mydb';
var htmlFilePath = path_1.default.join(percorso, 'index.html');
app.use(express_1.default.static(percorso));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
var db = mysql2_1.default.createPool({
    host: 'localhost',
    user: 'root',
    password: password,
    database: database,
    port: 3307,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
db.on('connection', function (stream) {
    if (stream) {
        console.log('Connesso a MySQL');
    }
    else {
        console.log('Sistema non connesso');
    }
});
app.get('/', function (req, res) {
    res.sendFile(htmlFilePath);
});
app.listen(port, function () {
    console.log("Server in ascolto alla porta ".concat(port));
});
