
const Image = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {
        [1, 2, 3, 4, 5].map((img, i) =>
          <div key={i} className="w-full h-[100px] overflow-hidden rounded-sm cursor-pointer ">
            <img className="object-fill w-full h-full" src="https://placehold.co/300x300" alt="" />
          </div>
        )
      }
    </div>
  )
}

export default Image