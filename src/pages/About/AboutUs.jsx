import Container from "../../components/Container";
import aboutImg1 from "../../assets/images/about/about-us-1.jpg";

const AboutUs = () => {
  return (
    <div className="mt-10 pb-10">
      <Container>
        <div className="w-full flex flex-col md:flex-row gap-10 lg:gap-16 justify-between items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              About LBS Tech
            </h2>
            <p>
              Welcome to LBS Tech Magnet, your trusted partner in brand building
              and digital transformation. We empower small businesses and
              startups to establish a solid online presence and thrive in the
              digital landscape.
            </p>
            <h4 className="my-4 lg:my-8 text-xl md:text-2xl font-semibold">
              Our Mission
            </h4>
            <p>
              Our mission is simple to empower small business owners and
              startups to realize their full potential in the digital realm. We
              are committed to helping every business shine online.
            </p>
            <h4 className="my-4 lg:my-8 text-xl md:text-2xl font-semibold">
              What We Offer
            </h4>
            <p>
              “LBS Tech Magnet” is not just a{" "}
              <span className="text-red-500">branding agency</span>. We are
              dedicated allies on your journey to success. We offer
              comprehensive solutions tailored to your unique needs, designed to
              elevate your brand and maximize your online presence.
            </p>
          </div>
          <div>
            <img src={aboutImg1} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
