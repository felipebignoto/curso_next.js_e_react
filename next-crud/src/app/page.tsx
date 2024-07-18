'use client'

import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import useClientes from '@/hooks/useClientes'

export default function Home() {
  const {
    NovoCliente,
    excluirCliente,
    cliente,
    clientes,
    salvarCliente,
    selecionarCliente,
    tabelaVisivel,
    exibirTabela,
  } = useClientes()

  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <div>
            <div className="flex justify-end">
              <Botao cor="green" clasName="mb-4" onClick={NovoCliente}>
                Novo cliente
              </Botao>
            </div>

            <Tabela
              cliente={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </div>
        ) : (
          <Formulario
            cancelado={exibirTabela}
            cliente={cliente}
            clienteMudou={salvarCliente}
          ></Formulario>
        )}
      </Layout>
    </div>
  )
}
