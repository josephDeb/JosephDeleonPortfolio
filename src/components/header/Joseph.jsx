
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/java-script.png'
import react from '../../assets/react.png'
import nodejs from '../../assets/node-js.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'
import mysql from '../../assets/mysql.png'
import man from '../../assets/man.png'
import { motion } from "framer-motion"
import cat from '../../assets/fishingCat.gif'
import msgbox from '../../assets/msgbox.png'
import './header.css'

import resume from '../../assets/joseph.pdf'

import {Link} from 'react-scroll'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/GlobalContext'
const Joseph = () => {

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
          }
    }, [])

    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    
    const {isOn} = useContext(AppContext)
    
    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);
    
        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
    
        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
    


  return (
    <div id='home' className={`max-w-screen-2xl xl:mt-0  xl:h-[680px] h-[125vh] mx-auto ${isOn ? "bg-black text-white transition-all duration-500" : "bg-white/80 transition-all duration-500"}`}>

       <div className='w-[88%] mx-auto xl:grid xl:grid-cols-2 h-full flex flex-col  xl:pt-[17px] xl:text-start text-center'>
            <div className='w-full  h-full  flex flex-col pt-8'>
                <div className='flex flex-col xl:gap-2'>
                   <h1 className='text-md xl:text-xl'>
                    Hey there , I'm </h1>
                  <h4 className='xl:text-5xl text-3xl joseph'>Joseph louise C. De leon</h4>
                   <h4 className='xl:text-3xl text-xl joseph'>Full stack Developer</h4>
                
                </div>


                <div className='flex gap-5 mt-5 w-full centered xl:flex xl:justify-start'>
                    <a href='../../assets/joseph.pdf' download className={`w-[170px] border-2 py-2 ${isOn ? "bg-white text-black" : "bg-black text-white"} border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer centered`}>Resume</a>
                    <Link
                    to='contact'
                    activeClass='active'
                    spy={true}
                    className={`w-[170px] border-2 py-2 ${isOn ? "bg-white text-black" : "bg-black text-white"} border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer centered`}>Contact me</Link>
                </div>

                <div className='w-full xl:mt-5 centered xl:flex xl:justify-start'>
                  <img src={cat} className='xl:w-[260px]'/>
                </div>
            </div>

            
            <div className='w-full h-[710px] xl:flex xl:justify-start xl:items-start relative xl:pt-14 flex justify-start items-center'>

                <motion.div
                 drag
                 dragConstraints={{
                   top: -50,
                   left: -50,
                   right: 50,
                   bottom: 50,
                 }}
                 animate={{ x: 100 }}
                 transition={{ type: "spring", stiffness: 100 }}
                className='xl:w-[71%] xl:h-[71%] bg-red-200 rounded-full h-[62%] w-[62%] border-2'>

                </motion.div>
            </div>
       </div>
    </div>
  )
}

export default Joseph