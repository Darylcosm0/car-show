"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          {" "}
          we don't pray for love we pray for cars -
        </h1>
        <p className="hero__subtitle">
          streamline your car rental experience effortless booking
        </p>
        <CustomButton
          title="Explore cars"
          containerStyles=""
          handleClick={() => {
            handleScroll;
          }}
        />
        <div className="hero__image-container"></div>
        <div className="hero__image"></div>
        <Image src=""/>
      </div>
    </div>
  );
};

export default Hero;
