import express from 'express';
import dotenv from 'dotenv';
import routerMain from './routes';

const server = express();

dotenv.config();

server.use(express.urlencoded({extended: true}));

server.use(routerMain);

server.listen(process.env.PORT_SERVER, ()=>{

    console.log(`O servidor está rodando na porta ${process.env.PORT_SERVER}`);

})