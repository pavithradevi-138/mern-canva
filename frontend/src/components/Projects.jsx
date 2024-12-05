import { Link } from "react-router"

const Projects = () => {
  return (
    <div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide ">
      <div className="grid grid-cols-2 gap-2">
        {
          [1, 2, 3, 4, 5].map((img, i) =>
            <Link key={i} className="w-full h-[100px] overflow-hidden rounded-sm cursor-pointer ">
              <img className="object-fill w-full h-full" src="https://placehold.co/300x300" alt="" />
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Projects