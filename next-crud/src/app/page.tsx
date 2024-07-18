'use client'

import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'
import { useState } from 'react'

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Pedro', 45, '2'),
    new Cliente('João', 20, '3'),
    new Cliente('Fabiana', 70, '4'),
  ]

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  function clienteSelecionado(cliente: Cliente) {
    setVisivel('form')
    setCliente(cliente)
  }

  function clienteExcluido(cliente: Cliente) {}

  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
  }

  function NovoCliente() {
    setVisivel('form')
    setCliente(Cliente.vazio())
  }

  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <div>
            <div className="flex justify-end">
              <Botao cor="green" clasName="mb-4" onClick={NovoCliente}>
                Novo cliente
              </Botao>
            </div>

            <Tabela
              cliente={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </div>
        ) : (
          <Formulario
            cancelado={() => setVisivel('tabela')}
            cliente={cliente}
            clienteMudou={salvarCliente}
          ></Formulario>
        )}
      </Layout>
    </div>
  )
}
