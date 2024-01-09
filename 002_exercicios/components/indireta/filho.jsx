export default function filho(props){
    //"Passei no ENEM!"
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com pai</button>
            <button onClick={() => props.funcao("passei no ENEM")}>Falar com pai</button>

        </div>
    )
}