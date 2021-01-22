const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('works!');
});

const hostname = "127.0.0.1";
const port = 8000;
app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));


