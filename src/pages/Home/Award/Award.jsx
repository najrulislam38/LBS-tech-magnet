import Container from "../../../components/Container";
import Title from "../../../components/Title";
import award1 from "../../../assets/images/award/clutch-champion-badge-fall-2023.svg";
import award2 from "../../../assets/images/award/custom-software-development-companies-min-min.webp";
import award4 from "../../../assets/images/award/selected-firms-award-new.png";
import award5 from "../../../assets/images/award/tech-behemoths-custom-software-development-2023.png";
import award6 from "../../../assets/images/award/topdevelopers-top-software-2023.png";

const Award = () => {
  return (
    <div className="py-20">
      <Container>
        <Title Title={"Awards and recognition"}></Title>
        <div className="flex flex-wrap gap-10 justify-between items-center py-10">
          <div className="w-[100px] lg:w-[150px]  h-[100px] lg:h-[150px] bg-gradient-to-t from-primary to-transparent rounded-md p-4">
            <img
              src={award1}
              alt="award-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100px] lg:w-[150px]  h-[100px] lg:h-[150px] bg-gradient-to-t from-primary to-transparent rounded-md p-4">
            <img
              src={award2}
              alt="award-image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[100px] lg:w-[150px]  h-[100px] lg:h-[150px] bg-gradient-to-t from-primary to-transparent rounded-md p-4">
            <img
              src={award4}
              alt="award-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100px] lg:w-[150px]  h-[100px] lg:h-[150px] bg-gradient-to-t from-primary to-transparent rounded-md p-4">
            <img
              src={award5}
              alt="award-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100px] lg:w-[150px]  h-[100px] lg:h-[150px] bg-gradient-to-t from-primary to-transparent rounded-md p-4">
            <img
              src={award6}
              alt="award-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Award;
