import { Router } from "express";
const endpoints = Router();
import { soma } from "../service/calculos/calcBasicServices.js";

endpoints.get("/calculadora/soma/:n1/:n2", (req, resp) => {
  try {
    if (isNaN(req.params.n1) || isNaN(req.params.n2))
      throw new Error(
        "Os parametros Numero 1 e/ou numero 2 devem obrigatoriamente ser um numero"
      );
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let total = soma(n1,n2)
    resp.send({
      resp: total,
    });
  } catch (error) {
    resp.status(400).send({
      error: error.message,
    });
  }
});
endpoints.get("/calculadora/subtrair/:n1/:n2", (req, resp) => {
  let n1 = Number(req.params.n1);
  let n2 = Number(req.params.n2);
  let subtrair = n1 - n2;
  resp.send({
    resp: subtrair,
  });
});
endpoints.get("/calculadora/divisao/:n1/:n2", (req, resp) => {
  let n1 = Number(req.params.n1);
  let n2 = Number(req.params.n2);
  let divisao = n1 / n2;
  resp.send({
    resp: divisao,
  });
});
endpoints.get("/calculadora/somaquery/", (req, resp) => {
  let n1 = Number(req.query.n1);
  let n2 = Number(req.query.n2);
  let somaquery = n1 + n2;
  resp.send({
    resp: `a soma com os parametros query são ${somaquery}`,
  });
});
export default endpoints;
