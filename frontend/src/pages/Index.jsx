import logo from '../assets/logo.png'
import { useState } from 'react'
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

const Index = () => {
  const [show, setShow] = useState(false)
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const [type, setType] = useState("signin")
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div className={`w-screen ${show ? 'visible opacity-100' : 'invisible opacity-30'} transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}>
        <div className='w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative'>
          <div className='absolute text-xl text-white cursor-pointer right-4 top-4' onClick={() => setShow(false)}><IoMdClose /></div>
          {
            type === "signup" &&
            <>
              <h2 className='pb-4 text-xl text-center text-white'>Sign Up in seconds</h2>
              <form action="">
                <div className='flex flex-col gap-3 mb-3 text-white'>
                  <label htmlFor="name" className='text-justify'>Name</label>
                  <input className='px-3 py-2 rounded-md outline-none border border-[#5c5c5e] focus:border-purple-500 bg-transparent' type="text" placeholder='Name' name='name' value={state.name} />
                </div>
                <div className='flex flex-col gap-3 mb-3 text-white'>
                  <label htmlFor="email" className='text-justify'>Email</label>
                  <input className='px-3 py-2 rounded-md outline-none border border-[#5c5c5e] focus:border-purple-500 bg-transparent' type="mail" placeholder='Email' name='email' value={state.email} />
                </div>
                <div className='flex flex-col gap-3 mb-3 text-white'>
                  <label htmlFor="password" className='text-justify'>Password</label>
                  <input className='px-3 py-2 rounded-md outline-none border border-[#5c5c5e] focus:border-purple-500 bg-transparent' type="password" placeholder='Password' name='password' value={state.email} />
                </div>
                <div>
                  <button className='w-full px-3 py-2 text-white bg-purple-500 rounded-md outline-none hover:bg-purple-600'>Sign Up</button>
                </div>
                <div className='flex items-center justify-between px-3 py-4'>
                  <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                  <div className='w-[6%] text-center flex pb-1 px-1 text-white'>Or</div>
                  <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                </div>
                <div className='pb-4'>
                  <button className='flex items-center justify-center w-full gap-2 px-3 py-2 text-white bg-orange-700 rounded-md outline-none hover:bg-orange-800'>
                    <span><AiOutlineGoogle /></span>
                    <span>Login with Gmail</span>
                  </button>
                </div>
                <div className='pb-4'>
                  <button className='flex items-center justify-center w-full gap-2 px-3 py-2 text-white bg-blue-700 rounded-md outline-none hover:bg-blue-800'>
                    <span><FaFacebookF /></span>
                    <span>Login with Facebook</span>
                  </button>
                </div>
              </form>
            </>
          }
          {
            type === "signin" &&
            <>
              <h2 className='pb-4 text-xl text-center text-white'>Sign In in seconds</h2>
              <form action="">
                <div className='flex flex-col gap-3 mb-3 text-white'>
                  <label htmlFor="email" className='text-justify'>Email</label>
                  <input className='px-3 py-2 rounded-md outline-none border border-[#5c5c5e] focus:border-purple-500 bg-transparent' type="mail" placeholder='Email' name='email' value={state.email} />
                </div>
                <div className='flex flex-col gap-3 mb-3 text-white'>
                  <label htmlFor="password" className='text-justify'>Password</label>
                  <input className='px-3 py-2 rounded-md outline-none border border-[#5c5c5e] focus:border-purple-500 bg-transparent' type="password" placeholder='Password' name='password' value={state.email} />
                </div>
                <div>
                  <button className='w-full px-3 py-2 text-white bg-purple-500 rounded-md outline-none hover:bg-purple-600'>Sign In</button>
                </div>
                <div className='flex items-center justify-between px-3 py-4'>
                  <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                  <div className='w-[6%] text-center flex pb-1 px-1 text-white'>Or</div>
                  <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                </div>
                <div className='pb-4'>
                  <button className='flex items-center justify-center w-full gap-2 px-3 py-2 text-white bg-orange-700 rounded-md outline-none hover:bg-orange-800'>
                    <span><AiOutlineGoogle /></span>
                    <span>Login with Gmail</span>
                  </button>
                </div>
                <div className='pb-4'>
                  <button className='flex items-center justify-center w-full gap-2 px-3 py-2 text-white bg-blue-700 rounded-md outline-none hover:bg-blue-800'>
                    <span><FaFacebookF /></span>
                    <span>Login with Facebook</span>
                  </button>
                </div>
              </form>
            </>
          }

        </div>
      </div>
      <div className="bg-[#252627] shadow-md">
        <div className="w-[93%] m-auto py-3">
          <div className="flex items-center justify-between">
            <div className="w-[150px] h-[48px]">
              <img className='object-contain w-full h-full' src={logo} alt="" />
            </div>
            <div className='flex gap-4'>
              <button className='py-2 w-[80px] text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium'
                onClick={() => {
                  setType("signin")
                  setShow(true)
                }}>Sign In</button>
              <button className='py-2 w-[80px] text-center bg-purple-500 text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium'
                onClick={() => {
                  setType("signup")
                  setShow(true)
                }}
              >Sign Up</button>
            </div>

          </div>
        </div>
      </div>
      <div className='items-center justify-center w-full h-full p-4'>
        <div className='py-[168px] flex justify-center items-center flex-col gap-6'>
          <h2 className='text-5xl font-bold text-white'>What will you design today?</h2>
          <span className='text-2xl font-medium text-teal-50'>Canvas make it easy to create and share professional designs.</span>
          <button className='py-3 w-[200px] text-center bg-purple-600 text-white transition-all hover:bg-purple-900 rounded-[5px] font-medium'
          onClick={()=> {
            setType("signup")
            setShow(true)
          }}
          >Sign Up for Free</button>
        </div>
      </div>
    </div>
  )
}

export default Index