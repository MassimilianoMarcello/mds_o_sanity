"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Early from './earlychidhood/page'
import GlobalStyles from '@/app/styled-global';
import { ThemeProvider } from "styled-components";
import theme from '@/app/Theme';

export default function Home() {
  
  return (
    <main className={styles.main}>
        <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <div>hola</div>
      <Early/>
      </ThemeProvider>
    </main>
  )
}
