import express from "express"

import calculoController from './Controller/calculosController.js'
import imgsController from './Controller/imgsController.js'
import lojasController from './Controller/lojasController.js'
import msgController from './Controller/msgController.js'

export default function addRoutes(server){
  server.use(imgsController)
  server.use(lojasController)
  server.use(msgController)
  server.use(calculoController)
  server.use("/storage/imgPerfil", express.static("./storage/imgPerfil"));

}