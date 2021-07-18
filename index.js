const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const port = 5000

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pnj3g.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log('err', err)
    const collection = client.db(`${process.env.DB_NAME}`).collection("information");
    console.log('collection', uri)


    app.get('/', (req, res) => {
        res.send('The journey of 50 days with coder heroes!')
    });
});

app.listen(process.env.PORT || port);