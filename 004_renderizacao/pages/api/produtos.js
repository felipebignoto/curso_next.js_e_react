// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function numeroAleatorio(min = 1, max = 10000) {
  return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res) {
  res.status(200).json([
    { id: numeroAleatorio(), nome: 'caneta', preco: 5.0 },
    { id: numeroAleatorio(), nome: 'bolsa', preco: 15.6 },
    { id: numeroAleatorio(), nome: 'lápis', preco: 3.0 },
    { id: numeroAleatorio(), nome: 'estojo', preco: 10.3 },
    { id: numeroAleatorio(), nome: 'borracha', preco: 2.0 },
  ])
}
