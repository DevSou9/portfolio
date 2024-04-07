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

      @media(max-width: ${breakpoints.tablet}){
        width: 90%;
      }

      @media ((max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile})) {
        max-width: 1025px;
        width: 90%;
      }


    }
`

export default GlobalStyle
