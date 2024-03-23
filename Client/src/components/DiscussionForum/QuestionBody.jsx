/* eslint-disable react/prop-types */
import { MdOutlineReply } from "react-icons/md";
import { Link } from "react-router-dom";

const QuestionBody = ({title,body,id}) => {
  return (
    <div className="h-auto p-4 w-[80%] mx-auto my-2 bg-white rounded-md">
        <div className="flex justify-between">
          <p className="font-semibold">{title}</p>
          <Link
              to={`/questions/${id}/${title}/${body}`}
              className="mt-2 block text-sm text-gray-500 hover:text-gray-700"
            >
             <MdOutlineReply size="20px"  />
            </Link>
          
        </div>
        <p className="">{body}</p>
    </div>
  )
}

export default QuestionBody