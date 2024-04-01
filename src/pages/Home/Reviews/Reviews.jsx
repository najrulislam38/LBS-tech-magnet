import Container from "../../../components/Container";
import Title from "../../../components/Title";
import "./Reviews.css";
import client1 from "../../../assets/images/clients/129417.jpg";
import client2 from "../../../assets/images/clients/4660.jpg";
import client3 from "../../../assets/images/clients/629.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="reviews mt-20 pt-8">
      <Container>
        <Title Title={"What our clients say"}></Title>
      </Container>
      <div className="">
        <div className="w-full">
          <div className="p-10 max-w-screen-2xl mx-auto">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Container>
                  <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center p-10 md:p-16 ">
                    <div className="min-w-[350px] flex flex-col justify-center items-center ">
                      <div className="w-[180px] h-[180px] rounded-full overflow-hidden mb-5">
                        <img
                          src={client1}
                          alt=""
                          className="w-full h-full object-cover "
                        />
                      </div>
                      <h4 className="text-lg font-semibold">Patrick Reich</h4>
                      <p className="text-sm">Co-Founder &amp; CEO</p>
                      <p className="font-medium">Bunnet</p>
                    </div>
                    <div>
                      <p>
                        The expectations for the quality of the initial product
                        were very high. I think LBC Tech did a great job
                        ensuring those expectations are met. We met the
                        developers we were going to be working with and it
                        quickly became apparent that they are very qualified and
                        were able to deliver the vision that we had from our
                        side for the product. They clearly told us what they
                        were going to do, and if there were questions or
                        problems along the way, they clarified them really
                        quickly thanks to transparent communication.
                      </p>
                    </div>
                  </div>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <Container>
                  <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center p-10 md:p-16 ">
                    <div className="min-w-[350px] flex flex-col justify-center items-center ">
                      <div className="w-[180px] h-[180px] rounded-full overflow-hidden mb-5">
                        <img
                          src={client2}
                          alt=""
                          className="w-full h-full object-cover "
                        />
                      </div>
                      <h4 className="text-lg font-semibold">John Thomas</h4>
                      <p className="text-sm">Co-Founder &amp; CEO</p>
                      <p className="font-medium">SkyBlue</p>
                    </div>
                    <div>
                      <p>
                        The expectations for the quality of the initial product
                        were very high. I think LBC Tech did a great job
                        ensuring those expectations are met. We met the
                        developers we were going to be working with and it
                        quickly became apparent that they are very qualified and
                        were able to deliver the vision that we had from our
                        side for the product. They clearly told us what they
                        were going to do, and if there were questions or
                        problems along the way, they clarified them really
                        quickly thanks to transparent communication.
                      </p>
                    </div>
                  </div>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <Container>
                  <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center py-10 px-1  md:p-16 ">
                    <div className="min-w-[350px] flex flex-col justify-center items-center ">
                      <div className="w-[180px] h-[180px] rounded-full overflow-hidden mb-5">
                        <img
                          src={client3}
                          alt=""
                          className="w-full h-full object-cover "
                        />
                      </div>
                      <h4 className="text-lg font-semibold ">Lio Thamil</h4>
                      <p className="text-sm">Co-Founder &amp; CEO</p>
                      <p className="font-medium text-base">QTech</p>
                    </div>
                    <div>
                      <p>
                        The expectations for the quality of the initial product
                        were very high. I think LBC Tech did a great job
                        ensuring those expectations are met. We met the
                        developers we were going to be working with and it
                        quickly became apparent that they are very qualified and
                        were able to deliver the vision that we had from our
                        side for the product. They clearly told us what they
                        were going to do, and if there were questions or
                        problems along the way, they clarified them really
                        quickly thanks to transparent communication.
                      </p>
                    </div>
                  </div>
                </Container>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
