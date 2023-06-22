export default function filho(props){
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
            <h2>{props.familia}</h2>
            <h3>{props.nome}</h3>
        </div>
    )
}