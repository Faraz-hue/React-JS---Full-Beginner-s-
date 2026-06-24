import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './index.css'
import Header from "./Header";
import MainComponent from "./MainComponent";
import Footer from "./Footer";
const root = createRoot(document.getElementById("root"))

root.render(
  <Chellenge />
)

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