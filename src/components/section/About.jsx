import data from '../data/Data'

const About = () => {

  const filterItems = (cat) => {
    console.log(cat)
  }

  return (
    <div className='max-w-screen-2xl h-screen bg-red-200 flex flex-col'>
        <div className='w-full centered mt-[88px]'>
            <h1 className='text-5xl'>About me</h1>
        </div>
        
        <div className='w-[88%] mx-auto border-2 h-full'>
            <div className='xl:w-[53%] border-2 mx-auto h-[71px] mt-5 FSC'>
            {data.map((dt, i) => {
                    return <button onClick={() => filterItems(dt.category)} key={i} className='border-2 h-full w-full text-[14px]'>{dt.category}</button>
                })}
            </div>
        </div>
    </div>
  )
}

export default About