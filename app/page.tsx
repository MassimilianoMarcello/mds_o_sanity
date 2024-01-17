"use client"

import Image from "next/legacy/image";
import { ThemeProvider } from "styled-components";
import theme from "@/app/Theme";
import styles from "./page.module.css";
import { hydrate } from 'react-dom';
// import GlobalStyles from "@/app/styled-global";
import styled from "styled-components";
import Early from './tetering/serve'
import Staff from './staff/serves';


export default function Home() {

  return (
    <Main   className={styles.main} >

    {/* <ThemeProvider theme={theme}></ThemeProvider> */}
      {/* <GlobalStyles /> */}
    
      <Early/>
      <Staff/>
  
    </Main>
  )
}

const Main = styled.main`
  font-family: var(--euclid-flex);

`;
