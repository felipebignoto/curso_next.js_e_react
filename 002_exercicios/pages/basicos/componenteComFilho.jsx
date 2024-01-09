import Lista from "../../components/Lista"
import Item from "../../components/item"

export default function componenteComFilho(){
    return(
        <div>
            <Lista>
                <Item conteudo="item 11"/>
                <Item conteudo="item 12"/>
                <Item conteudo="item 13"/>

            </Lista>
        </div>
    )
}