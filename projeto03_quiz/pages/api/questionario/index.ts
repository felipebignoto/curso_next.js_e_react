/* eslint-disable import/no-anonymous-default-export */
import { embaralhar } from '@/functions/array'
import { Request, Response } from 'express'
import questoes from '../bancoDeQuestoes'

export default function questionario(req: Request, res: Response) {
  const ids = questoes.map((questao) => questao.id)
  res.status(200).json(embaralhar(ids))
}
