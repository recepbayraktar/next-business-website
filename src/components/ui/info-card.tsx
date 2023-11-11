import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
interface InfoCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const InfoCard = ({ title, subtitle, imageSrc }: InfoCardProps) => {
  return (
    <motion.li
      variants={item}
      className="w-72 bg-lime/60  rounded-3xl  shadow-xl"
    >
      <div className="p-4 flex flex-col gap-4">
        <h4 className="text-xl">{title}</h4>
        <h2 className="text-2xl text-primary">{subtitle}</h2>
      </div>

      <div className="flex items-center justify-center p-4">
        <Image width={160} height={220} src={imageSrc} alt="" />
      </div>
    </motion.li>
  );
};

export default InfoCard;
