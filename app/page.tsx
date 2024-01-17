
import Image from 'next/image'
import styles from './page.module.css'
import Early from './tetering/serve'
import Staff from './staff/serves';


export default function Home() {
  
  return (
    <main className={styles.main}>
    
    
      <Early/>
      <Staff/>
    
    </main>
  )
}
