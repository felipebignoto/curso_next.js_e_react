'use client'

import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente("Ana",34,"1"),
    new Cliente("Pedro",45,"2"),
    new Cliente("João",20,"3"),
    new Cliente("Fabiana",70,"4"),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.idade)
  }

  return (
    <div className = { `flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout titulo="Cadastro Simples">
       <div className="flex justify-end">
         <Botao cor="green" clasName="mb-4">
           Novo cliente
        </Botao>
       </div>
        <Tabela
          cliente={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  );
}
