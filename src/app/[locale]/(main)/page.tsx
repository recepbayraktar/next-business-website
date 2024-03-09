"use client";
import Hero from "@/components/layout/Hero";
import { motion } from "framer-motion";
import InfoCard from "@/components/ui/info-card";
import Map from "@/components/layout/Map";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PlusCircleFilled } from "@ant-design/icons";

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-between ">
      <Hero />
      <div className=" max-w-7xl"></div>
      <Steps />
      <FaqSection />
      <Map className=" h-96 mt-20 max-w-7xl" />
    </div>
  );
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Steps = () => {
  const [selectedStep, setSelectedStep] = useState<number | undefined>();
  const t = useTranslations("steps");
  return (
    <div className="flex flex-col items-center gap-10 py-20 text-center  bg-accent w-full ">
      <Dialog>
        <h4 className="text-xl font-bold">How it works?</h4>
        <h2 className="text-4xl font-bold">GET IT DONE IN 4 STEPS</h2>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t(`step${selectedStep}-details-title`)}</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>

        <motion.ul
          variants={container}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          className="grid grid-cols-4 gap-10 max-w-7xl"
        >
          <motion.li variants={item}>
            <DialogTrigger onClick={() => setSelectedStep(1)}>
              <InfoCard
                key={1}
                title="STEP 1"
                subtitle="Pickup"
                imageSrc="https://fakeimg.pl/160x220/ffffff/?text=Step"
              />
            </DialogTrigger>
          </motion.li>
          <motion.li variants={item}>
            <DialogTrigger onClick={() => setSelectedStep(2)}>
              <InfoCard
                key={2}
                title="STEP 2"
                subtitle="Cleaning"
                imageSrc="https://fakeimg.pl/160x220/ffffff/?text=Step"
              />
            </DialogTrigger>
          </motion.li>
          <motion.li variants={item}>
            <DialogTrigger onClick={() => setSelectedStep(3)}>
              <InfoCard
                key={3}
                title="STEP 3"
                subtitle="Delivery"
                imageSrc="https://fakeimg.pl/160x220/ffffff/?text=Step"
              />
            </DialogTrigger>
          </motion.li>
          <motion.li variants={item}>
            <DialogTrigger onClick={() => setSelectedStep(4)}>
              <InfoCard
                key={4}
                title="STEP 4"
                subtitle="Payment"
                imageSrc="https://fakeimg.pl/160x220/ffffff/?text=Step"
              />
            </DialogTrigger>
          </motion.li>
        </motion.ul>
      </Dialog>
    </div>
  );
};

const FaqSection = () => {
  return (
    <div className="max-w-7xl w-full ">
      <h2 className="text-2xl font-bold text-center my-8">
        Frequently Asked Questions
      </h2>

      <Collapsible className="w-full flex flex-col gap-4 ">
        <FaqQuestion
          question="How do I place an order?"
          answer="You can place an order by calling us at 1234567890 or by visiting our website."
        />

        <FaqQuestion
          question="How do I place an order?"
          answer="You can place an order by calling us at 1234567890 or by visiting our website."
        />

        <FaqQuestion
          question="How do I place an order?"
          answer="You can place an order by calling us at 1234567890 or by visiting our website."
        />
      </Collapsible>
    </div>
  );
};

const FaqQuestion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Collapsible className="w-full  ">
      <CollapsibleTrigger className="w-full">
        <div className="flex items-center justify-between w-full p-4 text-lg font-bold text-white bg-primary rounded-t-md">
          <span>{question}</span>
          <PlusCircleFilled size={24} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4 text-sm font-bold text-black bg-accent rounded-b-md">
          {answer}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
