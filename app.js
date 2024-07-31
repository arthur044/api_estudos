import express from "express";
const server = express();
server.use(express.json());
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
server.get("/calculadora/soma/:n1/:n2", (req, resp) => {
  let n1 = Number(req.params.n1);
  let n2 = Number(req.params.n2);
  let soma = n1 + n2;
  resp.send({
    resp: `A resposta da soma é ${soma}`,
  });
});
server.get("/calculadora/divisao/:n1/:n2", (req, resp) => {
  let n1 = Number(req.params.n1);
  let n2 = Number(req.params.n2);
  let divisao = n1 / n2;
  resp.send({ resp: `a reposta da divisao é ${divisao}` });
});
server.get("/calculadora/somaquery/", (req, resp) => {
  let n1 = Number(req.query.n1);
  let n2 = Number(req.query.n2);
  let somaquery = n1 + n2;
  resp.send({
    resp: `a soma com os parametros query são ${somaquery}`,
  });
});
server.get("/mensagem/ola", (req, resp) => {
  let nome = req.query.nome ?? `guest`;
  resp.send({
    resp: `Ola ${nome}`,
  });
});
server.post("/dobro", (req, resp) => {
  let nums = req.body.dobro;
  let num2 = [];
  for (let i = 0; i < nums.length; i++) {
    num2[i] = nums[i] * 2;
  }
  resp.send({
    resp: `os dobros dos numeros são ${num2}`,
  });
});
server.post("/media", (req, resp) => {
  let nota1 = Number(req.query.nota1);
  let nota2 = Number(req.query.nota2);
  let nota3 = Number(req.query.nota3);
  let total = (nota1 + nota2 + nota3) / 3;
  let recuperacao = req.body.recuperacao;
  if (total <= 5) {
    total += recuperacao;
    total / 4;
  }
  resp.send({
    resp: `notal final : ${total}`,
  });
});
server.post("/loja/pedido", (req, resp) => {
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
});
server.post("/acaiteria", (req, resp) => {
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
});
server.post("/hamburgueria", (req, resp) => {
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
server.post("/loja/pedido/completo", (req, resp) => {
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
  resp.status(404).send({
    resp: `o total da compra é : ${total}`,
  });
});
server.listen(5050, () => console.log("Ta subindo ein..."));
