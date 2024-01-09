function acao1(){
    console.log("acao-1")
}

export default function botao(){
    function acao2(){
        console.log("acao-2")
    }

    function acao5(e){
        console.log(e)
    }

    return(
        <div>
            <input type="text" onChange={() =>console.log("mudou")} />
            <button onClick={acao1}>Click 1</button>
            <button onClick={acao2}>Click 2</button>
            <button onClick={function(){
                console.log("acaoo-3")
            }}>Click 3</button>
            <button onClick={() =>console.log("acaoo-4")}>Click 4</button>
            <button onClick={acao5}>Click 5</button>


        </div>
    )
}