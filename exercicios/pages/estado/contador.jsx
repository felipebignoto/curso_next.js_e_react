import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        width: "100vw",
        height: "100vh",
    }

    const estiloB = {
        marginTop: "10px",
        height: "50px",
        width: "50px"
    }


    const [numero, setNumero] = useState(0)

    function inc() {
        setNumero(numero + 1)
    }

    function dec() {
        setNumero(numero - 1)
    }

    return (
        <div style={estilo}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero} />

            <button style={estiloB} onClick={inc}>+</button>
            <button style={estiloB} onClick={dec}>-</button>
        </div>
    )
}