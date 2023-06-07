import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import ejs from 'ejs';
import path from 'path';
import router from './routes/home.js'
import storeData from './utilities/storeData.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const mongoUsername = process.env['MONGO_USERNAME']
const mongoPassword = process.env['MONGO_PASSWORD']

const port = 8000

const app = express();
app.use(cors());
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/', router);
app.use(express.static(path.join(__dirname + '/public')));

app.set("view engine", "ejs")

const uri = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.zruc00d.mongodb.net/internship?retryWrites=true&w=majority`;
mongoose.set('strictQuery', true)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })

    storeData()

}).catch((err) => {
    console.log(err)
})