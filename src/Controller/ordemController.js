import { Router } from "express";
const endpoints = Router();

 endpoints.post('/treino/verificarOrdem', (req, resp) => {
  let ordem = req.body.ordem
  let maior = ordem[0]
  let menor = ordem[0]
  let crescente = true
  let descrescente = true
  
  for(let i=1; i <  ordem.length ; i++){
    if(ordem[i] > maior){
      maior = ordem[i]
    }
    if(ordem[i] < menor){
      menor = ordem[i]
    }
    if(ordem[i] > ordem[i-1]){
      descrescente = false
    } else if(ordem[i] < ordem[i-1]){
      crescente = false
    }
  }

  if(crescente){
    resp.send({
      crescente: crescente,
      maiorNumero: maior,
      menorNumero: menor
    })
  } else if (descrescente){
    resp.send({
      descrescente: descrescente,
      maiorNumero: maior,
      menorNumero: menor
    })
  } else {
    resp.send({
      ordem: 'desordenado',
      maiorNumero: maior,
      menorNumero: menor
    })
  }
  
 }) 

export default endpoints;