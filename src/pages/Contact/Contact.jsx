import "./Contact.css";
import { GrLocation } from "react-icons/gr";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <section>
        <div id="contact-header" className="flex justify-center items-center">
          <div>
            <p className=" text-center text-3xl md:text-5xl font-semibold tracking-widest">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl mt-6 text-white text-center font-bold  drop-shadow-2xl capitalize">
              Lets make something awesome together!
            </h2>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 my-20 min-h-[60vh] ">
          <div className="md:flex gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl  ">
                <span className="text-3xl text-secondary mb-5 font-semibold">
                  Have you any Question?
                </span>{" "}
                <br /> Contact us without any hesitation
              </h3>
              <div className="my-10 space-y-10">
                <div className="flex gap-4">
                  <GrLocation className="mt-1 text-3xl text-secondary"></GrLocation>
                  <div className="space-y-2">
                    <h4 className="font-poppins text-xl font-medium">
                      Address:
                    </h4>
                    <p className="font-medium ">
                      216 Stelton Rd #C2, Piscataway, NJ 08854, United States
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BiSolidPhoneCall className="mt-1 text-3xl text-secondary"></BiSolidPhoneCall>
                  <div className="space-y-2">
                    <h4 className="font-poppins text-xl font-medium">
                      Phone No.:
                    </h4>
                    <p className="font-medium text-sm ">01XXX-XXXXXX</p>
                    <p className="font-medium text-sm ">01XXX-XXXXXX</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <HiOutlineMail className="mt-1 text-3xl text-secondary"></HiOutlineMail>
                  <div className="space-y-2">
                    <h4 className="font-poppins text-xl font-medium">
                      Email :
                    </h4>
                    <p className="font-medium ">developer@LBS.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl text-center font-semibold">
                Fil Up Your information
              </h3>
              <form className="border px-7 py-7 rounded-xl mt-5 ">
                <div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-white appearance-none  dark:focus:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_email"
                    id="phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none  dark:focus:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone Number
                  </label>
                </div>

                <div>
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    placeholder="write your opinion! "
                    className="border w-full p-3 mb-4 rounded bg-transparent active:border-secondary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" mt-6 mb-2 bg-primary hover:bg-gradient-to-r from-primary to-secondary/80 text-white px-3 py-2 rounded duration-300 font-medium active:scale-90"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
