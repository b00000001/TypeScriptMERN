import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    //eslint-disable-next-line no-console
    console.log(`App running at http://localhost:${port}`)
});
