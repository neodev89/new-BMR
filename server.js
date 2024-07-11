"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var cors_1 = require("cors");
var path_1 = require("path");
var mysql_1 = require("mysql");
var react_1 = require("react");
var server_1 = require("react-dom/server");
var App_1 = require("static/App");
var configdb_json_1 = require("./config/configdb.json");
var port = 3000;
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
//create a connection db
var db = mysql_1["default"].createConnection({
    host: configdb_json_1.database.host,
    user: configdb_json_1.database.user,
    password: configdb_json_1.database.password,
    port: configdb_json_1.database.port
});
// connecting db
db.connect(function (err) {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log("db connesso");
});
// Usa express.static per servire i file statici
app.use(express_1["default"].static(path_1["default"].join(__dirname, "/public/")));
app.use(express_1["default"].static(path_1["default"].join(__dirname, "/src/")));
app.get("/", function (req, res) {
    var initialMarkup = server_1["default"].renderToString(react_1["default"].createElement(App_1["default"]));
    fs_1["default"].readFile(path_1["default"].join(__dirname, "build", "index.html"), 'utf8', function (err, data) {
        if (err) {
            console.error("Error: ".concat(err));
            res.status(500).send('An error occurred while reading the index.html file.');
        }
        else {
            // Replace a placeholder in your index.html file with the initialMarkup
            var result = data.replace('<div id="root"></div>', "<div id=\"root\">".concat(initialMarkup, "</div>"));
            res.send(result);
        }
    });
});
// Aggiungi questo endpoint per gestire la richiesta POST dal tuo form
app.post("/saveUser", function (req, res) {
    var _a = req.body, nome = _a.nome, cognome = _a.cognome, email = _a.email, data_di_nascita = _a.data_di_nascita;
    var userData = {
        nome: nome,
        cognome: cognome,
        email: email,
        data_di_nascita: data_di_nascita
    };
    fs_1["default"].readFile("user_data.json", 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send("An error occurred while reading user data.");
        }
        else {
            if (data === "") {
                console.log("il file è vuoto");
            }
            else {
                var existingUsers = JSON.parse(data);
                existingUsers.push(userData);
                fs_1["default"].writeFile("user_data.json", JSON.stringify(existingUsers), function (err) {
                    if (err) {
                        console.log("Error: ".concat(err));
                        res.status(500).send("An error occurred while saving user data.");
                    }
                    else {
                        console.log("User data saved successfully.");
                        res.status(200).send("User data saved successfully.");
                    }
                });
            }
        }
    });
});
app.listen(port, function () {
    console.log("server attivo alla porta ".concat(port));
});
