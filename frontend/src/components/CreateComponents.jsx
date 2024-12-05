
const CreateComponents = ({info, currentComponent, removeComponent}) => {

  const randValue = Math.floor(Math.random() * 100)
  let html= ''

  if  (info.name ===  "main_frame"){
    html = <div onClick={()=>info.setCurrentComponent(info)} className="hover:border-[2px] hover:border-indigo-500 shadow-md "
    style={{
      width: info.width + 'px',
      height: info.height + 'px',
      background: info.color,
      zIndex: info.z_index
    }}>
        {
          info.image && <img src={info.image} alt="image" className="w-full h-full" />
        }
    </div>
  }
  return html;
}

export default CreateComponents