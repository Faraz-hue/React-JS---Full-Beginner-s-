import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"))

root.render(
  <Chellenge />
)

function Header() {
  return (
    <>
      <header className='header'>
        <img className='nav-logo' src={reactLogo} alt='React Logo'></img>
        <nav>
          <ul className='nav-list'>
            <li className='nav-list-item'>Pricing</li>
            <li className='nav-list-item'>About</li>
            <li className='nav-list-item'>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

function MainComponent() {
  return (
    <>
      <main className='container'>
        <h1>I am excited to learn React</h1>
        <ol>
          <li>Released in 2013</li>
          <li>And Supported by Meta</li>
        </ol>
      </main>
    </>
  )
}

function Footer() {
  return (
    <>
      <footer className='footer'>
        &copyright 2026 Faraz developer. All right reserved
      </footer>
    </>)
}
function Chellenge() {
  return (
    // Empty brackets are fragments
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  )
}

function Page() {
  return (
    <ol>
      <li>I am fund of learning React</li>
      <li>Learning most popular library</li>
      <li>This is most open to job market</li>
    </ol>
  )
}

function TemporaryName() {
  return (
    <main>
      <img src={reactLogo} alt="React Logo" width="40px" />
      <h1>FunFact about React</h1>
      <ul>
        <li>Was first released in 2003</li>
        <li>Was originally created by Jorden Wallet</li>
        <li>Has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}