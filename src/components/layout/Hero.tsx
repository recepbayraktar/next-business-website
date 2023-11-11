import React from "react";
import { Button } from "../ui/button";
import { AnimatedText } from "../animated/AnimatedText";

function Hero() {
  return (
    <div className="blob-container   w-full md:min-h-screen">
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="shape-blob three"></div>
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl items-center  mx-4  mt-10  md:-mt-24 ">
        <div className="flex flex-col gap-12 text-start">
          <h1 className="md:text-7xl text-4xl font-bold  ">
            <span className="text-primary">Elit</span>{" "}
            <AnimatedText words={["Laundry", "Çamaşırhane", "Wäscherei"]} />
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, voluptatem, quas, quos voluptas aperiam quia quibusdam
            accusantium quod voluptatum doloribus? Quisquam voluptate,
            voluptatem, quas, quos voluptas aperiam quia quibusdam accusantium
            quod voluptatum doloribus?
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
