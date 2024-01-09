export default function lista(props) {
    return (
        <div>
            <h1>Lista: </h1>
            <ul style={{backgroundColor: "#ccc"}}> 
                {props.children}
            </ul>
        </div>
    )
}