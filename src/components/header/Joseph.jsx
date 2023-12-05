
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/java-script.png'
import react from '../../assets/react.png'
import nodejs from '../../assets/node-js.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'
import mysql from '../../assets/mysql.png'
import man from '../../assets/man.png'
import msgbox from '../../assets/msgbox.png'
import './header.css'
import './script.js'
const Joseph = () => {
  return (
    <div id='home' className='max-w-screen-2xl mt-8  xl:h-[80vh] h-[125vh]'>
        
       <div className='w-[88%] mx-auto xl:grid xl:grid-cols-2 h-full flex flex-col'>
            <div className='w-full  h-full  flex flex-col pt-8'>
                <div className='flex flex-col'>
                   <h1 className='text-xl'>Hello i'm</h1>
                  <h4 className='xl:text-5xl text-3xl mb-3'>Joseph louise De leon</h4>
                   <h4 className='text-3xl'>Full stack Developer</h4>
                   <p className='text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione minus non corrupti, ipsum optio voluptate reprehenderit? Delectus ipsam doloribus fugit nostrum at.</p>
                </div>
                
            <div className="scroller" data-direction="right" data-speed="slow">
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
                    <button className='w-[170px] border-2 py-2 bg-white border-black hover:bg-black hover:text-white transition-all duration-500'>Resume</button>
                    <button className='w-[170px] border-2 py-2 bg-white border-black hover:bg-black hover:text-white transition-all duration-300'>Contact me</button>
                </div>
            </div>

            <div className='w-full h-full flex justify-start items-center relative '>
                <div className=''>
                <img src={man} className='w-[250px] mx-auto xl:w-[350px]'/>
                </div>
                <div>
                    <img src={msgbox} className='w-[350px] absolute top-0 right-0 rotate-45'/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Joseph