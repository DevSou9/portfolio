import React from 'react'
import { DivHero } from './style'
import logo from '../../assets/img/logo.png'
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'

export const Hero = () => {
  return (
    <>
      <DivHero>
        <img src={logo} alt="" />
        <div className="divTitle container">
          <h2>Desenvolvedor Wendell Souza</h2>
        </div>
        <div className="divDescricao container divGeral">
          <p>
            Desenvolvedor graduado em Análise e Desenvolvimento de Sistemas, com
            mais de 15 anos de experiência nas mais diversas áreas de TI.{' '}
          </p>
          <div className="divContato">
            <div>
              <div>
                <FaEnvelope style={{ color: 'red' }} />
              </div>
              <p>E-mail: contato@wendellsouza.com</p>
            </div>
            <div>
              <FaWhatsapp style={{ color: 'red' }} />
              <p>(21) 99609-3012</p>
            </div>
            <div>
              <FaLinkedin style={{ color: 'red' }} />
              <p>LinkEdin</p>
            </div>
          </div>
        </div>

        <div className="divInformacoes container divGeral">
          <div className="divGeral">
            <FaGithub style={{ color: 'red' }} />
            <p>GitHub</p>
            <p>......</p>
            <p>Portfólio</p>
            <p>Site...</p>
            <p>Site...</p>
            <p>Site...</p>
            <p>Site...</p>
            <p>Site...</p>
            <p>Site...</p>
          </div>
          <div className="divGeral">
            <p>Tecnologias</p>

            <p>......</p>
            <p>Portfólio</p>
            <p>Site...</p>
            <p>Site...</p>
            <p>Site...</p>
            <p>Site...</p>
            <p>Site...</p>
            <p>Site...</p>
          </div>
        </div>
      </DivHero>
    </>
  )
}
