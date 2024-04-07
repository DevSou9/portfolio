import React from 'react'
import { DivHero } from './style'
import logo from '../../assets/img/logo.png'
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { AiOutlineGlobal } from 'react-icons/ai'

export const Hero = () => {
  return (
    <>
      <DivHero>
        <div className="divTitle container">
          <img src={logo} alt="" />
          <h2>Desenvolvedor Wendell Souza</h2>
        </div>
        <div className="divDescricao container divGeral">
          <p>
            Desenvolvedor graduado em Análise e Desenvolvimento de Sistemas, com
            mais de 15 anos de experiência nas mais diversas áreas de TI.{' '}
          </p>
          <div className="divContato">
            <div className="divIcones">
              <FaEnvelope style={{ color: 'red' }} />

              <a href="#">contato@wendellsouza.com</a>
            </div>

            <div className="divIcones">
              <FaWhatsapp style={{ color: 'red' }} />
              <a href="#">(21) 99609-3012</a>
            </div>

            <div className="divIcones">
              <FaLinkedin style={{ color: 'red' }} />
              <a
                href="https://www.linkedin.com/in/wendell-souza/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/wendell-souza/
              </a>
            </div>
          </div>
        </div>

        <div className="divInformacoes container divGeral">
          <div id="divGridColumn" className="divGeral">
            <p id="pPortfolio">Portfólio</p>
            <div id="divGitHub">
              <FaGithub style={{ color: 'red' }} />
              <a
                href="https://github.com/DevSou9?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/DevSou9?tab=repositories
              </a>
            </div>

            <div id="divSites">
              <AiOutlineGlobal style={{ color: 'red' }} />
              <p className="pSite">Sites:</p>
            </div>
            <div className="divASites">
              <a
                href="https://efood.wendellsouza.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://efood.wendellsouza.com/
              </a>

              <a
                href="https://new-eplay-wsouzas-projects.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://new-eplay-wsouzas-projects.vercel.app/
              </a>
              <a
                href="https://new-clone-disney-git-master-wsouzas-projects.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://new-clone-disney-git-master-wsouzas-projects.vercel.app/
              </a>
              <a
                href="https://pizzaria-italia-git-master-wsouzas-projects.vercel.app/"
                target="blank"
              >
                https://pizzaria-italia-git-master-wsouzas-projects.vercel.app/
              </a>
              <a
                href="https://github.com/DevSou9/li_analytics"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/DevSou9/li_analytics
              </a>
            </div>
          </div>

          <div className="divGeral">
            <p className="pTecnologia">Tecnologias</p>
            <div id="divTecnologias">
              <div id="divTec">React</div>
              <div id="divTec">Styled Components</div>
              <div id="divTec">Redux</div>
              <div id="divTec">React Router Dom</div>
              <div id="divTec">JavaScript</div>
              <div id="divTec">TypeScript</div>
              <div id="divTec">HTML</div>
              <div id="divTec">CSS</div>
              <div id="divTec">Vue.js</div>

              <div id="divTec">Bootstrap</div>
              <div id="divTec">jQuery</div>
              <div id="divTec">AJAX</div>
              <div id="divTec">Node.js</div>
              <div id="divTec">SASS</div>
              <div id="divTec">LESS</div>

              <div id="divTec">Gulp</div>
              <div id="divTec">Grunt</div>
              <div id="divTec">Babel</div>
              <div id="divTec">Parcel</div>
              <div id="divTec">BEM</div>
              <div id="divTec">SMACSS</div>
              <div id="divTec">Git</div>
              <div id="divTec">GitHub</div>
              <div id="divTec">EditorConfig</div>
              <div id="divTec">ESLint</div>
              <div id="divTec">Prettier</div>
              <div id="divTec">Jest</div>
              <div id="divTec">Cypress</div>
            </div>
          </div>
        </div>
      </DivHero>
    </>
  )
}
