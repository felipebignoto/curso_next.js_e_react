import { Space_Mono } from "next/font/google"

export default function lista2() {
    return (
        <div>
            <div>{geraLista(15)}</div>
            <div>{geraLista(5)}</div>
        </div>

        

    )
}

function geraLista(max) {

    const lista = []
    for (let i = 0; i <= max; i++) {
        lista.push(<span>{i},</span>)
    }
    return lista
}