import styled from 'styled-components'
import banner from '../../assets/img/banner.jpg'
import { breakpoints, colors } from '../../styles/variables'

export const DivHero = styled.div`
  background-image: url(${banner});
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: block;
  width: 100%;
  background-position: center;
  background-attachment: fixed;
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 1024px;
    display: grid;
    grid-template-columns: 12fr;
    row-gap: 16px;
    /* position: fixed; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    height: 190vh;
  }

  @media ((max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile})) {
    max-width: 1024px;
    /* position: fixed; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
  }

  display: flex;
  justify-content: center;

  .divTitle {
    position: absolute;
    margin: 0;
    padding: 0;
    margin-top: 32px;
    z-index: 2;
    padding-left: 2px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      color: ${colors.white};
      z-index: 2;
      font-size: 30px;
      text-align: center;
      margin: 0;
      padding-bottom: 0;
      padding-left: 12px;
    }
    img {
      height: 50px;
      z-index: 2;
      margin: 0;
      padding: 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 1024px;
      width: 100%;
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 28px;
        margin-top: 20px;
      }
    }

    @media ((max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile})) {
      font-size: 32px;
      margin-top: 40px;
    }
  }

  .divContato {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
    padding: 12px 0;

    @media (max-width: ${breakpoints.mobile}) {
      margin: 0;
      display: flex;
      flex-direction: column;
    }
  }

  .divGeral {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 25px;
  }

  &::after {
    background-color: #000;
    height: 100vh;
    display: block;
    width: 100%;

    content: '';
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.56;
  }

  .divDescricao {
    position: absolute;

    z-index: 2;
    height: auto;
    width: 100%;
    margin-top: 104px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px 8px 50px;

    p {
      color: ${colors.white};
      text-align: left;
      font-size: 14px;
      margin-top: 16px;
      margin-bottom: 12px;
    }

    a {
      color: ${colors.white};
      text-align: left;
      font-size: 14px;
      margin: 0;
      padding: 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 190px;
      width: 100%;
      padding: 12px;
      grid-template-columns: 12fr;
    }
  }

  .divIcones {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin-left: 8px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      margin-bottom: 12px;
      justify-content: left;
      /* align-items: center; */
    }
  }

  .divInformacoes {
    display: grid;
    grid-template-columns: 6fr 6fr;
    column-gap: 16px;
    background-color: transparent;

    position: absolute;
    margin-top: 242px;

    height: auto;
    width: 100%;

    #pPortfolio {
      color: red;
    }

    div {
      display: flex;
      flex-direction: column;
      padding: 16px;
      color: ${colors.white};
      z-index: 3;
    }

    a {
      font-size: 16px;
      color: ${colors.white};
    }
    .pSite {
      font-size: 16px;
      margin: 0;
      padding: 0;
      margin-bottom: 16px;

      a {
        margin-left: 8px;
      }
    }

    .divASites {
      padding: 0;

      a {
        margin-bottom: 12px;
      }
    }

    #divTecnologias {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;

      #divTec {
        margin: 4px;
        padding: 12px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        max-width: 100px;
        min-width: 50px;
        width: auto;

        font-size: 12px;
      }
    }

    #divGridColumn {
      height: auto;
    }

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 1024px;
      width: 100vw;
      margin-top: 418px;
      display: flex;
      flex-direction: column;
      row-gap: 4px;
    }
  }

  p {
    font-size: 18px;
  }

  .divGridInicial {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    a {
      margin-left: 8px;
    }
  }

  #divGitHub {
    display: flex;
    flex-direction: row;
    margin: 0 0 24px 0;
    padding: 0;
    justify-content: left;

    a {
      padding-left: 8px;
      font-size: 16px;
      margin: 0;
    }
  }

  #divSites {
    display: flex;
    flex-direction: row;
    margin: 0 0 4px 0;
    padding: 0;
    p {
      padding-left: 8px;
    }
  }

  p {
    margin-bottom: 16px;
  }

  .pTecnologia {
    color: red;
    margin-bottom: 16px;
  }

  a {
    margin-bottom: 8px;
  }
`
