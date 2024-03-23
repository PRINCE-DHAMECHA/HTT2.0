import Logo from "../assets/Logo.jpg"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between sticky top-0 z-50 items-center mr-2">
      {/* Left Side Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 mr-2" />
      </div>
      <div className="flex gap-8 mr-10 uppercase">
        <a href="#testimonials" className="text-white hover:text-gray-300">
          Testimonials
        </a>
        <a href="#photo-gallery" className="text-white hover:text-gray-300">
          Photo Gallery
        </a>
        <a href="#courses" className="text-white hover:text-gray-300">
          Courses
        </a>
        <a href="#contact-us" className="text-white hover:text-gray-300">
          Contact Us
        </a>
        <a href="#about-us" className="text-white hover:text-gray-300">
          About Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
