
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Map from "./Map";
import { AnimatedText } from "../animated/AnimatedText";

type Props = {};

const Hero = (props: Props) => {

  return (
    <div className="grid grid-cols-2 gap-10 h-screen items-center  -mt-20">
      <div className="flex flex-col gap-12 text-start">
        <h1 className="text-7xl font-bold  ">
          <span className="text-primary">Elit</span>{" "}
          <AnimatedText words={["Laundry", "Çamaşırhane", "Wäscherei"]} />
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, voluptatem, quas, quos voluptas aperiam quia quibusdam
          accusantium quod voluptatum doloribus? Quisquam voluptate, voluptatem,
          quas, quos voluptas aperiam quia quibusdam accusantium quod voluptatum
          doloribus?
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <Map className=" lg:w-full  lg:h-3/4 border-4 border-primary rounded-sm" />
    </div>
  );
};

export default Hero;
