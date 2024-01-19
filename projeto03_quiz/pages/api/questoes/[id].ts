import questoes from '../bancoDeQuestoes'
import { Request, Response } from 'express'

export default function questoesProId(req: Request, res: Response) {
  const idSelecionado = req.query.id
  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === Number(idSelecionado),
  )

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionado = unicaQuestaoOuNada[0].embaralharRespostas()
    const obj = questaoSelecionado.paraObjeto()
    res.status(200).json(obj)
  } else {
    res.status(204).send()
  }
}
