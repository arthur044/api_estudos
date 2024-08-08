import { Router } from "express";
const server = Router();
server.get("/mensagem/ola", (req, resp) => {
  try {
    if (!req.query.nome)
      throw new Error("o parametro Nome deve estar incluso.");

    let nome = req.query.nome;
    resp.send({
      resp: `Ola ${nome}`,
    });
  } catch (error) {
    resp.send({
      error: error.message,
    });
  }
});
server.get("/opameusqueridos", (req, resp) => {
  resp.send({ resp: "sdds dela" });
});
server.get("/opameusqueridos/1", (req, resp) => {
  resp.send({ resp: "ta foda irmao" });
});
server.get("/opameusqueridos/2", (req, resp) => {
  resp.send({
    resp: "salva nois !",
  });
});
export default server;
