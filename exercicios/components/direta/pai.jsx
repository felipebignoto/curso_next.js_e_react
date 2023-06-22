import Filho from "./filho.jsx"

export default function pai(props){
    return (
        <div >
            <Filho nome={"pedro"} familia={"bignoto"}></Filho>
            <Filho nome={"joao"} familia={props.familia} ></Filho>
            <Filho nome={"ana"} familia={"silva"}></Filho>

        </div>
    )
}