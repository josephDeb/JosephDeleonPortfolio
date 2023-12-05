import skills from '../../../assets/skills.png'
import html from '../../../assets/html.png'
import css from '../../../assets/css.png'
import js from '../../../assets/java-script.png'
import react from '../../../assets/react.png'
import nodejs from '../../../assets/node-js.png'
import express from '../../../assets/express.png'
import mongodb from '../../../assets/mongodb.png'
import mysql from '../../../assets/mysql.png'

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
    <div className='w-full centered flex-col text-center px-4'>
        <h1 className=''>I am a Full stack Developer</h1>

        <p className='text-[14px] pt-2 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione minus non corrupti amet consectetur.</p>

        <div className='mt-8 centered gap-4'>
            <img src={skills} className='w-12'/>
            <h4 className='text-red-500 text-2xl'>My Skills</h4>
        </div>

        <div className='grid xl:grid-cols-8 grid-cols-4 gap-8 mt-8'>
            {card.map((cd, i) => {
              return <button key={i}>
                  <img src={cd.img} className='w-[62px]'/>
              </button>
            })}
        </div>
    </div>
  )
}

export default Skills