import QuestaoModel from '@/model/questao'
import styles from '../styles/Questao.module.css'
import Enunciado from './Enunciado'
import Resposta from './Resposta'

const letras = [
  { valor: 'A', cor: '#F2c866' },
  { valor: 'B', cor: '#F266ba' },
  { valor: 'C', cor: '#85daf2' },
  { valor: 'D', cor: '#bce596' },
]

interface QuestaoProps {
  valor: QuestaoModel
  respostaFornecida: (indice: number) => void
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor

  function renderizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          valor={resposta}
          corFundoLetra={letras[i].cor}
          indice={i}
          letra={letras[i].valor}
          key={i}
          respostaFornecida={props.respostaFornecida}
        />
      )
    })
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      {renderizarRespostas()}
    </div>
  )
}
