import express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config();


const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.listen(PORT,() => {
    //eslint-disable-next-line no-console
    console.log(`Server listening on port ${PORT}`);
})