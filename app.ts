import express from 'express';
import cors from 'cors'
import bodyParser from "body-parser";
import addComplain from './addComplain'
import getUser from './getUser'
import addReviewer from './addReviewer'
import getAdmin from './getAdmin'
import getReviewe from './getReviewer'
import {init_chain_connection} from './chain_operations/chain'
import {print} from './utils'

const app: express.Application = express();
const port: number = 3000;
app.use(cors())
app.use(bodyParser.json())
app.get('/', (_req:any, _res:any) => {
    console.log(_req.params)
    _res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
});

app.post('/addcomplain', (_req:any, _res:any) => {
    addComplain(_req , _res)
});

app.get('/getuser', (_req:any, _res:any) => {
    getUser(_req , _res)
});

app.get('/getreviewer', (_req:any, _res:any) => {
    getReviewe(_req , _res)
});

app.get('/getadmin', (_req:any, _res:any) => {
    getAdmin(_req , _res)
});

app.put('/addreviewe', (_req:any, _res:any) => {
    addReviewer(_req , _res)
});

app.listen(port,async () => {
    try{
        await init_chain_connection()
    }
    catch{
        
    }
    finally{
        console.log(`TypeScript with Express
         http://localhost:${port}/`);
    }
});
