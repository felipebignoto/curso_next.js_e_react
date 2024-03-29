import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'

interface TemporizadorProps {
  duracao: number
  tempoEsgotado: () => void
  key: any
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={props.duracao}
        onComplete={props.tempoEsgotado}
        colors={['#BCE596', '#F7B801', '#ED827A']}
        colorsTime={[6.67, 3.33, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}
