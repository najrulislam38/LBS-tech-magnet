import Award from "./Award/Award";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import BrandStrategic from "./BrandStrategic/BrandStrategic";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Gallery />
      <Award />
      <BrandStrategic />
      <Blogs />
      <Reviews />
    </div>
  );
};

export default Home;
