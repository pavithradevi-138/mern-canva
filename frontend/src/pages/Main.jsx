import { BsGrid1X2 } from "react-icons/bs"
import Header from "../components/Header"
import { FaFolder, FaImage, FaShapes } from "react-icons/fa"
import { GiCloudUpload } from "react-icons/gi"
import { TfiText } from "react-icons/tfi"
import { RxTransparencyGrid } from "react-icons/rx"
import { useState } from "react"
import { MdKeyboardArrowLeft } from "react-icons/md"
import TemplateDesign from "../components/main/TemplateDesign"
import MyImages from "../components/MyImages"
import Projects from "../components/Projects"
import Image from "../components/Image"

const Main = () => {

  const [state, setState] = useState('')
  const [show, setShow] = useState({
    status: true,
    name: ""
  })

  const setElements = (type, name) => {
    setState(type)
    setShow({
      status: false,
      name
    })
  }


  return (
    <div className="h-screen bg-black min-w-screen">
      <Header />
      <div className="flex h-[calc(100%-60px)] w-screen ">
        <div className="w-[80px] bg-[#181918] z-50 h-full text-gray-400 overflow-y-auto ">
          <div onClick={() => setElements('design', 'design')} className={`${show.name === "design" ? '' : 'bg-[#252627]'} w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <BsGrid1X2 /> </span>
            <span className="text-xs font-medium">Design</span>
          </div>

          <div onClick={() => setElements('shape', 'shape')} className={`${show.name === "shape" ? '' : 'bg-[#252627]'} w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <FaShapes /> </span>
            <span className="text-xs font-medium">Shapes</span>
          </div>

          <div onClick={() => setElements('image', 'uploadImage')} className={`${show.name === "image" ? '' : 'bg-[#252627]'} w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <GiCloudUpload /> </span>
            <span className="text-xs font-medium">Upload</span>
          </div>

          <div onClick={() => setElements('text', 'text')} className={`${show.name === "text" ? '' : 'bg-[#252627]'} w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <TfiText /> </span>
            <span className="text-xs font-medium">Text</span>
          </div>

          <div onClick={() => setElements('project', 'projects')} className={`${show.name === "project" ? '' : 'bg-[#252627]'} w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <FaFolder /> </span>
            <span className="text-xs font-medium">Project</span>
          </div>

          <div onClick={() => setElements('initImage', 'images')} className={`${show.name === "initImage" ? '' : 'bg-[#252627]'} w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <FaImage /> </span>
            <span className="text-xs font-medium">Images</span>
          </div>

          <div onClick={() => setElements('background', 'background')} className={`${show.name === "background" ? '' : 'bg-[#252627]'} w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <RxTransparencyGrid /> </span>
            <span className="text-xs font-medium">Background</span>
          </div>

        </div>

        <div className="h-full w-[calc(100%-75px)] ">
          <div className={`${show.status ? 'p-0 -left-[350px]' : 'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700' `}>
            <div onClick={() => setShow({ name: '', status: true })} className="flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full"><MdKeyboardArrowLeft /></div>
            {state === 'design' &&
              <div className="grid grid-cols-2 gap-2">
                <TemplateDesign />
              </div>
            }
            {state === 'shape' &&
              <div className="grid grid-cols-3 gap-2">
                <div className="h-[90px] bg-[#3c3c3d] cursor-pointer"></div>
                <div className="h-[90px] bg-[#3c3c3d] rounded-full cursor-pointer"></div>
                <div className="h-[90px] bg-[#3c3c3d] cursor-pointer" style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%) ' }}></div>
              </div>
            }
            {state === 'image' && <MyImages />}
            {state === 'text' &&
              <div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm ">
                    <h2>Add a Text</h2>
                  </div>
                </div>
              </div>
            }
            {state === 'project' && <Projects />}
            {state === 'initImage' &&
              <div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide ">
                <Image />
              </div>
            }
            {state === 'background' &&
              <div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide ">
                <div className="grid grid-cols-2 gap-2">
                  {
                    [1, 2, 3, 4, 5].map((img, i) =>
                      <div key={i} className="w-full h-[100px] overflow-hidden rounded-sm cursor-pointer ">
                        <img className="object-fill w-full h-full" src="https://placehold.co/300x300" alt="" />
                      </div>
                    )
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main