import express from 'express';
import { router }from "./config/routes";
import { mongoose } from "./config/database";


const app = express();

const database = mongoose;

app.use(express.json());

app.use(router);

app.listen(1234,function(){
    console.log("o servidor está rodando...");
});