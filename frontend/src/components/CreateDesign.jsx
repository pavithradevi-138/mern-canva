import { useLocation } from "react-router"
import CreateComponents from "./CreateComponents";
import { useRef } from "react";

const CreateDesign = () => {
  const ref = useRef()
  const {state} = useLocation()
  console.log(state);

  const obj = {
    name : "main_frame",
    type : "rect",
    id : Math.floor((Math.random()*100) + 1),
    height : state.height,
    width : state.width,
    z_index : 1,
    color : "green",
    image : ""

  }
  
  return (
    <div className="relative flex items-center justify-center w-screen h-screen">
      <div ref={ref} className="relative w-auto h-auto overflow-auto">
      <CreateComponents info={obj} currentComponent={{}} />
      </div>
    </div>
  )
}

export default CreateDesign