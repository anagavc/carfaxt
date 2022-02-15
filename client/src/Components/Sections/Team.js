import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeadingFour } from "../UI/FontStyles/Headings";
import { HeadingParagraph } from "../UI/FontStyles/Headings";
import staff1 from "../../images/staff1.png";
import staff2 from "../../images/user1.png";
import staff3 from "../../images/reviewer.png";
import { AboutParagraph } from "../UI/FontStyles/Paragraph";
import classnames from "classnames";
import { FadeUpAnimation } from "../UI/Animations/Animations";

const Team = (props) => {
  const staff = [
    {
      id: 1,
      image: staff2,
      name: "Andrew Smith",
      position: "Customer Service Agent",
      bgColor: "bg-blue-light",
    },
    {
      id: 2,
      image: staff1,
      name: "Isabella Smith",
      position: "Technical Lead",
      bgColor: "bg-gray",
    },
    {
      id: 3,
      image: staff3,
      name: "Jonathan Doe",
      position: "Executive Officer",
      bgColor: "bg-blue-light",
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <FadeUpAnimation className="flex flex-col w-full items-center my-40">
      <HeadingFour color="text-gray" case="uppercase">
        Our Team
      </HeadingFour>
      <HeadingParagraph>Meet the team behind Carfaxt</HeadingParagraph>
      <div className="flex flex-col lg:flex-row justify-around space-y-12 lg:space-y-0 lg:space-x-8 w-4/5 mt-10">
        {staff.map((worker) => {
          const classStr = classnames(
            "flex flex-col justify-end h-80 px-6",
            worker.bgColor
          );
          return (
            <div
              className="flex flex-col w-full lg:w-2/5 h-2/5 space-y-6 transform transition duration-500 hover:scale-110"
              key={worker.id}
            >
              <div
                className={classStr}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <img src={worker.image} className="h-60 mx-auto" alt="staff" />
              </div>
              <div className="flex space-x-4">
                <span className="bg-blue border-2 border-blue"></span>

                <div className="flex flex-col space-y-2">
                  <HeadingFour color="text-blue">{worker.name}</HeadingFour>
                  <AboutParagraph color="text-gray">
                    {worker.position}
                  </AboutParagraph>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </FadeUpAnimation>
  );
};

export default Team;
