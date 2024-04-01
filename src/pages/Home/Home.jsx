import Award from "./Award/Award";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import BrandStrategic from "./BrandStrategic/BrandStrategic";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Gallery />
      <Award />
      <BrandStrategic />
      <Blogs />
    </div>
  );
};

export default Home;
