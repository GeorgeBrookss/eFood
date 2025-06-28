import { createGlobalStyle } from 'styled-components'
import Cores from './Cores'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
  body{
      background-color: ${Cores.fundo};
      height: fit-content;
  }
`
