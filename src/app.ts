require('dotenv').config();
import express from 'express';
import config from 'config';
import { connectToDb } from './utils/connectToDb';
import log from './utils/logger';
import router from './routes';
const app = express();

app.use(express.urlencoded())
app.use(express.json())

app.use(router);

const port = config.get('port')

app.listen(port,()=>{
    log.info(`app statrted at http://localhost:${port}`)
    connectToDb()
})
