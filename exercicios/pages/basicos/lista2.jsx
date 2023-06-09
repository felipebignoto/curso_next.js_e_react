import { Space_Mono } from "next/font/google"

export default function lista2() {
    return (
        <div>
            {geraLista()}
        </div>
    )
}

function geraLista() {

    const lista = []
    for (let i = 0; i <= 10; i++) {
        lista.push(<span>{i},</span>)
    }
    return lista
}