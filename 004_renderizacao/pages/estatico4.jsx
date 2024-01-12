export async function getStaticProps() {
  const resp = await fetch('http://localhost:3000/api/produtos')
  const produtos = await resp.json()
  console.log('server')

  return {
    props: {
      produtos,
    },
  }
}

export default function Estatico4(props) {
  console.log('client')
  function renderizarProdutos() {
    return props.produtos.map((produto) => {
      return (
        <li key={produto.id}>
          {produto.id} : {produto.nome} tem valor de R${produto.preco}
        </li>
      )
    })
  }
  return (
    <div>
      <h1>Estatico #04</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  )
}
