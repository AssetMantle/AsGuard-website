import React from "react";
import Section from "../components/Section";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";

export default function FeaturedCreators({ featuredCreatorData }) {
  return (
    <Section title={featuredCreatorData.title}>
      <div className=" featured-creator mt-5" style={{ overflow: "hidden" }}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={true}
          loop={true}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {featuredCreatorData.slides &&
            Array.isArray(featuredCreatorData.slides) &&
            featuredCreatorData.slides.length > 0 &&
            React.Children.toArray(
              featuredCreatorData.slides.map((data) => (
                <SwiperSlide>
                  <img className="img" src={`${data.image}`} alt={""} />
                  <div className="d-flex flex-column slide__active__contents">
                    <a
                      href={data.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex flex-row align-items-center p-3 ps-4 gap-3 mt-auto slide__active__contents__container"
                      onClick={(e) => !data.social && e.preventDefault()}
                    >
                      <div className="slide__active__contents__container_image">
                        <img
                          src={`${data.avatar}`}
                          alt={`${data.name}'s avatar`}
                        />
                      </div>
                      <div className="d-flex flex-column gap-2 justify-content-center slide__active__contents__container_details">
                        <h4 className="m-0 body1 gap-2 d-flex align-items-end text-primary">
                          {data.name} <i className="bi bi-patch-check"></i>
                        </h4>
                        <p className="m-0 text-white caption">{data.profile}</p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))
            )}
        </Swiper>
      </div>
    </Section>
  );
}
