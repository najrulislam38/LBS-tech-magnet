import { FaArrowCircleRight } from "react-icons/fa";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { title, image, description } = service || {};
  return (
    <div className="p-3 group border-s border-b-4 border-b-transparent hover:border-b-secondary flex flex-col justify-between duration-300">
      <div className="">
        <div className="overflow-hidden mb-4">
          <img
            src={image}
            alt=""
            className=" w-full group-hover:scale-110 duration-300"
          />
        </div>

        <h3 className="text-lg md:text-xl font-semibold ">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <button className="my-3 group-hover:text-secondary ">
        <span>Read More</span>
        <FaArrowCircleRight className="inline ml-1 " />
      </button>
    </div>
  );
};

export default ServiceCard;
