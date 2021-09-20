const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    //eslint-disable-next-line no-console
    console.log(`App running at http://localhost:${port}`)
});
