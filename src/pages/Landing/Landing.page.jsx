import Features from "./sections/Features.secton"
import Header from "./sections/Header.section"
import Hero from "./sections/Hero.section"

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
    </div>
  )
}

export default Landing