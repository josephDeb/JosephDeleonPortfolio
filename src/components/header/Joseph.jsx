

import './header.css'

import {Link} from 'react-scroll'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/GlobalContext'
import {motion} from 'framer-motion';
import { fadeIn } from '../fadeIn';
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
                <motion.div 
                 variants={fadeIn('down', 0.2)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once: false, amount: 0.6}}
                className='flex flex-col xl:gap-2 w-full centered'>
                   <h1 className='text-lg xl:text-xl'>
                    Hey there , I'm </h1>
                  <h4 className='xl:text-5xl text-3xl joseph'>Joseph louise C. De leon</h4>
                   <h4 className='xl:text-3xl text-xl joseph'>I build things for the web
                   </h4>
                  <p
                  className={`${isOn ? "hover:text-white" : "hover:text-black"} xl:px-[240px] text-center text-[14px] text-gray-500  transition-all duration-500 mt-3 xl:mt-0 my-4`}>I am a Full stack Developer Residing in Novaliches, Quezon city. I enjoy working on every aspect of web development, from the user interface to the service logic
                  </p>


                </motion.div>

                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='flex gap-5 mt-5 w-full centered xl:flex xl:justify-center'>
                    <a onClick={() => handleDownload("/src/assets/joseph louise.pdf")} className={`w-[170px] border-2 py-2 ${isOn ? "hover:bg-black hover:border-2 hover:border-white bg-white text-black hover:text-white" : "bg-black text-white hover:bg-white hover:border-2 hover:border-black hover:text-black"} transition-all duration-500 cursor-pointer centered`}>Resume</a>
                    <Link
                    to='contact'
                    activeClass='active'
                    spy={true}
                    className={`w-[170px] border-2 py-2 ${isOn ? "hover:bg-black hover:border-2 hover:border-white bg-white text-black hover:text-white" : "bg-black text-white hover:bg-white hover:border-2 hover:border-black hover:text-black"} transition-all duration-500 cursor-pointer centered`}>Contact me</Link>
                </motion.div>

            </div>

       </div>
    </div>
  )
}

export default Joseph