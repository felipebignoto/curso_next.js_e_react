import Cliente from "@/core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
  cliente: Cliente[];
  clienteSelecionado?: (Cliente: Cliente) => void;
  clienteExcluido?: (Cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {

  const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function renderizarCabecalho(){
        return (
          <tr>
            <th className="text-left p-4">Código</th>
            <th className="text-left p-4">Nome</th>
            <th className="text-left p-4">Idade</th>
            {exibirAcoes ? <th className="p-4">Ações</th> : false}
          </tr>
        );
    }

    function renderizarAcoes(cliente:Cliente){
      return (
        <td className="flex justify-center">
          {props.clienteSelecionado ? (
            <button
              onClick={() => props.clienteSelecionado?.(cliente)}
              className="flex justify-center items-center text-green-600 hover:bg-green-600 hover:text-gray-100 rounded-full p-2 m-1"
            >
              {IconeEdicao}
            </button>
          ) : (
            false
          )}

          {props.clienteExcluido ? (
            <button
              onClick={() => props.clienteExcluido?.(cliente)}
              className="flex justify-center items-center text-red-500 hover:bg-red-500 hover:text-gray-100 rounded-full p-2 m-1"
            >
              {IconeLixo}
            </button>
          ) : (
            false
          )}
        </td>
      );
    }

    function renderizarDados(){
       if (!props.cliente || props.cliente.length === 0) {
         return (
           <tr>
             <td colSpan={4}>Lista vazia</td>
           </tr>
         );
       }

       return props.cliente.map((cliente, i) => (
         <tr key={cliente.id} className={`${i % 2 == 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>
           <td className="text-left p-4">{cliente.id}</td>
           <td className="text-left p-4">{cliente.nome}</td>
           <td className="text-left p-4">{cliente.idade}</td>
           {exibirAcoes ? renderizarAcoes(cliente) : false}
         </tr>
       ));
    }


  return (
    <table className="w-full overflow-hidden rounded-xl">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">{renderizarCabecalho()}</thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}