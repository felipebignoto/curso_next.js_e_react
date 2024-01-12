import questoes from '../bancoDeQuestoes'

export default function questoesProId(req, res) {
    res.status(200).json(questoes[0].paraObjeto())
}