import { useEffect, useState } from "react"
import {mega} from "../../functions/mega"
import NumeroDisplay from "@/components/NumeroDisplay"

export default function megasena(){

    const [qtd, setQtd] = useState(6) 
    const [numeros, setNumeros] = useState([]) 

    useEffect(() => {setNumeros(mega())},[])

    function renderizarNumeros(){
        return numeros.map(numero => <NumeroDisplay key={numero} numero={numero}/>)
    }

    return(
        <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", alignItems: "center"}}>
            <h1 style={{marginTop: "20px"}}>Mega sena</h1>
            <div style={{flexWrap:"wrap",display: "flex"}}>
                {renderizarNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtd} onChange={ev => setQtd(ev.target.value)}/>
                <button onClick={() => setNumeros(mega(qtd))}>Gerar aposta</button>
            </div>
        </div>
    )
}