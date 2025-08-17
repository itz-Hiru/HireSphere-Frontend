import Analytics from "./sections/Analytics.section";
import Features from "./sections/Features.secton";
import Footer from "./sections/Footer.section";
import Header from "./sections/Header.section";
import Hero from "./sections/Hero.section";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Analytics />
      <Footer />
    </div>
  );
};

export default Landing;
