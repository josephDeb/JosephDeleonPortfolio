import React, { useState } from 'react'
import email2 from '../../../assets/email.png'
import load from '../../../assets/loading.gif'
import emailjs from '@emailjs/browser'
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
  return (
    <div id='contact' className='w-full xl:h-[110vh] h-[140vh] centered'>
        <form onSubmit={handleSubmit} className='w-[80%] flex flex-col xl:flex-row'>
            <div className='h-[350px] w-full xl:centered xl:w-full xl:h-[440px]'>
                <img src={email2} className='object-cover xl:object-contain xl:h-[440px] xl:w-full'/>
            </div>

            <div className='flex flex-col w-full centered'>
                <h1 className='text-5xl'>Contact</h1>

                <div className='flex flex-col xl:w-[71%]  mt-8'>
                    <label>Full name :</label>
                    <input onChange={(e) => setName( e.target.value)} className='xl:h-[44px] h-[35px] border-2 border-black p-3'></input>
                </div>
                <div className='flex flex-col xl:w-[71%]  mt-5 '>
                    <label>Email :</label>
                    <input onChange={(e) => setEmail( e.target.value)} className='xl:h-[44px] h-[35px] border-2 border-black p-3'></input>
                </div>

                <textarea onChange={(e) => setMessage(e.target.value)} className='border-2 border-black mt-5 h-[88px] xl:w-[71%] p-3'>

                </textarea>

                <div className='flex flex-col xl:w-full  mt-5 w-full'>
                    {loading ? <img src={load} className='w-14 mx-auto'/>
                   :
                   <button className='w-full bg-black text-white py-3 xl:w-[80%] xl:mx-auto'>Submit</button>
                   }
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact