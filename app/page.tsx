import Image from 'next/image'
import styles from './page.module.css'
import Early from './earlychidhood/page'
import GlobalStyles from '@/app/styled-global';


export default function Home() {
  
  return (
    <main className={styles.main}>
      <GlobalStyles/>
      <div>hola</div>
      <Early/>
    
    </main>
  )
}
