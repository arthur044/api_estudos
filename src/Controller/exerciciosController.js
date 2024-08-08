import {Router} from 'express'
const endpoints =  Router()
import {dobro} from "../service/calculos/dobroService.js";
import {calculoMedia} from "../service/calculos/mediaService.js";

endpoints.post("/dobro", (req, resp) => {

  let nums = req.body.dobro;
  let num2 = dobro(nums);
  resp.send({
    resp: `os dobros dos numeros são ${num2}`,
  });
});
endpoints.post("/media", (req, resp) => {
  try {
    let nota1 = Number(req.query.n1);
    let nota2 = Number(req.query.n2);
    let nota3 = Number(req.query.n3);
    let total = calculoMedia(nota1, nota2, nota3);
    resp.send({
      resp: total
    });
  } catch (error) {
    resp.status(400).send({
      error: error.message,
    });
  }
});
export default endpoints;
 