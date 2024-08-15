import "dotenv/config.js";
import express from "express";
import cors from "cors";
import addRoutes from './rotas.js'
// env
const porta = process.env.PORT;
const server = express();
server.use(express.json());
server.use(cors());
// imports 
addRoutes(server)
// listen


server.listen(porta, () => console.log(`ta subindo ein! ${porta}`));