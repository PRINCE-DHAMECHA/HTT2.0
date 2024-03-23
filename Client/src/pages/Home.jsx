import Hero from "../components/Home/Hero";
import intro from "../assets/intro.mp4";

const Home = () => {
  return (
    <>
      <section>
            <div className="h-screen">
              <video
                autoPlay
                loop
                muted
                src={intro}
                className="absolute top-0 left-0 w-full h-screen object-cover"
              ></video>
              <p className="text-7xl text-white">EMPOWER YOUR SUCCESS WITH US</p>
            </div>
      </section>
      <Hero />
    </>
  );
};

export default Home;
