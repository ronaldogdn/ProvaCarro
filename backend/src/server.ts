import express from 'express';
import cors from "cors";
import { router }from "./config/routes";
import { mongoose } from "./config/database";


const app = express();
//cors
app.use(cors());
app.use(express.json());
app.use(router);

const database = mongoose;




app.listen(3000,function(){
    console.log("o servidor está rodando...");
});