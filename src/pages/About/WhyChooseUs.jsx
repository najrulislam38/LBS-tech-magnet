import Container from "../../components/Container";
import aboutImg2 from "../../assets/images/about/about-us-2.jpg";

const WhyChooseUs = () => {
  return (
    <div className="mt-20 mb-10">
      <Container>
        <div className="w-full flex flex-col  md:flex-row-reverse gap-10 lg:gap-16 justify-between items-center">
          <div>
            <h4 className="mb-4 lg:mb-8 text-xl md:text-2xl font-semibold">
              Why Choose Us?
            </h4>
            <p>
              We offer tailored solutions to meet your business goals and
              requirements. Our team of professionals delivers exceptional
              results through collaboration with clients. We are committed to
              increasing your ROI and driving business growth.
            </p>
            <h4 className="my-4 lg:my-8 text-xl md:text-2xl font-semibold">
              You Can Expect:
            </h4>
            <p>
              We maintain the highest quality standards to deliver excellent
              results. Our unwavering support and guidance are always available
              to you. We stay up-to-date with the latest technologies and
              strategies to help you stay ahead of the competition.
            </p>
          </div>
          <div>
            <img src={aboutImg2} alt="" />
          </div>
        </div>
        <p className="mt-20">
          We are here to help you succeed with a team of experts passionate and
          experience. Let’s Establish your presence online embark on this
          journey together and turn your vision into reality.
        </p>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
