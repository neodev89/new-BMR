// import express, { Express, Request, Response } from 'express';
// import fs from 'fs';
// import cors from 'cors';
// import path from 'path';
// import mysql, { Connection } from 'mysql';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import App from './src/App';
// import { database } from "./config/configdb.json";

// const port: number = 3000;
// const app: Express = express();


// app.use(cors());
// app.use(express.json());

// //create a connection db
// const db: Connection = mysql.createConnection({
//   host: database.host,
//   user: database.user,
//   password: database.password,
//   port: database.port,
// });

// // connecting db
// db.connect((err: { stack: any; }) => {
//   if (err) {
//     console.log(err.stack);
//     return;
//   }
//   console.log(`db connesso`);
// });

// // Usa express.static per servire i file statici
// app.use(express.static(path.join(__dirname, "/public/")));
// app.use(express.static(path.join(__dirname, "/src/")));

// app.get("/", (req: Request, res: Response) => {
//   const initialMarkup = ReactDOMServer.renderToString(React.createElement(App));

//   fs.readFile(path.join(__dirname, "build", "index.html"), 'utf8', (err, data) => {
//     if (err) {
//       console.error(`Error: ${err}`);
//       res.status(500).send('An error occurred while reading the index.html file.');
//     } else {
//       // Replace a placeholder in your index.html file with the initialMarkup
//       const result = data.replace('<div id="root"></div>', `<div id="root">${initialMarkup}</div>`);

//       res.send(result);
//     }
//   });
// });

// // Aggiungi questo endpoint per gestire la richiesta POST dal tuo form
// app.post("/saveUser", (req: Request, res: Response) => {
//   const { nome, cognome, email, data_di_nascita } = req.body;

//   const userData = {
//     nome,
//     cognome,
//     email,
//     data_di_nascita,
//   };

//   fs.readFile("user_data.json", 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("An error occurred while reading user data.");
//     } else {
//       if (data === "") {
//         console.log("il file è vuoto");
//       } else {
//         const existingUsers = JSON.parse(data);
//         existingUsers.push(userData);
//         fs.writeFile("user_data.json", JSON.stringify(existingUsers), (err) => {
//           if (err) {
//             console.log(`Error: ${err}`);
//             res.status(500).send("An error occurred while saving user data.");
//           } else {
//             console.log(`User data saved successfully.`);
//             res.status(200).send("User data saved successfully.");
//           }
//         });
//       }
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`server attivo alla porta ${port}`);
// });
