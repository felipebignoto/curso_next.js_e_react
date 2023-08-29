import styles from '../../../styles/jogo.module.css'
import Porta from "../../../components/Porta";
import { useEffect, useState } from "react";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function jogo() {

    const router = useRouter()

    const [portas, setPortas] = useState([])

    useEffect(()=>{
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    },[router?.query])

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} ></Porta>
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>

            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}