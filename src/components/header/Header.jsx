import Joseph from "./Joseph"


const Header = () => {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto  h-[71px] bg-white/80 shadow-lg'>
       <div className='w-[88%] mx-auto flex items-center justify-between h-full'>
            <h1 className='text-[17px]'>Joseph.Dev</h1>

            <div className='flex gap-6'>
                <h2>Projects</h2>
                <h3>About</h3>
                <h2>Get in touch</h2>
            </div>
       </div>
    </div>

    <Joseph />
    </>
  )
}

export default Header