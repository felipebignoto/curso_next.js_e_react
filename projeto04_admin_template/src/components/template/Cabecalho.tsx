import Titulo from './Titulo'

interface CbecalhoProps {
  titulo: string
  subtitulo: string
}

export default function Cabecalho(props: CbecalhoProps) {
  return (
    <div>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
    </div>
  )
}
