const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
let wins = 0;


app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.post('/wins', (req, res) => {
    wins = req.body

    console.log(wins)
})

app.get('/wins', (req, res) => {
    res.send({ wins })
})


app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/game/game.html"))
})

app.get('/gameover', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/game/gameover.html"))
})

app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, "./main.js"))
})

app.get('/gameovermain', (req, res) => {
    res.sendFile(path.join(__dirname, "./gameover.js"))
})


app.listen(port, () => {
    console.log(`Your server is running on ${port}`);
})

