import styled from 'styled-components'
import banner from '../../assets/img/banner.jpg'
import { colors } from '../../styles/variables'

export const DivHero = styled.div`
  background-image: url(${banner});
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: block;
  width: 100%;

  display: flex;
  justify-content: center;

  img {
    height: 90px;
    z-index: 2;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .divTitle {
    position: absolute;
    margin-top: 140px;
    z-index: 2;
    padding-left: 2px;
    width: 100%;
    height: 40px;
    h2 {
      color: ${colors.white};
      z-index: 2;
      font-size: 36px;
      text-align: left;
    }
  }

  .divContato {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 36px;
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
    height: 150px;
    width: 100%;
    margin-top: 206px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 100px;

    p {
      color: ${colors.white};
      text-align: left;
      font-size: 14px;
    }
  }

  .divInformacoes {
    display: grid;
    grid-template-columns: 6fr 4fr;
    column-gap: 30px;
    background-color: transparent;

    position: absolute;
    top: 386px;

    height: 300px;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      padding: 24px;
      color: ${colors.white};
      z-index: 3;
    }
  }
`
