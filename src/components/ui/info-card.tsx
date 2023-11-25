import { Expand } from "lucide-react";
import Image from "next/image";
import React from "react";

interface InfoCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const InfoCard = ({ title, subtitle, imageSrc }: InfoCardProps) => {
  return (
    <>
      <div className="w-72 bg-lime/60  rounded-3xl  shadow-xl  cursor-pointer">
        <div className="p-4 flex flex-col gap-4">
          <h4 className="text-xl">{title}</h4>
          <h2 className="text-2xl text-primary">{subtitle}</h2>
        </div>

        <div className="flex items-center justify-center p-4">
          <Image width={160} height={220} src={imageSrc} alt="" />
        </div>
        {/* more info text */}
        <div className="flex items-center justify-center p-4">
          <p className="text-sm text-primary">More info</p>
          <Expand size={16} className="ml-2 text-secondary" />
        </div>
      </div>
    </>
  );
};

export default InfoCard;
