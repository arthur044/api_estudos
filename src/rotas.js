import express from "express"
import calculoController from './Controller/calculosController.js'
import imgsController from './Controller/imgsController.js'
import lojasController from './Controller/lojasController.js'
import msgController from './Controller/msgController.js'
import endpoints from "./Controller/exerciciosController.js" 
import ordemController from "./Controller/ordemController.js"
export default function addRoutes(server){
  server.use(endpoints)
  server.use(imgsController)
  server.use(lojasController)
  server.use(msgController)
  server.use(calculoController)
  server.use(ordemController)
  server.use("/storage/imgPerfil", express.static("./storage/imgPerfil"));

}