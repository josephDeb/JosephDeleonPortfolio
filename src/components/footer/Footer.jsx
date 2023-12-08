import facebook from '../../assets/facebook.png'
import call from '../../assets/phone-call.png'
import linkedin from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.png'
import tiktok from '../../assets/tik-tok.png'
import instagram from '../../assets/instagram.png'
import panda from '../../assets/panda.png'
import './footer.css'
const Footer = () => {
  return (
    <>

    <div className=' max-w-screen-2xl  flex flex-col '>

    <ul className="wrapper ">
      <li className="icon facebook">
        <span className="tooltip w-[130px] text-center">Joseph De Leon </span>
        <span><i className="fab fa-facebook-f"></i></span>
        <a target='_blank' href='https://www.facebook.com/Goseph8/'>
        <img className='w-12 object-cover' src={facebook}/>
        </a>
      </li>
    <li className="icon twitter">
        <span className="tooltip bg-black">josephdeleon28h</span>
        <span><i className="fab fa-twitter"></i></span>
        <a  target='_blank' href='https://www.tiktok.com/@josephdeleon28h'>
        <img className='w-12 object-cover' src={tiktok}/>
        </a>
    </li>
    <li className="icon instagram">
        <span className="tooltip">linkedin</span>
        <span><i className="fab fa-instagram"></i></span>
        <a  target='_blank' href='https://www.linkedin.com/in/joseph-louise-de-leon-84a116290/'>
        <img className='w-12 object-cover' src={linkedin}/>
        </a>
    </li>
    <li className="icon facebook">
        <span className="tooltip">yuuesef</span>
        <span><i className="fab fa-facebook-f"></i></span>
        <a href='https://www.instagram.com/yuuesef/'><img className='w-12 object-cover' src={instagram}/></a>
      </li>
    <li className="icon twitter">
        <span className="tooltip">josephdeleonpogi@gmail.com</span>
        <span><i className="fab fa-twitter"></i></span>
        <img className='w-12 object-cover' src={gmail}/>
    </li>
    <li className="icon instagram">
        <span className="tooltip">09913936541</span>
        <span><i className="fab fa-instagram"></i></span>
        <img className='w-12 object-cover' src={call}/>
    </li>
    </ul>
    </div>

    <div className='w-full flex justify-center  items-end '>
        <img src={panda} className='w-[260px] object-cover h-full'/>
    </div>

    </>
  )
}

export default Footer