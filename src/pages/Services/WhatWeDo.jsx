import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { MdDoubleArrow } from "react-icons/md";

const WhatWeDo = () => {
  return (
    <div className="pt-10 pb-20">
      <Container>
        <Title Title={"Let us know where you need help!"}></Title>
        <div className="py-8">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-2 border-primary rounded-md p-5 hover:bg-gradient-to-t from-primary to-transparent duration-300">
              <h3 className="text-lg md:text-2xl font-bold mb-2 ">
                BRANDING DESIGN
              </h3>
              <p className="text-sm md:text-base">
                Attract your ideal customers, elevate your value, and turn your
                business into a brand.
              </p>
              <button className=" mt-6 mb-2 bg-primary hover:bg-gradient-to-r from-primary to-secondary/80 text-white px-3 py-2 rounded duration-300 font-medium active:scale-90">
                See Service
              </button>
            </div>
            <div className="border-2 border-primary rounded-md p-5 hover:bg-gradient-to-t from-primary to-transparent duration-300">
              <h3 className="text-lg md:text-2xl font-bold mb-2 ">
                USER EXPERIENCE DESIGN
              </h3>
              <p className="text-sm md:text-base">
                Create a website that is engaging and converts leads and sales
                while you sleep.
              </p>
              <button className=" mt-6 mb-2 bg-primary hover:bg-gradient-to-r from-primary to-secondary/80 text-white px-3 py-2 rounded duration-300 font-medium active:scale-90">
                See Service
              </button>
            </div>
            <div className="border-2 border-primary rounded-md p-5 hover:bg-gradient-to-t from-primary to-transparent duration-300">
              <h3 className="text-lg md:text-2xl font-bold mb-2 ">
                SOFTWARE & WEB DEVELOPMENT
              </h3>
              <p className="text-sm md:text-base">
                Build your online growth engine that attracts valuable customers
                to your business.
              </p>
              <button className=" mt-6 mb-2 bg-primary hover:bg-gradient-to-r from-primary to-secondary/80 text-white px-3 py-2 rounded duration-300 font-medium active:scale-90">
                See Service
              </button>
            </div>
            <div className="border-2 border-primary rounded-md p-5 hover:bg-gradient-to-t from-primary to-transparent duration-300">
              <h3 className="text-lg md:text-2xl font-bold mb-2 ">
                DIGITAL MARKETING
              </h3>
              <p className="text-sm md:text-base">
                Build your online growth engine that attracts valuable customers
                to your business.
              </p>
              <button className=" mt-6 mb-2 bg-primary hover:bg-gradient-to-r from-primary to-secondary/80 text-white px-3 py-2 rounded duration-300 font-medium active:scale-90">
                See Service
              </button>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 md:mt-20">
            <div className="">
              <h3 className="text-lg md:text-2xl font-bold mb-3 ">
                BRAND DESIGN
              </h3>
              <div className="space-y-px">
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Brand Guidance</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Brand Identity</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Iconography</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Branding Campaigns</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Customer Experience</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Packaging Design</span>
                </Link>
              </div>
            </div>
            <div className="">
              <h3 className="text-lg md:text-2xl font-bold mb-3 ">
                UX/UI DESIGN
              </h3>
              <div className="space-y-px">
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Web Design</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>User Journeys</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Personas</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>UX/UI Design</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Wireframing</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Product/App Design</span>
                </Link>
              </div>
            </div>
            <div className="">
              <h3 className="text-lg md:text-2xl font-bold mb-3 ">
                SOFTWARE & WEB DEVELOPMENT
              </h3>
              <div className="space-y-px">
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>WordPress</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Website Speed Optimization</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Application Software</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Shopify</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Mobile App (iOS/Android)</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Headless CMS / Static</span>
                </Link>
              </div>
            </div>
            <div className="">
              <h3 className="text-lg md:text-2xl font-bold mb-3 ">
                Digital Marketing
              </h3>
              <div className="space-y-px">
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Search Engine Optimization</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Social Media Content</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Email Marketing</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>PPC/Search Engine Ads</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Facebook/Instagram Ads</span>
                </Link>
                <Link
                  to={""}
                  className="flex items-center justify-start gap-3 font-semibold hover:text-secondary"
                >
                  <MdDoubleArrow />
                  <span>Snapchat & TikTok Ads</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
