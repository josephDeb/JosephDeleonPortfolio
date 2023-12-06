import skills from '../../../assets/skills.png'
import html from '../../../assets/html.png'
import css from '../../../assets/css.png'
import js from '../../../assets/java-script.png'
import react from '../../../assets/react.png'
import nodejs from '../../../assets/node-js.png'
import express from '../../../assets/express.png'
import mongodb from '../../../assets/mongodb.png'
import mysql from '../../../assets/mysql.png'
import chat from '../../../assets/chat.png'
import adaptation from '../../../assets/adaptation.png'
import idea from '../../../assets/idea.png'
import solving from '../../../assets/solving.png'
import clock from '../../../assets/clock.png'
const card = [
  {
    img: html,
  },
  {
    img: css,
  },
  {
    img: js,
  },
  {
    img: react,
  },
  {
    img: nodejs,
  },
  {
    img: express,
  },
  {
    img: mongodb,
  },
  {
    img: mysql,
  },
]
const Skills = () => {
  return (
    <div className='w-full centered flex-col text-center px-4 xl:pb-[80px]'>

        <div className='grid xl:grid-cols-8 grid-cols-4 gap-8 mt-8'>
            {card.map((cd, i) => {
              return <button key={i}>
                  <img src={cd.img} className='w-[53px]'/>
              </button>
            })}
        </div>

        <div className='w-full grid grid-cols-1 xl:grid-cols-3 gap-5 mt-14 xl:w-[80%]'>
              <div className='border-2 h-[260px] border-black flex flex-col'>
                  <div className='w-full p-4'>
                      <img src={chat} className='w-14'/>
                  </div>

                  <div className='h-full w-full centered flex-col gap-2'>
                      <h1 className='font-extrabold text-2xl'>Communication</h1>
                      <p className='text-[14px] px-5'>Can communicate using English & Tagalog and sharing ideas</p>
                  </div>
              </div>
              <div className='border-2 h-[260px] border-black flex flex-col'>
                  <div className='w-full p-4'>
                      <img src={adaptation} className='w-14'/>
                  </div>

                  <div className='h-full w-full centered flex-col gap-2'>
                      <h1 className='font-extrabold text-2xl'>Adaptability</h1>
                      <p className='text-[14px] px-5'>Flexibility to embrace change and new technologies</p>
                  </div>
              </div>
              <div className='border-2 h-[260px] border-black flex flex-col'>
                  <div className='w-full p-4'>
                      <img src={idea} className='w-14'/>
                  </div>

                  <div className='h-full w-full centered flex-col gap-2'>
                      <h1 className='font-extrabold text-2xl'>Creativity</h1>
                      <p className='text-[14px] px-5'>Generating innovative solution and ideas</p>
                  </div>
              </div>
              <div className='border-2 h-[260px] border-black flex flex-col'>
                  <div className='w-full p-4'>
                      <img src={solving} className='w-14'/>
                  </div>

                  <div className='h-full w-full centered flex-col gap-2'>
                      <h1 className='font-extrabold text-2xl'>Problem solving</h1>
                      <p className='text-[14px] px-5'>Analytical thinking to resolve challenges</p>
                  </div>
              </div>
              <div className='border-2 h-[260px] border-black flex flex-col'>
                  <div className='w-full p-4'>
                      <img src={clock} className='w-14'/>
                  </div>

                  <div className='h-full w-full centered flex-col gap-2'>
                      <h1 className='font-extrabold text-2xl'>Time management</h1>
                      <p className='text-[14px] px-5'>Prioritizing task to finish on date</p>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Skills