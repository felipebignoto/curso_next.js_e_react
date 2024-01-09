import Tabuleiro from '@/components/Tabuleiro'
import styles from '@/styles/Home.module.css'
/* No exemplo o nome da classe é styles.container  */
export default function Home() {
  return (
    <>
        <div className={styles.description}>
          <Tabuleiro></Tabuleiro>
        </div>
    </>
  )
}
