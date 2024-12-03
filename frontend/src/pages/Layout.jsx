import { useState } from 'react'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
import { Link, useLocation, Outlet } from 'react-router'
import { FaHome } from 'react-icons/fa'
import { BsFolder, BsGrid1X2 } from 'react-icons/bs'

const Layout = () => {
  const { pathname } = useLocation()
  const [show, setShow] = useState(false)
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div className="bg-[#252627] shadow-md fixed left-0 top-0 w-full z-20">
        <div className="w-[93%] m-auto py-3">
          <div className="flex items-center justify-between">
            <div className="w-[80px] h-[48px]">
              <img src={logo} alt="" className="w-full pt-4" />
            </div>
            <div className='relative flex items-center justify-center gap-4'>
              <button className='py-3 px-6 text-center bg-[#8b3dff] text-white rounded-[3px] overflow-hidden font-medium hover:bg-[#9553f8]'>Create a Design</button>
              <div className='cursor-pointer' onClick={() => setShow(!show)}>
                <img src={profile} alt="profile" className='w-[45px] h-[45px] rounded-full' />
              </div>
              <div className={`absolute top-[60px] right-0 w-[250px] bg-[#313030] p-3 border border-gray-700 transition duration-500 ${show ? 'visible opacity-100' : 'invisible opacity-30'}`}>
                <div className='flex items-center justify-start gap-5 px-2 py-2'>
                  <img src={profile} alt="profile" className='w-[40px] h-[40px] rounded-full' />
                  <div className='flex flex-col items-start justify-center'>
                    <span className='text-[#e0dddd] font-bold text-md'>User Name</span>
                    <span className='text-[#e0dddd] font-bold text-md'>user@gmail.com</span>
                  </div>
                </div>
                <ul className='text-[#e0dddd] font-semibold'>
                  <li>
                    <Link className='p-2'>
                      <span>Settings</span>
                    </Link>
                    <Link className='p-2 cursor-pointer'>
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='flex w-full mt-16'>
        <div className='sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed'>
          <div className='flex items-center justify-start gap-5 px-2 py-2 mb-3'>
            <img src={profile} alt="profile-img" className='w-[45px] h-[45px] rounded-full' />
            <div className='flex flex-col items-start justify-center'>
              <span className='text-[#e0dddd] font-bold text-md'>Username</span>
              <span className='text-[#c4c0c0] text-sm'>Free</span>
            </div>
          </div>
          <ul className='flex flex-col gap-2 px-4'>
            <li>
              <Link to='/' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname == '/' ? 'bg-[#ffffff26]' : ''} rounded-[4px] `}>
                <span className='text-xl'><FaHome /></span>
                <span className='font-medium'>Home</span>
              </Link>
            </li>
            <li>
              <Link to='/projects' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname == '/projects' ? 'bg-[#ffffff26]' : ''} rounded-[4px] `}>
                <span className='text-xl'><BsFolder /></span>
                <span className='font-medium'>Projects</span>
              </Link>
            </li>
            <li>
              <Link to='/templates' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname == '/templates' ? 'bg-[#ffffff26]' : ''} rounded-[4px] `}>
                <span className='text-xl'><BsGrid1X2 /></span>
                <span className='font-medium'>Templates</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='ml-[300px] x-[calc(100%-300px)]'>
        <div className='py-4 pr-4'>
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout