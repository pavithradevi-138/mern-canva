

const TemplateDesign = () => {
  return (
    <>
      {
        [1, 2, 3, 4, 5].map((d, i)=> 
          <div key={i} className="group w-full rounded-md overflow-hidden bg-[#ffffff12] cursor-pointer ">
            <img className="w-full h-full rounded-md" src="https://placehold.co/300x300" alt="" />
          </div>
         )
      }
    </>
  )
}

export default TemplateDesign