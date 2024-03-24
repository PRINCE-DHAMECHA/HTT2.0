/* eslint-disable react/prop-types */
import { CgProfile } from "react-icons/cg";
import { MdOutlineReply } from "react-icons/md";
import { Link } from "react-router-dom";

const QuestionBody = ({ title, body, id, user }) => {
  return (
    <div className="h-auto p-4 w-[80%] mx-auto my-2 bg-white rounded-md">
      <div className="flex justify-between">
        <p className="">Q: {title}</p>
        <Link
          to={`/questions/${id}`}
          className="mt-2 block text-sm text-gray-500 hover:text-gray-700"
        >
          <MdOutlineReply size="20px" />
        </Link>
      </div>
      <div className="flex gap-3 flex-col">
        <p className="">{body}</p>
        <div className="flex flex-row justify-start gap-2">
          <CgProfile className="flex justify-center mt-1"/>
          <p className="font-semibold">{user}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionBody;
