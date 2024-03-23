import { CarouselDemo } from "./CarouselImg"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div>
      <section className="bg-white py-20">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <CarouselDemo />
          <div className="max-w-md text-center lg:text-left lg:ml-12">
            <h2 className="text-4xl font-bold mb-4">
              Learn Sewing from Experts
            </h2>
            <p className="text-lg mb-8">
              Join our platform and explore a wide range of sewing courses
              tailored to your needs.
            </p>
            <Button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Course Title</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus quis arcu in enim ullamcorper fermentum nec sed
                arcu.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
            {/* Add more course cards here */}
          </div>
        </div>
      </section>

      {/* Add more sections as needed */}
    </div>
  )
}

export default Hero