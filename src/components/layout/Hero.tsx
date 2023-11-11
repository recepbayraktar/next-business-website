"use client";
import React from "react";
import { Button } from "../ui/button";
import { AnimatedText } from "../animated/AnimatedText";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("hero");
  return (
    <div className="blob-container   w-full md:min-h-screen">
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="shape-blob three"></div>
      <div className="grid md:grid-cols-2 md:gap-10 max-w-7xl items-center  mx-4  mt-10  md:-mt-24 ">
        <div className="flex flex-col gap-6 md:gap-12 text-start">
          <h1 className="md:text-4xl text-2xl font-bold  ">
            {t("title")}
            <span className="text-primary">Elit</span>{" "}
            <AnimatedText
              className="text-primary"
              words={["Washing", "Drying", "Ironing", "Service"]}
            />
          </h1>
          <p className="text-justify text-xs md:text-base">
            {t("description")}
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button>{t("appointment")}</Button>
            <Button variant="outline">{t("learnMore")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
