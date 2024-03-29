"use client";
import React from "react";
import { AnimatedText } from "../animated/AnimatedText";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ContactOptions from "../ui/contact-options";
import WorkingHours from "../ui/working-hours";
import { Button } from "../ui/button";

function Hero() {
  const t = useTranslations("hero");

  const animation = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="grid md:grid-cols-2 md:gap-10 max-w-7xl items-center  mx-4">
      <div className="flex flex-col  gap-6 md:gap-10 text-start ">
        <motion.h1
          variants={animation}
          initial="hidden"
          animate="visible"
          className="md:text-4xl text-2xl font-bold  "
        >
          {t("title")}
          <span className="text-primary">Elit</span>{" "}
          <AnimatedText
            className="text-primary"
            words={["Washing", "Drying", "Ironing", "Service"]}
          />
        </motion.h1>
        <motion.p
          variants={animation}
          initial="hidden"
          animate="visible"
          className="text-justify text-xs md:text-sm"
        >
          {t("description")}
        </motion.p>
        <div className="grid grid-cols-2 gap-4  items-center">
          <ContactOptions />
          <WorkingHours />
        </div>

        <Button className="w-full md:w-1/2 mt-10  mx-auto">Contact now</Button>
      </div>

      <video autoPlay loop muted className="w-full h-screen object-cover">
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;

/* const reviews = [
  { name: "Ali", review: "Harika bir deneyimdi!" },
  { name: "Ayşe", review: "Çok memnun kaldım, tavsiye ederim." },
  // ... diğer müşteri yorumları
];

type ReviewCardProps = {
  animate?: "visible" | "hidden";
  customer?: any;
};

const ReviewCard = ({ animate = "hidden", customer }: ReviewCardProps) => {
  return (
    <motion.div
      key={customer.name}
      variants={{
        hidden: { opacity: 0, x: -200 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.2,
            duration: 0.5,
          },
        },
        exit: {
          opacity: 1,
          x: 200,
          transition: {
            duration: 0.5,
          },
        },
      }}
      animate={animate}
      initial="hidden"
      className="border rounded-lg bg-accent"
    >
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-full bg-primary"></div>
          <div className="flex flex-col">
            <h4 className="text-sm font-bold">{customer.name}</h4>
            <span className="text-xs text-gray-400">Customer</span>
          </div>
        </div>
        <p className="text-xs md:text-sm">{customer.review}</p>
      </div>
    </motion.div>
  );
};
const TestimonialSlider = () => {
  // Burada slider'ın hangi testimonal'ı gösterdiğini takip edecek state
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Her 5 saniyede bir testimonal'ı değiştirecek
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div key={current} className="px-16">
      <ReviewCard animate="visible" customer={reviews[current]} />
    </motion.div>
  );
};
 */
