import { Router } from "express";
const endpoints = Router();
import multer from "multer";
import express from 'express'
let uploadPerfil = multer({ dest: "./storage/imgPerfil" });
// libera a pasta storage para uso externo
endpoints.use('./storage/imgPerfil', express.static('./storage/imgPerfil'))
// nome do parametro que vai pegar a imagem dentro do paranteses do single

endpoints.post(
  "/storage/perfil",
  uploadPerfil.single("imagem"),
  (req, resp) => {
    let caminho = req.file.path;
    let extensao = req.file.mimetype;
    let nome = req.file.originalname;
    resp.send({
      caminho: caminho,
      extensao: extensao,
      nome: nome,
    });
  }
);
export default endpoints;
