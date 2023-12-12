
import eye from '../../../assets/eye.png'
import github from '../../../assets/github.png'
import video from '../../../assets/video.png'



import ecommerceWeb from '../../../assets/ecommerceWeb.png'
import panotes from '../../../assets/panotes3.png'
import crudReact from '../../../assets/crudReact.png'
import carentals from '../../../assets/carentals.png'
import employeesMS from '../../../assets/employeesMS.png'


import react from '../../../assets/react.png'
import nodejs from '../../../assets/node-js.png'
import express from '../../../assets/express.png'
import mongodb from '../../../assets/mongodb.png'
import mysql from '../../../assets/mysql.png'
import tailwind from '../../../assets/Tailwind CSS.png'
import Next from '../../../assets/Next.js.png'
import framer from '../../../assets/farmer.png'
import star from '../../../assets/star.png'
import star2 from '../../../assets/star2.png'
import { useContext } from 'react'
import { AppContext } from '../../../context/GlobalContext.jsx'
import {motion} from 'framer-motion'
import { fadeIn } from '../../fadeIn.js'

const Projects = () => {

    const {isOn} = useContext(AppContext)

  return (
    <>
   <div id='projects' className={`max-w-screen-2xl flex-col mx-auto xl:h-[710px] centered ${isOn ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className='centered flex-col w-full'>
            {isOn ? <img src={star2} className='w-12'/> : <img src={star} className='w-12 bg-white'/>}
            <h1>Projects</h1>
        </div>

    <div className='w-full h-full centered flex-col'>
  
        <div className='max-w-screen-2xl centered mt-[44px] xl:mt-0'>
        <div className='xl:grid xl:grid-cols-3  w-[80%] xl:gap-5 grid grid-cols-1 gap-5'>
             <motion.div
             initial={"hidden"}
             animate={{ rotate: 180, scale: 1 }}
             transition={{
               type: "spring",
               stiffness: 260,
               damping: 20
             }}
             variants={fadeIn('down', 0.2)}
             whileInView={'show'}
             viewport={{once: false, amount: 0.2}}
             className='h-[260px] shadow-lg cursor-pointer relative w-full border-2 border-black' >
                    <img src={ecommerceWeb} className='object-cover h-full w-full hover:object-contain transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5 flex flex-col'>
                          <div className='flex gap-5'>
                          <a target='_blank' href='https://github.com/josephDeb/ShopBhow'  className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={video} className='w-8'/>
                          </a>
                          <a className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={eye} className='w-8'/>
                          </a>
                          <a target='_blank' href='https://github.com/josephDeb/ShopBhow'  className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-8'/>
                          </a>
                          </div>

                          <div className='w-full flex flex-col text-white centered text-center'>
                              <h1 className='joseph'>ShopBhow</h1>
                              <p className='text-[11px]'>This is E commerce Website, I use MERN (MongoDB, Express.js, React, Node.js) stack to build this project</p>
                              <div className='w-[80%] mt-4 px-1 py-2 flex items-center gap-5 centered'>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={mongodb} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={express} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={react} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={nodejs} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={tailwind} className='object-cover w-12'/>
                                  </div>
                              </div>
                          </div>
                    </i>
              </motion.div>

              <motion.div
              initial={"hidden"}
              animate={{ rotate: 180, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              variants={fadeIn('down', 0.4)}
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='h-[260px] shadow-lg cursor-pointer relative w-full border-2 border-black' >
                    <img src={employeesMS} className='object-cover h-full w-full hover:object-contain transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5 flex flex-col'>
                          <div className='flex gap-5'>
                          <a target='_blank' href='https://github.com/josephDeb/ShopBhow'  className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={video} className='w-8'/>
                          </a>
                          <a target='_blank' href='https://www.tiktok.com/@josephdeleon28h/video/7294283789033917698' className='bg-white px-2 py-2 rounded-full cursor-pointer z-40'>
                          <img src={eye} className='w-8'/>
                          </a>
                          <a href='https://github.com/josephDeb/employeeMS' target='_blank' className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-8'/>
                          </a>
                          </div>

                          <div className='w-full flex flex-col text-white centered text-center'>
                              <h1 className='underline'>Employee Management System</h1>
                              <p className='text-[11px] px-4'>Managing the numbers of employees and salary, I use MERN (Mysql, Express.js, React, Node.js) stack to build this project</p>
                              <div className='w-[80%] mt-4 px-1 py-2 flex items-center gap-5 centered'>
                                <div className='p-2 bg-white rounded'>
                                      <img src={mysql} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={express} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={react} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={nodejs} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={tailwind} className='object-cover w-12'/>
                                  </div>
                              </div>
                          </div>
                    </i>
              </motion.div>

              <motion.div 
             initial={"hidden"}
             animate={{ rotate: 180, scale: 1 }}
             transition={{
               type: "spring",
               stiffness: 260,
               damping: 20
             }}
             variants={fadeIn('down', 0.6)}
             whileInView={'show'}
             viewport={{once: false, amount: 0.4}}
             className='h-[260px] shadow-lg cursor-pointer relative w-full border-2 border-black' >
                    <img src={panotes} className='object-cover h-full w-full hover:object-contain transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5 flex flex-col'>
                          <div className='flex gap-5'>
                          <a target='_blank' href='https://github.com/josephDeb/ShopBhow'  className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={video} className='w-8'/>
                          </a>
                          <a href='https://www.tiktok.com/@josephdeleon28h/video/7296757149487729921' target='_blank' className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={eye} className='w-8'/>
                          </a>
                          <a href='https://github.com/josephDeb/Panotes' target='_blank' className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-8'/>
                          </a>
                          </div>

                          <div className='w-full flex flex-col text-white centered text-center'>
                              <h1 className='underline'>Panotes</h1>
                              <p className='text-[11px] px-4'>Notes application where user can (CRUD) Create,Update,Read & Delete. I use Mysql Express React Node.js</p>
                              <div className='w-[80%]  mt-4 px-1 py-2 flex items-center gap-5 centered'>
                              <div className='p-2 bg-white rounded'>
                                      <img src={mysql} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={express} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={react} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={nodejs} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={tailwind} className='object-cover w-12'/>
                                  </div>
                              </div>
                          </div>
                    </i>
              </motion.div>

              <motion.div 
              initial={"hidden"}
              animate={{ rotate: 180, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              variants={fadeIn('down', 0.7)}
              whileInView={'show'}
              viewport={{once: false, amount: 0.5}}
              className='h-[260px] shadow-lg cursor-pointer relative w-full border-2 border-black' >
                    <img src={carentals} className='object-cover h-full w-full hover:object-contain transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5 flex flex-col'>
                          <div className='flex gap-5'>
                          <a target='_blank' href='https://github.com/josephDeb/ShopBhow'  className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={video} className='w-8'/>
                          </a>
                          <a href='https://www.tiktok.com/@josephdeleon28h/video/7283073257702460673' target='_blank' className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={eye} className='w-8'/>
                          </a>
                          <a href='https://github.com/josephDeb/carwebsite' target='_blank' className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-8'/>
                          </a>
                          </div>

                          <div className='w-full flex flex-col text-white centered text-center'>
                              <h1 className='underline'>Carentals</h1>
                              <p className='text-[11px] px-4'>Static website I use Next.js Tailwind css & Framer motion</p>
                              <div className='w-[80%] mt-4 px-1 py-2 flex items-center gap-5 centered'>
                              <div className='p-2 bg-white rounded'>
                                      <img src={Next} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={framer} className='object-cover w-12'/>
                                  </div>
                                  <div className='p-2 bg-white rounded'>
                                      <img src={tailwind} className='object-cover w-12'/>
                                  </div>

                              </div>
                          </div>
                    </i>
              </motion.div>

              <motion.div
              initial={"hidden"}
              animate={{ rotate: 180, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              variants={fadeIn('down', 0.8)}
              whileInView={'show'}
              
              viewport={{once: false, amount: 0.5}}
              className='h-[260px] shadow-lg cursor-pointer relative w-full border-2 border-black' >
                    <img src={crudReact} className='object-cover h-full w-full hover:object-contain transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5 flex flex-col'>
                          <div className='flex gap-5'>
                          <a target='_blank' href='https://github.com/josephDeb/ShopBhow'  className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={video} className='w-8'/>
                          </a>
                          <a href='https://www.tiktok.com/@josephdeleon28h/video/7287958098529029381' target='_blank' className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={eye} className='w-8'/>
                          </a>
                          <a href='https://github.com/josephDeb/CRUD-using-React-js' target='_blank' className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-8'/>
                          </a>
                          </div>

                          <div className='w-full flex flex-col text-white centered text-center'>
                              <h1 className='underline'>Shopping cart</h1>
                              <p className='text-[11px] px-4'>CRUD Create,Update,Read & Delete. Using React.js</p>
                              <div className='w-[80%] mt-4 px-1 py-2 flex items-center gap-5 centered'>
                                  <div className='bg-white rounded-full p-3'>
                                  <img src={react} className='w-8'/>
                                  </div>
                                  <div className='bg-white rounded-full p-3'>
                                    <img src={tailwind} className='w-8'/>
                                  </div>
                              </div>
                          </div>
                    </i>
              </motion.div>
        </div>
         </div>
    </div>

 

   </div>

    </>
  )
}

export default Projects