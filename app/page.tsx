import Image from 'next/image'
import styles from './page.module.css'
import Early from './earlychidhood/page'
import Ear from './leadership/page';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div>hola</div>
      <Early/>
      <Ear/>
    </main>
  )
}
