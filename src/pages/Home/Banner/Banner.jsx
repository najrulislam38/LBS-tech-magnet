import Container from "../../../components/Container";
import "./Banner.css";
import heroVideo from "../../../assets/images/BannerVideo.webm";

const Banner = () => {
  return (
    <div id="banner">
      <Container>
        <div className="w-full h-full md:h-[100vh] flex flex-col md:flex-row justify-center items-center gap-7">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-poppins font-bold leading-tight mb-3">
              Brand Building Agency
            </h1>
            <p className="mb-8 mt-6">
              <span className="text-secondary"> LBS Tech Magnet</span>, a
              renowned international brand building agency specializing in
              digital branding services, is dedicated to assisting brands in
              redefining their experiences and driving business growth.
            </p>
            <button className="py-2 px-4 bg-primary font-semibold hover:bg-gradient-to-r from-primary to-secondary/80 duration-300 rounded-sm active:scale-90 ">
              Contact Us
            </button>
          </div>
          <div className="hidden md:block md:w-1/2">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              className="w-full"
            ></video>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
