import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import mysql2 from 'mysql2';
import bodyParser from 'body-parser';

const app = express();
const port = 5500;
const password = 'mysqlmattiagiorgio14';
const percorsoBuild = path.join(__dirname, '../build'); // Correct build path
const database = 'mydb';
const htmlFilePath = path.join(percorsoBuild, 'index.html');

app.use(express.static(percorsoBuild)); // Serve the entire build directory
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: password,
    database: database,
    port: 3307,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

db.on('connection', (stream) => {
    if (stream) {
        console.log('Connesso a MySQL');
    } else {
        console.log('Sistema non connesso');
    }
});

app.get('/', (req: Request, res: Response) => {
    res.sendFile(htmlFilePath);
});

// Ensure React Router works by catching all routes
app.get('/*', (req: Request, res: Response) => {
    res.sendFile(htmlFilePath);
});

app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
    console.log(`Percorso statico: ${percorsoBuild}`);
});
