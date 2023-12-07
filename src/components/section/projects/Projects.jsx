import projects from '../../data/projects.js'
import eye from '../../../assets/eye.png'
import github from '../../../assets/github.png'




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
const Projects = () => {
    const onClick = () => {
        console.log("clikced")
    }
  return (
    <>
   <div className='max-w-screen-2xl mx-auto xl:h-[1110px] xl:flex xl:justify-center xl:items-center xl:flex-col xl:pb-[80px]'>

   <div id='projects' className='w-full h-[140px] flex justify-center items-end'>
      <h1 className='text-5xl'>Projects</h1>
     </div>

    <div className='max-w-screen-2xl centered mt-[80px]'>
        <div className='xl:grid xl:grid-cols-3  w-[80%] xl:gap-5 grid grid-cols-1 gap-5'>
             <div className='h-[260px] shadow-lg cursor-pointer relative w-full' >
                    <img src={ecommerceWeb} className='object-cover h-full w-full hover:object-contain transition-all duration-500 '/>
                    <i className='absolute bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5 flex flex-col'>
                          <div className='flex gap-5'>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={eye} className='w-8'/>
                          </div>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-8'/>
                          </div>
                          </div>

                          <div className='w-full flex flex-col text-white centered text-center'>
                              <h1>ShopBhow</h1>
                              <p className='text-[11px]'>This is E commerce Website, I use MERN (MongoDB, Express.js, React, Node.js) stack to build this project</p>
                              <div className='w-[80%] bg-white mt-4 px-1 py-2 flex items-center gap-5 centered'>
                                  <img src={mongodb} className='w-8'/>
                                  <img src={express} className='w-8'/>
                                  <img src={react} className='w-8'/>
                                  <img src={nodejs} className='w-8'/>
                                  <img src={tailwind} className='w-8'/>
                              </div>
                          </div>
                    </i>
              </div>

              <div className='h-[260px] shadow-lg cursor-pointer relative w-full ' >
                    <img src={employeesMS} className='object-cover h-full w-full hover:object-contain transition-all duration-500'/>
                    <i className='absolute bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5 flex flex-col'>
                          <div className='flex gap-5'>
                          <a target='_blank' href='https://github.com/josephDeb/employeeMS' className='bg-white px-2 py-2 rounded-full cursor-pointer z-40'>
                          <img src={eye} className='w-8'/>
                          </a>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-8'/>
                          </div>
                          </div>

                          <div className='w-full flex flex-col text-white centered text-center'>
                              <h1 className='underline'>Employee Management System</h1>
                              <p className='text-[11px] px-4'>Managing the numbers of employees and salary, I use MERN (Mysql, Express.js, React, Node.js) stack to build this project</p>
                              <div className='w-[80%] bg-white mt-4 px-1 py-2 flex items-center gap-5 centered'>
                                  <img src={mysql} className='w-8'/>
                                  <img src={express} className='w-8'/>
                                  <img src={react} className='w-8'/>
                                  <img src={nodejs} className='w-8'/>
                                  <img src={tailwind} className='w-8'/>
                              </div>
                          </div>
                    </i>
              </div>

              <div className='h-[260px] shadow-lg cursor-pointer relative w-full' >
                    <img src={panotes} className='object-cover h-full w-full hover:object-contain transition-all duration-500 '/>
                    <i className='absolute bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5 flex flex-col'>
                          <div className='flex gap-5'>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={eye} className='w-8'/>
                          </div>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-8'/>
                          </div>
                          </div>

                          <div className='w-full flex flex-col text-white centered text-center'>
                              <h1 className='underline'>Panotes</h1>
                              <p className='text-[11px] px-4'>Notes application where user can (CRUD) Create,Update,Read & Delete. I use Mysql Express React Node.js</p>
                              <div className='w-[80%] bg-white mt-4 px-1 py-2 flex items-center gap-5 centered'>
                                  <img src={mysql} className='w-8'/>
                                  <img src={express} className='w-8'/>
                                  <img src={react} className='w-8'/>
                                  <img src={nodejs} className='w-8'/>
                                  <img src={tailwind} className='w-8'/>
                              </div>
                          </div>
                    </i>
              </div>

              <div className='h-[260px] shadow-lg cursor-pointer relative w-full' >
                    <img src={carentals} className='object-cover h-full w-full hover:object-contain transition-all duration-500 '/>
                    <i className='absolute bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5 flex flex-col'>
                          <div className='flex gap-5'>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={eye} className='w-8'/>
                          </div>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-8'/>
                          </div>
                          </div>

                          <div className='w-full flex flex-col text-white centered text-center'>
                              <h1 className='underline'>Carentals</h1>
                              <p className='text-[11px] px-4'>Static website I use Next.js Tailwind css & Framer motion</p>
                              <div className='w-[80%] bg-white mt-4 px-1 py-2 flex items-center gap-5 centered'>
                                  <img src={Next} className='w-8'/>
                                  <img src={tailwind} className='w-8'/>
                                  <img src={framer} className='w-8'/>
                              </div>
                          </div>
                    </i>
              </div>

              <div className='h-[260px] shadow-lg cursor-pointer relative w-full' >
                    <img src={crudReact} className='object-cover h-full w-full hover:object-contain transition-all duration-500 '/>
                    <i className='absolute bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5 flex flex-col'>
                          <div className='flex gap-5'>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={eye} className='w-8'/>
                          </div>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-8'/>
                          </div>
                          </div>

                          <div className='w-full flex flex-col text-white centered text-center'>
                              <h1 className='underline'>Shopping cart</h1>
                              <p className='text-[11px] px-4'>CRUD Create,Update,Read & Delete. Using React.js</p>
                              <div className='w-[80%] bg-white mt-4 px-1 py-2 flex items-center gap-5 centered'>
                                  <img src={react} className='w-8'/>
                                  <img src={tailwind} className='w-8'/>
                              </div>
                          </div>
                    </i>
              </div>
        </div>
    </div>


   </div>

    </>
  )
}

export default Projects