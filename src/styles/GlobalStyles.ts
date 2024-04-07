import { createGlobalStyle } from 'styled-components'
import { breakpoints } from './variables'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;



    a{
      text-decoration: none;
    }

  }
    .container {
      max-width: 1024px;

      @media (max-width: ${breakpoints.tablet}) {
        max-width: 1025px;
        width: 100%;
      }
    }
`

export default GlobalStyle
