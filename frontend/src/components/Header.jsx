import { Link } from "react-router"
import logo from "../assets/logo.png"

const Header = () => {
  const saveImage = () => {

  }
  const downloadImage = () => {

  }
  return (
    <div className="h-[60px] bg-gradient-to-r from-[#212122] via-[#272826] to-[#2a2b2c] w-full ">
      <div className="flex items-center justify-between h-full px-10 text-gray-300">
        <Link to='/'>
          <img src={logo} alt="logo" className="w-[150px]" />
        </Link>
        <span className="text-xl">2D Panel</span>
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <button onClick={saveImage} className="px-3 py-[6px] outline-none bg-[#22522627] rounded-sm ">Save</button>
          <button onClick={downloadImage} className="px-3 py-[6px] outline-none bg-[#22522627] rounded-sm ">Download</button>
        </div>

      </div>

    </div>
  )
}

export default Header