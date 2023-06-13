import styles from "../styles/Linha.module.css"
import Subdivisao from '@/components/Subdivisao'
export default function Linha(props){
    return(
    <div className={styles.linha}>
        <Subdivisao preta={props.preta}></Subdivisao>
        <Subdivisao preta={!props.preta}></Subdivisao>
        <Subdivisao preta={props.preta}></Subdivisao>
        <Subdivisao preta={!props.preta}></Subdivisao>
        <Subdivisao preta={props.preta}></Subdivisao>
        <Subdivisao preta={!props.preta}></Subdivisao>
        <Subdivisao preta={props.preta}></Subdivisao>
        <Subdivisao preta={!props.preta}></Subdivisao>
    </div>
    )
}