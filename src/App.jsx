import Header from "./components/header/Header"


import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './index.css'
import About from "./components/section/about/About"
import PersonalInfo from "./components/section/about/PersonalInfo"
import Educational from "./components/section/about/Educational"
import Skills from "./components/section/about/Skills"
function App() {


  return (
    <>
      <Router>
      <Header />
          <Routes >
              <Route path="/" element={<About />}>
                  <Route path="/personalinfo" element={<PersonalInfo />}/>
                  <Route path="/educational" element={<Educational />}/>
                  <Route path="/skills" element={<Skills />}/>
              </Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
