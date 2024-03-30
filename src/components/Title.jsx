import PropTypes from "prop-types";

const Title = ({ Title }) => {
  return (
    <div>
      <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold">{Title}</h3>
    </div>
  );
};

Title.propTypes = {
  Title: PropTypes.string,
};

export default Title;
