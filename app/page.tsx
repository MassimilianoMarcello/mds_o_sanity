"use client";
import Image from "next/legacy/image";
import { ThemeProvider } from "styled-components";
import theme from "@/app/Theme";
import styles from "./page.module.css";
import GlobalStyles from "@/app/styled-global";
import styled from "styled-components";
import Early from "./tetering/serve";
import Staff from "./staff/serves";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Main className={styles.main}>
        <GlobalStyles />
        <Early />
        <Staff />
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  font-family: var(--euclid-flex);
  margin: 0;
  padding: 0;
`;
