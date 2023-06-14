export default function Repeticao1(){

    const listaAprovados = [
        "joao",
        "maria",
        "pedro",
        "bia",
        "felipe",
        "ana",
    ]

    function renderizarLista(){

         return listaAprovados.map((nome,i) => <li key={i}>{nome}</li>)
    }

    return(
        <ul>
            {renderizarLista()}
        </ul>
    )
}

/*ALTERNATIVATE
function renderizarLista(){

        const itens = [];

        for(let i=0; i<listaAprovados.length;i++){
               itens.push(<li>{listaAprovados[i]}</li>)
        }

        return itens
    }
*/