import {Router } from 'express'
const endpoints = Router()
import validarPedidos from '../validations/loja/lojaValidations.js'
endpoints.post("/loja/pedido", (req, resp) => {
  try {
    validarPedidos(req)
    let cupom = req.query.cupom;
    let total = req.body.total;
    let parcelas = req.body.parcelas;
    if (parcelas >= 2) {
      total += total * 0.05;
    }
    if (cupom == "cupom100") {
      total -= 100;
    } else if (cupom == "cupom50") {
      total -= 50;
    } else if (cupom == "cupom10") {
      total -= 10;
    } else if (cupom == "cupom200") {
      total -= 200;
    }
    resp.send({
      resp: `o valor total da compra   ${total}`,
    });
  } catch (error) {
    resp.status(400).send({
      error: error.message,
    });
  }
});
endpoints.post("/acaiteria", (req, resp) => {
  try {
    let qtdpeq = req.body.qtdpeq;
    let qtdmid = req.body.qtdmid;
    let qtdgg = req.body.qtdgg;
    let cupom = req.query.cupom;
    let total = qtdpeq * 15.0 + qtdmid * 17.5 + qtdgg * 18.0;
    if (cupom == "cupom20" && total > 20) {
      total -= 20;
    } else if (cupom == "cupom50" && total > 70) {
      total -= 50;
    }
    resp.send({
      resp: `total da compra dos açais ${total}`,
    });
  } catch (error) {
    resp.status(400).send({
      error: error.message,
    });
  }
});
endpoints.post("/hamburgueria", (req, resp) => {
  // pegar especificação do hamburgui

  let pedidos = req.body.pedidos;
  let cupom = req.query.cupom;
  const { burguerpeq } = pedidos;
  const { burguermid } = pedidos;
  const { burguergg } = pedidos;
  let total =
    burguerpeq.quantidade * 15.0 +
    burguermid.quantidade * 20.0 +
    burguergg.quantidade * 35.0;
  if (
    burguerpeq.especificacao === "sem salada" &&
    burguermid.especificacao === "sem salada" &&
    burguergg.especificacao === "sem salada"
  ) {
    total -= 20;
  } else if (burguerpeq.especificacao === "sem salada") {
    total -= 5;
  } else if (burguermid.especificacao === "sem salada") {
    total -= 5;
  } else if (burguergg.especificacao === "sem salada") {
    total -= 5;
  }
  if (cupom == "cupom50" && total > 100) {
    total -= 50;
  }
  resp.send({
    resp: `o total do pedido é ${total}`,
  });
});
endpoints.post("/loja/pedido/completo", (req, resp) => {
  let cupom = req.query.cupom;
  let itens = req.body.itens;
  let parcelas = req.body.parcelas;
  let total = 0;
  for (let produto of itens) {
    total += produto.preco;
  }
  if (parcelas > 1) {
    total * 0.05;
  }
  if (cupom == "cupom50") {
    total -= 50;
  }
  resp.send({
    resp: `o total da compra é : ${total}`,
  });
});
export default endpoints;