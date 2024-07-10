import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './Theme'


import ttIcon from "./assets/twitter-icon.svg"
import igIcon from "./assets/instagram-icon.svg"
import ghIcon from "./assets/github-icon.svg"
import fbIcon from "./assets/facebook-icon.svg"
import mlIcon from "./assets/email.svg"
import liIcon from "./assets/linkedin.svg"
import pfp from "./assets/pfp.jpg"

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <header className={theme}>
        <button className='theme-btn' onClick={() => toggleTheme()}>Mudar Tema</button>
      </header>
      <main className={theme}>
        <div className='pfp-container'>
          <img src={pfp} alt="Foto de perfil, selfie de homem de 21 anos moreno com óculos de grau redondos e cabelos morenos cacheados usando uma camiosa preta." className='profile-picture' />
        </div>
        <section>
          <div className='me'>
            <h1>Giovani Drosda</h1>
            <h3>Fullstack Developer</h3>
            <a href='https://dlgiovani.github.io' target='_blank'>dlgiovani.github.io</a>
          </div>

          <div className='contact'>
            <a className='btn btn-primary' href="https://github.com/dlgiovani/" target="_blank">
              <img src={ghIcon} alt="Ícone do GitHub" />
              Github
            </a>
            <a className='btn btn-secondary' href="https://www.linkedin.com/in/giovani-drosda-lima/" target="_blank">
              <img src={liIcon} alt="Ícone do LinkedIn" />
              Linkedin
            </a>
          </div>

          <section className='about'>
            <div>
              <h2>Sobre</h2>
              <p>Eu comecei a mexer com CSS em 2013 e iniciei meus estudos em programação em 2017. Já trabalhei como dev pleno e atualmente faço projetos Fullstack até o deploy. Trabalho principalmente com Django (Python), JavaScript e Tailwind, e no momento estou aprendendo React.</p>
            </div>

            <div>
              <h2>Interesses</h2>
              <p>Livros de psicologia e linguística, programação, paisagens, Lo-Fi, culinária, café, desafios e testes mentais.</p>
            </div>
          </section>
        </section>
        <footer>
          <a href="#">
            <img src={ttIcon} alt="X (Twitter)" />
          </a>

          <a href="#">
            <img src={fbIcon} alt="Facebook" />
          </a>

          <a href="#">
            <img src={igIcon} alt="Instagram" />
          </a>

          <a href="#">
            <img src={ghIcon} alt="GitHub" />
          </a>

        </footer>
      </main>
      <span className='info-text'>Atualizado em 11/04/2024</span>
    </>
  )
}

export default App
