
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
import neko from '../../assets/maneki-neko.png'
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
    
    const {setIsOn, isOn} = useContext(AppContext)
    
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
    <div id='home' className={`max-w-screen-2xl mt-8 xl:mt-0  xl:h-[80vh] h-[125vh] mx-auto ${isOn ? "bg-black text-white transition-all duration-500" : "bg-white transition-all duration-500"}`}>

       <div className='w-[88%] mx-auto xl:grid xl:grid-cols-2 h-full flex flex-col xl:gap-5 xl:pt-[17px]'>
            <div className='w-full  h-full  flex flex-col pt-8'>
                <div className='flex flex-col xl:gap-2'>
                   <h1 className='text-md xl:text-xl'>Hey there , I'm </h1>
                  <h4 className='xl:text-5xl text-3xl joseph'>Joseph louise C. De leon</h4>
                   <h4 className='text-3xl joseph'>Full stack Developer</h4>
                   <p className='text-[14px]'>Hello! I am actively seeking an internship opportunity in web development, and I have knowledge in MERN stack (MongoDB, Express.js, React, Node.js). I am eager to apply my skills and continue learning in a professional environment.</p>
                </div>

            <div className="scroller xl:mt-5" data-direction="right" data-speed="slow">
                <div className="scroller__inner">
                    <img src={html} alt="" className='w-[44px]'/>
                    <img src={css} alt="" className='w-[44px]'/>
                    <img src={js} alt="" className='w-[44px]'/>
                    <img src={react} alt="" className='w-[44px]'/>
                    <img src={nodejs} alt="" className='w-[44px]'/>
                    <img src={express} alt="" className='w-[44px]'/>
                    <img src={mongodb} alt="" className='w-[44px]'/>
                    <img src={mysql} alt="" className='w-[44px]'/>
                </div>
            </div>


                <div className='flex gap-5 mt-5'>
                    <a href='../../assets/joseph.pdf' download className={`w-[170px] border-2 py-2 ${isOn ? "bg-white text-black" : "bg-black text-white"} border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer centered`}>Resume</a>
                    <Link
                    to='contact'
                    activeClass='active'
                    spy={true}
                    className={`w-[170px] border-2 py-2 ${isOn ? "bg-white text-black" : "bg-black text-white"} border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer centered`}>Contact me</Link>
                </div>
            </div>

            <div className='w-full h-full flex xl:justify-center items-center relative justify-start'>
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
                className='w-[71%] h-[71%] bg-red-200 rounded-full'>

                </motion.div>
            </div>
       </div>
    </div>
  )
}

export default Joseph