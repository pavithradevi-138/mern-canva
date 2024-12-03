import { useState } from "react"
import { FaTrash } from "react-icons/fa"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link, useNavigate } from "react-router"

const Home = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    width: 0,
    height: 0
  })
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }
  const create = () => {
    navigate('/design/create', {
      state : {
        type : 'create',
        width : state.width,
        height : state.height
      }
    })
  }
  const [show, setShow] = useState(false)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mdTablet: {
      breakpoint: { max: 992, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="pt-5">
      <div className="w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden">
        <button onClick={() => setShow(!show)} className='py-2 px-4 text-[15px] overflow-hidden text-center bg-[#8b3dff] text-white rounded-[3px] font-medium hover:bg-[#9553f8] absolute top-3 right-3'>Custom Size</button>
        <div className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white ${show ? 'visible opacity-100' : 'invisible opacity-30 transition-all duration-500'} `}>
          <div className="grid grid-cols-2 gap-3 pb-4">
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="width">Width</label>
              <input type="number" name="width" id="width" className="w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md" onChange={handleChange} />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="height">Height</label>
              <input type="number" name="height" id="height" className="w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md" onChange={handleChange} />
            </div>
          </div>
          <button className='py-2 px-4 text-[13px] overflow-hidden text-center bg-[#8b3dff] text-white rounded-[3px] font-medium hover:bg-[#9553f8] w-full' onClick={create}>Create New Design</button>
        </div>
        <div>
          <h2 className="pt-6 pb-10 text-3xl font-semibold text-white">What will you design today?</h2>
        </div>
      </div>
      <div>
        <h2 className="py-6 text-xl font-semibold text-white">Your Recent Designs</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          transitionDuration={500}
        >
          {
            [1, 2, 3, 4, 5].map((d, i) =>
              <div key={i} className="relative group w-full h-[150px] px-2 ">
                <Link className="w-full h-full block bg-[#ffffff12] p-4 rounded-md">
                  <img src="https://placehold.co/600x600" alt="" className="w-full h-full overflow-hidden rounded-md" />
                </Link>
                <div className="absolute hidden p-2 text-red-500 transition-all duration-500 cursor-pointer top-1 right-2 group-hover:block"><FaTrash /></div>
              </div>)
          }

        </Carousel>
      </div>
    </div>
  )
}

export default Home