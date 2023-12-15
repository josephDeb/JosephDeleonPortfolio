import Header from "./components/header/Header"


import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './index.css'
import About from "./components/section/about/About"


import Projects from "./components/section/projects/Projects"
import Contact from "./components/section/contact/Contact"
import Footer from "./components/footer/Footer"

import GlobalContext from "./context/GlobalContext"

function App() {

  return (
    <>
      
      <GlobalContext>
      <Router>
      <Header />
          <Routes>
              <Route path="/" element={<About />}>
              
              </Route>

          </Routes>
          <Projects />
          <Contact />
          <Footer />
      </Router>
      </GlobalContext>
    </>
  )
}

export default App
