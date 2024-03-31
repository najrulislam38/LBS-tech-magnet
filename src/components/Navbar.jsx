import { Link } from "react-router-dom";
import logo from "./../assets/images/Lbs-logo.png";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/services"}>Services</Link>
      </li>
      <li>
        <Link to={"/about"}>About Us</Link>
      </li>
      <li>
        <Link to={"/"}>Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navBar sticky top-0 bg-transparent border-b border-black ">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 py-4">
        <div className="w-full flex justify-between items-center ">
          <div className="flex items-center ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="navLinks flex flex-col gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-transparent rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex gap-1 items-end">
              <img src={logo} alt="" className="w-8 lg:w-10" />
              <h2 className="text-base md:text-2xl font-bold">
                <span className="text-xl md:text-2xl text-secondary ">L</span>
                BS T.Magnet
              </h2>
            </div>
          </div>
          <div className=" hidden lg:flex">
            <ul className="navLinks flex  font-medium items-center gap-6">
              {navLinks}
            </ul>
          </div>

          <button className="bg-primary hover:bg-gradient-to-r from-primary to-secondary/80 text-white p-3 rounded-full duration-300">
            <FaUserAlt className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
