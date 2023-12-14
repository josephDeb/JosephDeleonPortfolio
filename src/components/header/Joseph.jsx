
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

    
    const handleDownload = async (url) => {
      fetch(url)
      .then((res ) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split("/").pop()
        const aTag = document.createElement("a")
        aTag.href=blobURL
        aTag.setAttribute("download",fileName)
        aTag.click();
        aTag.remove()
      })
      
    }
    


  return (
    <div id='home' className={`max-w-screen-2xl xl:mt-0  xl:h-[710px] h-[710px] mx-auto ${isOn ? "bg-black text-white transition-all duration-500" : "bg-white/80 transition-all duration-500"} prg `}>

       <div className='w-[88%] mx-auto xl:flex xl:justify-center xl:items-center xl:text-start text-center xl:h-full xl:pb-[116px]  h-[88%] flex justify-center items-center'>

            <div className='w-full  pt-8  xl:flex xl:justify-center xl:items-center flex-col'>
                <div className='flex flex-col xl:gap-2 w-full centered'>
                   <h1 className='text-lg xl:text-xl'>
                    Hey there , I'm </h1>
                  <h4 className='xl:text-5xl text-3xl joseph'>Joseph louise C. De leon</h4>
                   <h4 className='xl:text-3xl text-xl joseph'>I build things for the web</h4>
                  <p className={`${isOn ? "hover:text-white" : "hover:text-black"} xl:px-[240px] text-center text-[14px] text-gray-500  transition-all duration-500 mt-3 xl:mt-0`}>I am a Full stack Developer Residing in Novaliches, Quezon city. I enjoy working on every aspect of web development, from the user interface to the service logic</p>


                </div>

                <div className='flex gap-5 mt-5 w-full centered xl:flex xl:justify-center'>
                    <a href='../../assets/joseph.pdf' download className={`w-[170px] border-2 py-2 ${isOn ? "hover:bg-black hover:border-2 hover:border-white bg-white text-black hover:text-white" : "bg-black text-white"} border-black transition-all duration-500 cursor-pointer centered hover:border-2 hover:border-white`}>Resume</a>
                    <Link
                    to='contact'
                    activeClass='active'
                    spy={true}
                    className={`w-[170px] border-2 py-2 ${isOn ? "bg-white text-black" : "bg-black text-white"} border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer centered hover:border-2 hover:border-white`}>Contact me</Link>
                </div>

            </div>

       </div>
    </div>
  )
}

export default Joseph