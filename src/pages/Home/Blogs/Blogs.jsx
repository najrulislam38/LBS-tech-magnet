import Container from "../../../components/Container";
import Title from "../../../components/Title";
import wordPress from "../../../assets/images/blogs/wordpress2.jpg";
import wordPress1 from "../../../assets/images/blogs/wordpress1.jpg";
import brand from "../../../assets/images/blogs/branding.jpg";
import web from "../../../assets/images/blogs/web.jpg";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="my-20">
      <Container>
        <div>
          <Title Title={"Latest News & Updates"}></Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="blog overflow-hidden w-full h-[320px] relative">
              <img
                src={wordPress}
                alt=""
                className="w-full h-full  object-cover"
              />
              <div className="absolute bottom-0 left-0 m-2 p-2 bg-[#000000b3]">
                <h3 className="text-lg md:text-xl font-medium mb-2">
                  Wordpress Website Upbeat WordPress Wonders: Versatility,
                  Security, Global Impact.
                </h3>
                <div className="blog-content">
                  <p>
                    Introduction WordPress is a natural wonder in the vast world
                    of the internet. It started as a simple...
                  </p>
                  <button className=" mt-5 mb-2 bg-primary hover:bg-gradient-to-r from-primary to-secondary/80 text-white px-3 py-2 rounded duration-300 font-medium active:scale-90">
                    Read More...
                  </button>
                </div>
              </div>
            </div>
            <div className="blog overflow-hidden w-full h-[320px] relative">
              <img src={web} alt="" className="w-full h-full  object-cover" />
              <div className="absolute bottom-0 left-0 m-2 p-2 bg-[#000000b3]">
                <h3 className="text-lg md:text-xl font-medium mb-2">
                  Aesthetics Web Design With affirmation in 2024
                </h3>
                <div className="blog-content">
                  <p>
                    Deep Dive into Aesthetics Web Design with Affirmation!
                    Aesthetics web design today means a...
                  </p>
                  <button className=" mt-5 mb-2 bg-primary hover:bg-gradient-to-r from-primary to-secondary/80 text-white px-3 py-2 rounded duration-300 font-medium active:scale-90">
                    Read More...
                  </button>
                </div>
              </div>
            </div>
            <div className="blog overflow-hidden w-full h-[320px] relative">
              <img src={brand} alt="" className="w-full h-full  object-cover" />
              <div className="absolute bottom-0 left-0 m-2 p-2 bg-[#000000b3]">
                <h3 className="text-lg md:text-xl font-medium mb-2">
                  A Solid Brand Identity Needs Your Business Now!
                </h3>
                <div className="blog-content">
                  <p>
                    Nowadays, building a solid brand identity is no longer an
                    option. A strong brand personality plays a...
                  </p>
                  <button className=" mt-5 mb-2 bg-primary hover:bg-gradient-to-r from-primary to-secondary/80 text-white px-3 py-2 rounded duration-300 font-medium active:scale-90">
                    Read More...
                  </button>
                </div>
              </div>
            </div>
            <div className="blog overflow-hidden w-full h-[320px] relative">
              <img
                src={wordPress1}
                alt=""
                className="w-full h-full  object-cover"
              />
              <div className="absolute bottom-0 left-0 m-2 p-2 bg-[#000000b3]">
                <h3 className="text-lg md:text-xl font-medium mb-2">
                  WordPress Wonders: Exploring the Magic Behind the Platform
                </h3>
                <div className="blog-content">
                  <p>
                    WordPress is one name that stands out as a natural wonder in
                    the vast world of the internet. It...
                  </p>
                  <button className=" mt-5 mb-2 bg-primary hover:bg-gradient-to-r from-primary to-secondary/80 text-white px-3 py-2 rounded duration-300 font-medium active:scale-90">
                    Read More...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
