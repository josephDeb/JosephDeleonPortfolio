import projects from '../../data/projects.js'
import eye from '../../../assets/eye.png'
import github from '../../../assets/github.png'
const Projects = () => {
  return (
    <>
    <div className='w-full h-[140px] flex justify-center items-end'>
      <h1 className='text-5xl'>Projects</h1>
     </div>

    <div className='max-w-screen-2xl centered mt-[80px]'>
        <div className='xl:grid xl:grid-cols-4 w-[80%] xl:gap-5 grid grid-cols-1 gap-5'>
            {projects.map((pr, i) => {
              return <div className='h-[260px] shadow-lg cursor-pointer relative w-full' key={i}>
                    <img src={pr.image} className='object-cover h-full w-full hover:object-contain transition-all duration-500 '/>
                    <i className='absolute bg-black/80 top-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-500 centered gap-5'>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={eye} className='w-12'/>
                          </div>
                          <div className='bg-white px-2 py-2 rounded-full cursor-pointer'>
                          <img src={github} className='w-12'/>
                          </div>
                    </i>
              </div>
            })}
        </div>
    </div>

    <div className='h-44'>

    </div>
    </>
  )
}

export default Projects