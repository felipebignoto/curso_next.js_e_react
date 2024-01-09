import Filho from "./filho"

export default function pai(){

    function falaComigo(parameters){
        console.log(parameters)
        console.log("alguem falou comigo!");
    }

    return (
        <div>
            <Filho funcao={falaComigo}></Filho>
        </div>
    )
}