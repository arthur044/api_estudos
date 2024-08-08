export function validarPedidos(req){
  if (!req.body.parcelas)
    throw new Error("a quantidade de parcelas deve estar incluso ");
  if (isNaN(req.body.parcelas))
    throw new Error("a parcela deve ser um numero! ");
}
