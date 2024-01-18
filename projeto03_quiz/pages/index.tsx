import Botao from '@/components/Botao'
import Questao from '@/components/Questao'
import Questionario from '@/components/Questionario'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'
import { useState } from 'react'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Amarelo'),
  RespostaModel.errada('Vermleho'),
  RespostaModel.certa('Azul'),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  /*
  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if (!questao.respondida) {
      setQuestao(questao.responderCom(-1))
    }
  }
  */

  function questaoRespondida(questao: QuestaoModel) {}
  function irParaProximoPasso() {}

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* }
      <Questao
        valor={questao}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
      <Botao texto={'Pórxima'} href="/resultado" />
    */}

      <Questionario
        irParaProximoPasso={irParaProximoPasso}
        questao={questao}
        questaoRespondida={questaoRespondida}
        ultima={false}
      />
    </div>
  )
}
