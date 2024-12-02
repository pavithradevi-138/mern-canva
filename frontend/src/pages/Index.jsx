import logo from '../assets/logo.png'
const Index = () => {
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div className="bg-[#252627] shadow-md">
        <div className="w-[93%] m-auto py-3">
          <div className="flex justify-between items-center">
            <div className="w-[150px] h-[48px]">
              <img className='w-full h-full object-contain' src={logo} alt="" />
            </div>
            <div className='flex gap-4'>
              <button className='py-2 w-[80px] text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium'>Sign In</button>
              <button className='py-2 w-[80px] text-center bg-purple-500 text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium'>Sign Up</button>
            </div>
         
          </div>
        </div>
      </div>
      <div className='w-full h-full justify-center items-center p-4'>
        <div className='py-[168px] flex justify-center items-center flex-col gap-6'>
          <h2 className='text-5xl text-white font-bold'>What will you design today?</h2>
          <span className='text-2xl text-teal-50 font-medium'>Canvas make it easy to create and share professional designs.</span>
          <button className='py-3 w-[200px] text-center bg-purple-600 text-white transition-all hover:bg-purple-900 rounded-[5px] font-medium'>Sign Up for Free</button>
        </div>
      </div>
    </div>
  )
}

export default Index