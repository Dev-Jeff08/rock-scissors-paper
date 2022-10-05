const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
const path = require('path');

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});


app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/game/game.html"))
})

app.get('/gameover', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/game/gameover.html"))
})


app.listen(port, () => {
    console.log(`Your server is running on ${port}`);
})

