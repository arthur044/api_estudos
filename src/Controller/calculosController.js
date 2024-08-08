import { Router } from "express";
const server = Router();
import dobro from "../service/calculos/dobroService.js";
import calculoMedia from "../service/calculos/mediaService.js";
import soma from "../service/calculos/calcBasicServices.js";
server.post("/dobro", (req, resp) => {
  let nums = req.body.dobro;
  let num2 = dobro(nums);
  resp.send({
    resp: `os dobros dos numeros são ${num2}`,
  });
});
server.post("/media", (req, resp) => {
  try {
    let nota1 = Number(req.query.nota1);
    let nota2 = Number(req.query.nota2);
    let nota3 = Number(req.query.nota3);
    // if (
    //   isNaN(req.query.nota1) ||
    //   isNaN(req.query.nota2) ||
    //   isNaN(req.query.nota3)
    // )
    //   throw new Error("Os parametros: nota1, 2 e 3 devem ser um numero VALIDO");

    let total = calculoMedia(nota1, nota2, nota3);
    let recuperacao = req.body.recuperacao;
    if (total <= 5) {
      total += recuperacao;
      total / 4;
    }
    resp.send({
      resp: `notal final : ${total}`,
    });
  } catch (error) {
    resp.status(400).send({
      error: error.message,
    });
  }
});
server.get("/calculadora/soma/:n1/:n2", (req, resp) => {
  try {
    if (isNaN(req.params.n1) || isNaN(req.params.n2))
      throw new Error(
        "Os parametros Numero 1 e/ou numero 2 devem obrigatoriamente ser um numero"
      );
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = soma(n1, n2);
    resp.send({
      resp: soma,
    });
  } catch (error) {
    resp.status(400).send({
      error: error.message,
    });
  }
});
server.get("/calculadora/subtrair/:n1/:n2", (req, resp) => {
  let n1 = Number(req.params.n1);
  let n2 = Number(req.params.n2);
  let subtrair = n1 - n2;
  resp.send({
    resp: subtrair,
  });
});
server.get("/calculadora/divisao/:n1/:n2", (req, resp) => {
  let n1 = Number(req.params.n1);
  let n2 = Number(req.params.n2);
  let divisao = n1 / n2;
  resp.send({
    resp: divisao,
  });
});
server.get("/calculadora/somaquery/", (req, resp) => {
  let n1 = Number(req.query.n1);
  let n2 = Number(req.query.n2);
  let somaquery = n1 + n2;
  resp.send({
    resp: `a soma com os parametros query são ${somaquery}`,
  });
});
export default server;
