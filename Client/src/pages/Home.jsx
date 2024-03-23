import Hero from "../components/Home/Hero"
import Landing from "../assets/landing.jpg"

const Home = () => {
  return (
    <>
      <section className="bg-gray-800 text-white py-20" style={{
            height: 'calc(100vw- 85px)'}}>
        <div className="container mx-auto">
          <img
            src={Landing}
            alt="Banner"
            className="mx-auto w-full"
          />
        </div>
      </section>
        <Hero />
    </>
  )
}

export default Home