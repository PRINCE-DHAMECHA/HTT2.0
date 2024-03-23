import Logo from "../assets/Logo.jpg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={`p-4 flex justify-between sticky top-0 z-50 items-center mr-2 bg-black text-white`}>
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-[40px] m-2 w-[170px]"  style={{ filter: "invert(1)" }}/>
      </div>
      <div className="flex gap-8 mr-10 uppercase">
        {/* <Link to="/question" className="mt-2 block text-sm text-gray-500 hover:text-gray-700">
          Community
        </Link> */}
        <a href="#photo-gallery" className="hover:text-[#9E2B59]" >
          Photo Gallery
        </a>
        <a href="#courses" className="hover:text-[#9E2B59]">
          Courses
        </a>
        <a href="#contact-us" className="hover:text-[#9E2B59]">
          Contact Us
        </a>
        <a href="#about-us" className="hover:text-[#9E2B59]">
          About Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
