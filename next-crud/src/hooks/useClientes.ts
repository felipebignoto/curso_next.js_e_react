import Cliente from '@/core/Cliente'
import ClienteRepositorio from '@/core/ClienteRepositorio'
import ColecaoCliente from '@/firebase/db/ColecaoCliente'
import { useEffect, useState } from 'react'
import UseTableForm from './useTableForm'

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente()
  const { exibirFormulario, exibirTabela, tabelaVisivel } = UseTableForm()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>()

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente) {
    exibirFormulario()
    setCliente(cliente)
  }
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  function NovoCliente() {
    exibirFormulario()
    setCliente(Cliente.vazio())
  }

  return {
    cliente,
    clientes,
    NovoCliente,
    tabelaVisivel,
    exibirTabela,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    obterTodos,
  }
}
