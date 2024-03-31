import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-20">
      <Container>
        <div>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-start py-10">
            <div>
              <h4 className="text-xl md:text-2xl font-bold uppercase">
                Contact Us
              </h4>
              <p className="text-secondary font-medium mt-4 mb-2">
                developer@LBS.com
              </p>
              <p className="text-sm">
                216 Stelton Rd #C2, Piscataway, NJ 08854, United States
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold uppercase mb-4">
                Follow us
              </h4>
              <div className="flex items-center justify-start gap-3">
                <FaFacebook className="text-xl hover:scale-110 duration-300  " />
                <FaInstagram className="text-xl hover:scale-110 duration-300  " />
                <FaTwitter className="text-xl hover:scale-110 duration-300  " />
                <FaLinkedin className="text-xl hover:scale-110 duration-300  " />
              </div>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold uppercase mb-4">
                Approach
              </h4>
              <div className="flex flex-col gap-0.5">
                <Link
                  to={""}
                  className="hover:text-secondary text-sm hover:underline"
                >
                  How to We work
                </Link>
                <Link
                  to={""}
                  className="hover:text-secondary text-sm hover:underline"
                >
                  Delivery Framework
                </Link>
                <Link
                  to={""}
                  className="hover:text-secondary text-sm hover:underline"
                >
                  Information Security
                </Link>
                <Link
                  to={""}
                  className="hover:text-secondary text-sm hover:underline"
                >
                  Corporate Social Responsibility.
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold uppercase mb-4">
                Legal
              </h4>
              <div className="flex flex-col gap-0.5">
                <Link
                  to={""}
                  className="hover:text-secondary text-sm hover:underline"
                >
                  Terms and Conditions
                </Link>
                <Link
                  to={""}
                  className="hover:text-secondary text-sm hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  to={""}
                  className="hover:text-secondary text-sm hover:underline"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
          <hr className="text-white w-full" />
          <p className="text-center text-sm py-10 text-gray-200">
            &copy; {new Date().getFullYear()}, All Reserved by LBS Private
            Limited.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
