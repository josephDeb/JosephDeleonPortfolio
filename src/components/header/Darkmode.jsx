import { useContext, useState } from 'react'
import { motion } from "framer-motion"
import './header.css'
import { AppContext } from '../../context/GlobalContext'
const Darkmode = () => {
    const {isOn, setIsOn} = useContext(AppContext)
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };
  return (
    <div className={`switch ${isOn ? "bg-white" : "bg-black"}`} onClick={() => setIsOn(!isOn)}>
      <motion.div className={`handle ${isOn ? "bg-black" : "bg-white"}`} layout transition={spring} />
    </div> 
  )
}

export default Darkmode