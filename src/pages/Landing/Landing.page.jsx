import Analytics from "./sections/Analytics.section";
import Features from "./sections/Features.secton";
import Header from "./sections/Header.section";
import Hero from "./sections/Hero.section";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Analytics />
    </div>
  );
};

export default Landing;
