import { HeadingFour, HeadingParagraph } from "../UI/FontStyles/Headings";
import ReviewItem from "../UI/Placeholders/ReviewItem";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import reviewer1 from "../../images/reviewer.png";
import reviewer2 from "../../images/staff6.png";
import reviewer3 from "../../images/staff4.png";
import reviewer4 from "../../images/user1.png";

import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import { FadeUpAnimation } from "../UI/Animations/Animations";

SwiperCore.use([Pagination, Autoplay, EffectFade]);
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      caption: "Excellent service",
      text: "They were extremely reliable and delivered way beyond my expectation",
      image: reviewer1,
      name: "Vincent Neumann",
      occupation: "Realtor",
    },
    {
      id: 2,
      caption: "Impressive customer service",
      text: "I was promptly attended to and my needs were met",
      image: reviewer2,
      name: "Bianca Lester",
      occupation: "Digital marketer",
    },
    {
      id: 3,
      caption: "Will definitely be back",
      text: "There was always someone on hand to meet my every need,didn't have any issue.",
      image: reviewer3,
      name: "Felicity Banks",
      occupation: "Entrepreneur",
    },
    {
      id: 4,
      caption: "I highly recommend",
      text: "Yeah,twas a five star experience renting with them",
      image: reviewer4,
      name: "Adams Andrew",
      occupation: "Architect",
    },
  ];
  return (
    <FadeUpAnimation className="flex flex-col items-center  py-16">
      <HeadingFour color="text-gray" case="uppercase">
        customer's reviews
      </HeadingFour>
      <HeadingParagraph>What our clients love about us</HeadingParagraph>
      <div className="flex w-full p-4 md:px-0 md:w-4/5 justify-evenly mt-8 space-x-4">
        <Swiper
          loop
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 3,
            },
          }}
          className="h-full"
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review.id}>
                <ReviewItem
                  id={review.id}
                  text={review.text}
                  caption={review.caption}
                  image={review.image}
                  name={review.name}
                  occupation={review.occupation}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </FadeUpAnimation>
  );
};

export default Reviews;
