
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/java-script.png'
import react from '../../assets/react.png'
import nodejs from '../../assets/node-js.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'
import mysql from '../../assets/mysql.png'
import man from '../../assets/man.png'

import neko from '../../assets/maneki-neko.png'
import msgbox from '../../assets/msgbox.png'
import './header.css'

import {Link} from 'react-scroll'
import { useEffect } from 'react'
const Joseph = () => {

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
          }
         
    }, [])

    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    
    
    
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
    <div id='home' className='max-w-screen-2xl mt-8  xl:h-[80vh] h-[125vh] mx-auto'>

       <div className='w-[88%] mx-auto xl:grid xl:grid-cols-2 h-full flex flex-col xl:gap-5 xl:pt-[17px]'>
            <div className='w-full  h-full  flex flex-col pt-8'>
                <div className='flex flex-col xl:gap-2'>
                   <h1 className='text-xl'>Hey there , I'm </h1>
                  <h4 className='xl:text-5xl text-3xl mb-3'>Joseph louise De leon</h4>
                   <h4 className='text-3xl'>Full stack Developer</h4>
                   <p className='text-[14px]'> a 19-year-old residing in Novaliches, Quezon City. I can code using MERN (MongoDB, Express.js, React, Node.js) stack and I am actively seeking an internship opportunity to further enhance my skills..</p>
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
                    <button className='w-[170px] border-2 py-2 bg-white border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Resume</button>
                    <Link
                    to='contact'
                    activeClass='active'
                    spy={true}
                    className='centered w-[170px] border-2 py-2 bg-white border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>Contact me</Link>
                </div>
            </div>

            <div className='w-full h-full flex xl:justify-start items-center relative justify-start'>
                <div className=''>
                <img src={man} className='w-[250px] mx-auto xl:w-[350px]'/>
                </div>
                <div>
                    <img src={msgbox} className='xl:w-[350px] absolute top-4 right-2 rotate-45 w-[200px]'/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Joseph