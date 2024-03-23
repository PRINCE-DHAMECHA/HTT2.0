import img from "../../assets/img2.jpg"
import { Button } from "../ui/button";

const CourseCard = () => {
  return (
    <div className="max-w-sm m-2 rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Title Here</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
         <Button className="bg-black text-white px-6 py-3 rounded-md hover:bg-[#9E2B59] transition-colors duration-300">
              Buy Now
         </Button>
      </div>
    </div>
  )
}

export default CourseCard