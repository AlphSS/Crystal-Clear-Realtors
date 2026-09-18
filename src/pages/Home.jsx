import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedProperties from "../components/FeaturedProperties";
import Locations from "../components/Locations";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProperties />
      <Locations />
      <WhyChooseUs />
      <CTA />
    </>
  );
}

export default Home;