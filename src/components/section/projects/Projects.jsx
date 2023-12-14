
import eye from '../../../assets/eye.png'
import github from '../../../assets/github.png'
import video from '../../../assets/video.png'


import updlfl from '../../../assets/updlfl.png'
import ecommerceWeb from '../../../assets/ecommerceWeb.png'
import panotes from '../../../assets/panotes3.png'
import crudReact from '../../../assets/crudReact.png'
import carentals from '../../../assets/carentals.png'
import employeesMS from '../../../assets/employeesMS.png'


import { useContext } from 'react'
import { AppContext } from '../../../context/GlobalContext.jsx'
import {motion} from 'framer-motion'
import { fadeIn } from '../../fadeIn.js'

const Projects = () => {

    const {isOn} = useContext(AppContext)

  return (
    <>
   <div id='projects' className={`max-w-screen-2xl flex-col mx-auto xl:h-[710px] centered ${isOn ? "bg-black text-white" : "bg-white text-black"} h-[1700px]`}>

   <div className='w-full centered flex-col gap-5 xl:w-full'>

<div className='flex justify-start items-center w-[88%] gap-5 mx-auto'>
  <h1 className='text-4xl font-bold fnp'>Projects</h1> 
  <div className={`border-2 w-[80%] mx-auto ${isOn ? "border-white" : "border-black"}`}></div>
</div>
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
             className='h-[260px] cursor-pointer relative w-full hover:rounded-xl prg' >
                    <img src={updlfl} className='object-cover h-full w-full transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 top-0 w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-2 flex flex-col hover:rounded-xl h-full bg-black/80 rounded-full'>
                      <div className='flex gap-5'>
                         <button className='w-14 bg-white text-black rounded-xl'>Demo</button>
                         <button className='w-14 bg-white text-black rounded-xl'>View</button>
                         <button className='w-14 bg-white text-black rounded-xl'><a rel='noreferrer' target='_blank' href='https://github.com/josephDeb/carentals'>Code</a></button>
                      </div>
                      <h1 className={`${isOn ? "text-white" : "text-white"} prg`}>Upload & Download File</h1>
                      <p className='text-center prg text-[14px] text-gray-400 px-3'>This application is made by Tailwind css , React JS, Mongo DB, Node.js(express)</p>
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
             variants={fadeIn('down', 0.2)}
             whileInView={'show'}
             viewport={{once: false, amount: 0.2}}
             className='h-[260px] cursor-pointer relative w-full hover:rounded-xl prg' >
                    <img src={ecommerceWeb} className='object-cover h-full w-full transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 top-0 w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-2 flex flex-col hover:rounded-xl h-full bg-black/80 rounded-full'>
                      <div className='flex gap-5'>
                         <button className='w-14 bg-white text-black rounded-xl'>Demo</button>
                         <button className='w-14 bg-white text-black rounded-xl'><a rel='noreferrer' target='_blank' href='https://carentals-eta.vercel.app/'>View</a></button>
                         <button className='w-14 bg-white text-black rounded-xl'><a rel='noreferrer' target='_blank' href='https://github.com/josephDeb/carentals'>Code</a></button>
                      </div>
                      <h1 className={'prg'}>E-COMMERCE</h1>
                      <p className='text-center prg text-[14px] text-gray-400 px-3'>This application is made by Tailwind css , React JS, Mongo DB, Node.js(express) and Stripe</p>
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
              className='h-[260px] cursor-pointer relative w-full ' >
                    <img src={employeesMS} className='object-cover h-full w-full transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 top-0 w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-2 flex flex-col hover:rounded-xl h-full bg-black/80 rounded-full'>
                      <div className='flex gap-5'>
                         <button className='w-14 bg-white text-black rounded-xl'>Demo</button>
                         <button className='w-14 bg-white text-black rounded-xl'>View</button>
                         <button className='w-14 bg-white text-black rounded-xl'><a target='_blank' rel='noreferrer' href='https://github.com/josephDeb/employeeMS'>Code</a></button>
                      </div>
                      <h1 className={'prg'}>Employee Management System</h1>
                      <p className='text-center prg text-[14px] text-gray-400 px-3'>This application is made by Tailwind css , React JS, MYSQL, Node.js(express)</p>
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
             className='h-[260px] cursor-pointer relative w-full ' >
                    <img src={panotes} className='object-cover h-full w-full transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 top-0 w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-2 flex flex-col hover:rounded-xl h-full bg-black/80 rounded-full'>
                      <div className='flex gap-5'>
                         <button className='w-14 bg-white text-black rounded-xl'>Demo</button>
                         <button className='w-14 bg-white text-black rounded-xl'>View</button>
                         <button className='w-14 bg-white text-black rounded-xl'><a rel='noreferrer' target='_blank'  href='https://github.com/josephDeb/Panotes'>Code</a></button>
                      </div>
                      <h1 className={'prg'}>Notes App</h1>
                      <p className='text-center prg text-[14px] text-gray-400 px-3'>This application is made by Tailwind css , React JS, MYSQL, Node.js(express)</p>
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
              className='h-[260px] cursor-pointer relative w-full ' >
                    <img src={carentals} className='object-cover h-full w-full transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 top-0 w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-2 flex flex-col hover:rounded-xl h-full bg-black/80 rounded-full'>
                      <div className='flex gap-5'>
                         <a target='_blank' rel='noreferrer' href='https://carentals-eta.vercel.app/'><button className='w-14 bg-white text-black rounded-xl'>Demo</button></a>
                         <button className='w-14 bg-white text-black rounded-xl'>View</button>
                         <a target='_blank' rel='noreferrer' href='https://github.com/josephDeb/carentals'><button className='w-14 bg-white text-black rounded-xl'>Code</button></a>
                      </div>
                      <h1 className={'prg'}>Car Website</h1>
                      <p className='text-center prg text-[14px] text-gray-400 px-3'>This application is made by Tailwind css , Next JS, Framer motion and Node.js(express)</p>
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
              className='h-[260px] cursor-pointer relative w-full ' >
                    <img src={crudReact} className='object-cover h-full w-full transition-all duration-500 rotate-180'/>
                    <i className='absolute rotate-180 top-0 w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-2 flex flex-col hover:rounded-xl h-full bg-black/80 rounded-full'>
                      <div className='flex gap-5'>
                         <button className='w-14 bg-white text-black rounded-xl'>Demo</button>
                         <button className='w-14 bg-white text-black rounded-xl'><a rel='noreferrer' target='_blank' href='https://shopping-cart-joseph-dat-dev.onrender.com/'>View</a></button>
                         <button className='w-14 bg-white text-black rounded-xl'><a rel='noreferrer' target='_blank' href='https://github.com/josephDeb/ShoppingCart'>Code</a></button>
                      </div>
                      <h1 className={'prg'}>Shopping Cart</h1>
                      <p className='text-center prg text-[14px] text-gray-400 px-3'>This application is made by Tailwind css , React JS, </p>
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