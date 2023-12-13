import React, { useContext, useState } from 'react'
import email2 from '../../../assets/email.png'
import call from '../../../assets/call-me.png'
import load from '../../../assets/loading.gif'
import emailjs from '@emailjs/browser'
import { AppContext } from '../../../context/GlobalContext'
const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const serviceId = "service_ltucls2"
    const templateId = "template_g60jbeo"
    const publicKey = "KlyD6zYSuUYUcBHzc"

    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: email,
        message: message
    }

    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await emailjs.send(serviceId, templateId, templateParams, publicKey).then((res) => {
            setLoading(false)
            console.log("Email sent success", res);
            setName("")
            setEmail("")
            setMessage("")
        }).catch(err => console.log(err))
        
    }
    const {isOn} = useContext(AppContext)
  return (
    <div id='contact' className={` xl:h-[710px] max-w-screen-2xl mx-auto h-[980px] centered ${isOn ? "bg-black text-white" : "bg-white text-black"}`}>
        <form onSubmit={handleSubmit} className='w-[80%] flex flex-col xl:flex-row'>
            <div className='h-[350px] w-full xl:centered xl:w-full xl:h-[440px]'>
                {isOn ?  <img src={call} className='object-cover xl:object-contain xl:h-[440px] xl:w-full'/>
                :
                <img src={email2} className='object-cover xl:object-contain xl:h-[440px] xl:w-full'/>
                }
            </div>

            <div className='flex flex-col w-full centered'>
                <div className='w-full flex flex-col centered gap-5'>
                    <h1 className='text-5xl font-bold xl:mt-0 mt-5 fnp'>Contact</h1>
                    <p className='text-xl prg text-center xl:text-start'>Would You Like To Contact Me ? Awesome!!</p>
                </div>
                
                <div className='flex flex-col xl:w-[71%]  mt-8 w-full prg'>
                    <label className='mx-auto w-[80%]'>Full name :</label>
                    <input onChange={(e) => setName( e.target.value)} className='w-[80%] xl:h-[44px] h-[35px] border-2 border-black p-3 mx-auto'></input>
                </div>
                <div className='flex flex-col xl:w-[71%]  mt-5 w-full'>
                    <label className='mx-auto w-[80%] prg'>Email :</label>
                    <input onChange={(e) => setEmail( e.target.value)} className='mx-auto w-[80%] xl:h-[44px] h-[35px] border-2 border-black p-3'></input>
                </div>
                
                <div className='flex flex-col centered w-[80%] mt-3'>
                <h1 className='xl:w-[71%] w-full prg'>Message Box</h1>
                <textarea name='message' onChange={(e) => setMessage(e.target.value)} className='border-2 border-black h-[88px] xl:w-[71%] p-3 w-[100%]'>

                </textarea>
                </div>

                <div className='flex flex-col xl:w-full  mt-5 w-full'>
                    {loading ? <img src={load} className='w-14 mx-auto'/>
                   :
                   <button className={`${isOn ? "bg-white text-black hover:bg-black border-2 hover:text-white" : "bg-black text-white hover:bg-white border-2 border-black hover:text-black "} w-full py-3 xl:w-[71%] xl:mx-auto transition-all duration-500 prg`}>Submit</button>
                   }
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact