import { BsGrid1X2 } from "react-icons/bs"
import Header from "../components/Header"
import { FaFolder, FaImage, FaShapes } from "react-icons/fa"
import { GiCloudUpload } from "react-icons/gi"
import { TfiText } from "react-icons/tfi"
import { RxTransparencyGrid } from "react-icons/rx"

const Main = () => {
  return (
    <div className="h-screen bg-black min-w-screen">
      <Header />
      <div className="flex h-[calc(100%-60px)] w-screen ">
        <div className="w-[80px] bg-[#181918] z-50 h-full text-gray-400 overflow-y-auto ">
          <div className={`w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <BsGrid1X2 /> </span>
            <span className="text-xs font-medium">Design</span>
          </div>

          <div className={`w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <FaShapes /> </span>
            <span className="text-xs font-medium">Shapes</span>
          </div>

          <div className={`w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <GiCloudUpload /> </span>
            <span className="text-xs font-medium">Upload</span>
          </div>

          <div className={`w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <TfiText /> </span>
            <span className="text-xs font-medium">Test</span>
          </div>

          <div className={`w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <FaFolder /> </span>
            <span className="text-xs font-medium">Project</span>
          </div>

          <div className={`w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <FaImage /> </span>
            <span className="text-xs font-medium">Images</span>
          </div>

          <div className={`w-full h-[80px] cursor-pointer flex justify-center items-center flex-col gap-1 hover:text-gray-100`}>
            <span className="text-2xl"> <RxTransparencyGrid /> </span>
            <span className="text-xs font-medium">Background</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main