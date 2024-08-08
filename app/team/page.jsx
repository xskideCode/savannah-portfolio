"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Image from "next/image";

const developers = [
  {
    num: "01",
    name: "Leon",
    title: "Backend Developer",
    description:
      "I excel at crafting elegant digital experiences and I am proficient in various prgramming languages and technologies.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/photo1.png",
    stats: [
      { num: 5, text: "Years of Experience" },
      { num: 15, text: "Projects completed" },
      { num: 6, text: "Technologies mastered" },
      { num: 300, text: "Code commits" },
    ],
  },
  {
    num: "02",
    name: "Bruce ",
    title: "Network Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis felis vitae nisl vulputate tristique.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/dev3.jpg",
    stats: [
      { num: 7, text: "Years of Experience" },
      { num: 20, text: "Projects completed" },
      { num: 8, text: "Technologies mastered" },
      { num: 600, text: "Code commits" },
    ],
  },
  {
    num: "03",
    name: "Noah",
    title: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis felis vitae nisl vulputate tristique.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/dev1.png",
    stats: [
      { num: 5, text: "Years of Experience" },
      { num: 15, text: "Projects completed" },
      { num: 6, text: "Technologies mastered" },
      { num: 300, text: "Code commits" },
    ],
  },
  {
    num: "04",
    name: "Juliet",
    title: "Software Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis felis vitae nisl vulputate tristique.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/dev4.jpg",
    stats: [
      { num: 7, text: "Years of Experience" },
      { num: 20, text: "Projects completed" },
      { num: 8, text: "Technologies mastered" },
      { num: 600, text: "Code commits" },
    ],
  },
];

const Team = () => {
  const [developer, setDeveloper] = useState(developers[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setDeveloper(developers[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-3xl leading-none font-extrabold text-transparent text-outline">
              {" "}
              {developer.num}{" "}
            </span>
            <span className="text-xl">{developer.title}</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br />{" "}
              <span className="text-accent">{developer.name}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {developer.description}
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="order-1 xl:order-none mb-8 xl:mb-0 w-full xl:w-[50%]"
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[500px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {developers.map((developer, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    {/* image */}
                    <div className="relative p-6 ml-12 xl:ml-40 mb-10 z-50 rounded-lg w-[300px] xl:w-[450px] h-[300px] xl:h-[450px] bg-pink-50/20">
                      <Image
                        src={developer.image}
                        alt={developer.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles=" absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 flex gap-4 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover rounded-lg text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </motion.div>
        </div>
      </div>
      <Stats stats={developer.stats} />
    </motion.section>
  );
};

export default Team;
