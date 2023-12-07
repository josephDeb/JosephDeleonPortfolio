import motivation from '../../assets/motivation.png'
const Welcome = () => {
  return (
    <div className='max-w-screen-2xl mx-auto xl:h-[260px] xl:flex xl:justify-center xl:items-end centered pb-[62px] xl:pb-0'>
        <img src={motivation} className='w-[170px]'/>
    </div>
  )
}

export default Welcome