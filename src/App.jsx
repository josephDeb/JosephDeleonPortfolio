import Header from "./components/header/Header"


import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './index.css'
import About from "./components/section/about/About"
import PersonalInfo from "./components/section/about/PersonalInfo"
import Educational from "./components/section/about/Educational"
import Skills from "./components/section/about/Skills"
import Projects from "./components/section/projects/Projects"
import Contact from "./components/section/contact/Contact"
import Footer from "./components/footer/Footer"
function App() {


  return (
    <>
      <Router>
      <Header />
          <Routes >
              <Route path="/" element={<About />}>
                  <Route path="/" element={<PersonalInfo />}/>
                  <Route path="/educational" element={<Educational />}/>
                  <Route path="/skills" element={<Skills />}/>

              </Route>
          </Routes>
          <Projects />
          <Contact />
          <Footer />
      </Router>
    </>
  )
}

export default App