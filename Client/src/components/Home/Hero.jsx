import { Button } from "../ui/button";
import { CarouselDemo } from "./CarouselImg";
import CourseCard from "./CourseCard";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center relative z-10">
        <CarouselDemo />
          <div className="max-w-md text-center lg:text-left lg:ml-12">
            <h2 className="text-4xl font-bold">
              Learn Sewing from Experts
            </h2>
            <p className="text-lg mb-8">
              Join our platform and explore a wide range of sewing courses
              tailored to your needs.
            </p>
            <Button className="bg-[#9E2B59] text-white px-6 py-3 rounded-md hover:bg-black transition-colors duration-300">
              Explore Courses
            </Button>
          </div>
        </div>
        <section>
          <h1 className="text-3xl font-bold text-black m-4">Best Offering For You</h1>
          <div className="flex">
            <CourseCard /> <CourseCard />
          </div>
        </section> 
    </div>
  );
};

export default Hero;
