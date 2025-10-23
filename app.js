import express from 'express';

// Import database configuration and models
import "./config/db.js";
import "./models/userModel.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World !');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Data received: ${JSON.stringify(req.body)}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
