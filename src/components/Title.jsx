import PropTypes from "prop-types";

const Title = ({ Title }) => {
  return (
    <div>
      <h3 className="text-lg md:text-2xl lg:text-4xl font-bold">{Title}</h3>
    </div>
  );
};

Title.propTypes = {
  Title: PropTypes.string,
};

export default Title;
