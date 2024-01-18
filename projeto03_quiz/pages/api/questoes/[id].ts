import questoes from '../bancoDeQuestoes'

export default function questoesProId(req, res) {
    const idSelecionado = +req.query.id
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if(unicaQuestaoOuNada.length === 1){
        const questaoSelecionado = unicaQuestaoOuNada[0].embaralharRespostas()
        const obj = questaoSelecionado.responderCom(0).paraObjeto()
        res.status(200).json(obj)
    }
    else{
        res.status(204).send()
    }
}